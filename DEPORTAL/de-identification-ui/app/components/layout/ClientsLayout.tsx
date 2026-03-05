"use client";

import { ReactNode, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiLogOut, FiArrowLeft } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import Logo from "../Logo";
import { Spinner } from "../Spinner";
import NotificationDropdown from "../NotificationDropdown";

interface ClientsLayoutProps {
  children: ReactNode;
}

export default function ClientsLayout({ children }: ClientsLayoutProps) {
  const [isLogoutPending, setIsLogoutPending] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    setIsLogoutPending(true);
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (e) {
      console.error('Logout failed', e);
    } finally {
      router.push('/login');
    }
  };

  // Determine if we should show back button and where to go
  const shouldShowBackButton = pathname !== '/clients' && pathname !== '/clients/[clientId]';
  const getBackPath = () => {
    if (pathname.includes('/dumps/')) {
      // If we're in a dump, go back to phi_tables page
      const pathParts = pathname.split('/');
      const clientId = pathParts[2];
      const dumpId = pathParts[4];
      return `/clients/${clientId}/dumps/${dumpId}/phi_tables`;
    } else if (pathname.includes('/clients/')) {
      // If we're in a client, go back to clients list
      return '/clients';
    }
    return '/clients';
  };

  const handleBack = () => {
    router.push(getBackPath());
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
        {/* Logo and Back Button */}
        <div className="flex items-center space-x-4">
          {shouldShowBackButton && (
            <button
              onClick={handleBack}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              data-tooltip-id="back"
              data-tooltip-content="Go Back"
            >
              <FiArrowLeft size={20} className="text-gray-600" />
            </button>
          )}
          <Logo height={40} width={200} />
        </div>

        {/* User / Logout */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <NotificationDropdown />

          <button
            onClick={handleLogout}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            data-tooltip-id="logout"
            data-tooltip-content="Logout"
          >
            {isLogoutPending ? (
              <Spinner />
            ) : (
              <FiLogOut size={20} className="text-gray-600" />
            )}
          </button>
          <Tooltip id="logout" place="bottom" />
          {shouldShowBackButton && <Tooltip id="back" place="bottom" />}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
