"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGet, usePost } from "@/app/api/useApiHooks";
import { getCookie } from "@/app/utils/clientCookieUtils";
import { FiLogOut, FiUsers, FiBarChart, FiArrowRight } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DashboardContext, Permissions } from "./context";
import Logo from "@/app/components/Logo";
import NotificationDropdown from "@/app/components/NotificationDropdown";
import { API_URL, AUTH_URL } from "@/app/api/Config";

const IS_ONPREM = process.env.NEXT_PUBLIC_IS_ONPREM || "";

// ------------------------------
// Layout Props
// ------------------------------
interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [selectedDbId, setSelectedDbId] = useState<number | null>(null);
  const [isDumpLoading] = useState(false);


  // 1) Fetch all DBs
  // const { data: databases, isLoading: isDBLoading } = useGet<DatabaseItem[]>(
  //   `${API_URL}get_all_dbs/`,
  //   {
  //     queryKey: ["get_all_dbs"],
  //   },
  // );

  // 2) Fetch user permissions
  const { data: permissions } = useGet<Permissions>(`${API_URL}user_permissions/`, {
    queryKey: ["user_permissions"],
    enabled: IS_ONPREM !== "true", // Skip permissions on on-prem
  });


  // 3) Logout mutation
  const { mutate: logout, isPending: isLogoutPending } = usePost<
    void,
    { email: string }
  >(`${AUTH_URL}logout/`, {
    headers: {
      api_version: "v1",
    },
    onSuccess: () => {
      console.log("Successfully logged out");
      window.location.href = "/";
    },
  });

  // If we have DBs and no currently selected DB, pick the first
  // useEffect(() => {
  //   if (databases && databases.length > 0 && selectedDbId === null) {
  //     setSelectedDbId(databases[0].id);
  //   }
  // }, [databases, selectedDbId]);

  // Logout handler
  const handleLogout = () => {
    const userEmail = getCookie("user-email") || "Anonymous";
    logout({ email: userEmail });
  };


  return (
    <DashboardContext.Provider
      value={{
        // databases,
        selectedDbId,
        setSelectedDbId,
        permissions,
      }}
    >
      <div className="flex h-screen flex-col overflow-y-hidden bg-gray-50">
        {/* --------------------- */}
        {/* Header / Navbar */}
        {/* --------------------- */}
        <header className="flex w-full bg-white px-6 py-4 shadow-sm border-b border-gray-200">
          {/* Logo */}
          <div className="flex pr-8">
            <Logo height={40} width={200} className="mx-auto" />
          </div>

          {/* Greeting */}
          {/* <div className="flex items-center text-xl">
            <span className="font-light">Hello </span>
            // {/* <span className="ml-1 font-medium">{userEmail}</span> */}
          {/* </div>  */}

          {/* Right side buttons */}
          <div className="ml-auto flex items-center gap-3">
            {/* DB Select Dropdown */}
            {/* {databases && (
              <Select
                options={databases.map((db) => ({
                  value: db.id.toString(),
                  label: db.db_name,
                }))}
                value={selectedDbId?.toString() || ""}
                placeholder="Select Database"
                onChange={(e) => {
                  setSelectedDbId(Number(e.target.value));
                }}
              />
            )} */}

            <Link
              href="/clients"
              className="group flex flex-row items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 active:scale-95"
            >
              <FiUsers className="h-4 w-4" />
              Clients
            </Link>

            {IS_ONPREM === "true" && (
              <Link
                href="dashboard"
                className="group flex flex-row items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 active:scale-95"
              >
                <FiBarChart className="h-4 w-4" />
                Dashboard
              </Link>
            )}

            {/* Navigation Arrow */}
            <div className="flex items-center text-gray-400">
              <FiArrowRight className="h-5 w-5" />
            </div>

            {/* Notifications */}
            <NotificationDropdown />

            {/* Logout */}
            <button
              data-tooltip-id="logout"
              data-tooltip-content="Logout"
              className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600 hover:shadow-md active:scale-95"
              onClick={handleLogout}
            >
              {isLogoutPending ? (
                <div className="loader my-auto h-4 w-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
              ) : (
                <FiLogOut className="h-4 w-4 transition-transform group-hover:scale-110" />
              )}
            </button>
            <Tooltip id="logout" place="left" className="z-50" />
          </div>
        </header>

        {/* --------------------- */}
        {/* Main Content */}
        {/* --------------------- */}
        <div className="flex flex-grow overflow-auto">
          <div className="relative flex-grow px-8 py-6 max-xl:px-12 max-lg:px-10 max-md:px-6">
            <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {isDumpLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
                  <p className="mt-4 text-base font-medium text-gray-600">Loading data dump...</p>
                  <p className="mt-2 text-xs text-gray-500">Please wait while we prepare your data</p>
                </div>
              </div>
            ) : (
              <>
                {/* Render whichever child page is requested (/dashboard, /dashboard/dump, etc.) */}
                {children}
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
