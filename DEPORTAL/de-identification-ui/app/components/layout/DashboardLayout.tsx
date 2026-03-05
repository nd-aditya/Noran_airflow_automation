// "use client";

// import React, { createContext, useEffect, useState } from "react";
// import { useGet, usePost } from "@/app/api/useApiHooks";
// import { getCookie } from "@/app/utils/clientCookieUtils";
// import { FaDownload, FaPlus } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { Tooltip } from "react-tooltip";
// import Select from "../common/Select";
// import Logo from "../Logo";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || "";
// const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

// // ------------------------------
// // Types
// // ------------------------------
// interface DatabaseItem {
//   id: number;
//   db_name: string;
// }

// interface Permissions {
//   AddDataBase: { has_permission: boolean };
// }

// // ------------------------------
// // Layout Props
// // ------------------------------
// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// /**
//  * This context helps child pages know which DB is selected
//  * and the list of DBs. Alternatively, you can pass via props.
//  */
// interface DashboardContextValue {
//   databases?: DatabaseItem[];
//   selectedDbId: number | null;
//   setSelectedDbId: React.Dispatch<React.SetStateAction<number | null>>;
//   permissions?: Permissions;
// }
// export const DashboardContext = createContext<DashboardContextValue>({
//   databases: [],
//   selectedDbId: null,
//   setSelectedDbId: () => {},
//   permissions: undefined,
// });

// // ------------------------------
// // MAIN LAYOUT COMPONENT
// // ------------------------------
// export default function DashboardLayout({ children }: DashboardLayoutProps) {
//   const [selectedDbId, setSelectedDbId] = useState<number | null>(null);

//   // 1) Fetch all DBs
//   const { data: databases, isLoading } = useGet<DatabaseItem[]>(
//     `${API_URL}get_all_dbs/`,
//     {
//       queryKey: ["get_all_dbs"],
//     },
//   );

//   // 2) Fetch user permissions
//   const { data: permissions } = useGet<Permissions>(
//     `${API_URL}user_permissions/`,
//     { queryKey: ["user_permissions"] },
//   );

//   // 3) Logout mutation
//   const { mutate: logout, isPending } = usePost<void, { email: string }>(
//     `${AUTH_URL}logout/`,
//     {
//       headers: {
//         api_version: "v1",
//       },
//       onSuccess: () => {
//         console.log("Successfully logged out");
//         window.location.href = "/";
//       },
//     },
//   );

//   // Set a default DB if none is selected yet
//   useEffect(() => {
//     if (databases && databases.length > 0 && selectedDbId === null) {
//       setSelectedDbId(databases[0].id);
//     }
//   }, [databases, selectedDbId]);

//   // Handle user logout
//   const handleLogout = () => {
//     if (typeof window !== "undefined") {
//       const userEmail = getCookie("user-email") || "Anonymous";
//       logout({ email: userEmail });
//     }
//   };

//   // Grab user email
//   const userEmail =
//     typeof window !== "undefined" ? getCookie("user-email") : "";

//   // Layout UI
//   return (
//     <DashboardContext.Provider
//       value={{
//         databases,
//         selectedDbId,
//         setSelectedDbId,
//         permissions,
//       }}
//     >
//       <div className="flex h-screen flex-col overflow-y-hidden bg-background">
//         {/* Header */}
//         <header className="flex w-full bg-white px-8 py-4 shadow-sm">
//           <div className="flex pr-8">
//             <Logo height={40} width={200} className="mx-auto" />
//           </div>
//           {/* Greeting */}
//           <div className="flex items-center text-xl">
//             <span className="font-light">Hello, </span>
//             <span className="ml-1 font-medium">{userEmail}</span>
//           </div>

//           {/* Right side: DB dropdown, Dump, Add DB, Logout */}
//           <div className="ml-auto flex items-center gap-2">
//             {/* DB Dropdown */}
//             {databases && (
//               <Select
//                 options={databases.map((db) => ({
//                   value: db.id.toString(),
//                   label: db.db_name,
//                 }))}
//                 value={selectedDbId?.toString() || ""}
//                 placeholder="Select Database"
//                 onChange={(e) => {
//                   const dbId = Number(e.target.value);
//                   setSelectedDbId(dbId);
//                 }}
//               />
//             )}

//             {/* Dump button */}
//             {permissions?.AddDataBase.has_permission && (
//               <a
//                 href="/dashboard/dump"
//                 className="flex flex-row items-center rounded-md border bg-mainText px-6 py-2 text-white transition-all duration-200 hover:border-mainText hover:bg-transparent hover:text-mainText"
//               >
//                 <FaDownload className="mr-2" />
//                 Dump
//               </a>
//             )}

//             {/* Add Database button */}
//             {permissions?.AddDataBase.has_permission && (
//               <a
//                 href="/dashboard/add-database"
//                 className="flex flex-row items-center rounded-md border bg-mainText px-6 py-2 text-white transition-all duration-200 hover:border-mainText hover:bg-transparent hover:text-mainText"
//               >
//                 <FaPlus className="mr-2" />
//                 Add Database
//               </a>
//             )}

//             {/* Logout */}
//             <button
//               data-tooltip-id="logout"
//               data-tooltip-content="Logout"
//               className="ml-2 flex h-10 w-10 justify-center rounded-full bg-white align-middle text-lg hover:underline hover:shadow-md"
//               onClick={handleLogout}
//             >
//               {isPending ? (
//                 <div className="loader my-auto"></div>
//               ) : (
//                 <FiLogOut className="my-auto" />
//               )}
//             </button>
//             <Tooltip id="logout" place="left" />
//           </div>
//         </header>

//         {/* Main Content Area */}
//         <div className="flex flex-grow overflow-auto">
//           <div className="relative flex-grow px-32 max-xl:px-16 max-lg:px-12 max-md:px-8">
//             <ToastContainer />
//             {/* Render whichever page calls this layout */}
//             {isLoading ? <div>Loading DBs...</div> : children}

//             {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-secText">
//               © NeuroDiscovery AI 2025
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </DashboardContext.Provider>
//   );
// }
