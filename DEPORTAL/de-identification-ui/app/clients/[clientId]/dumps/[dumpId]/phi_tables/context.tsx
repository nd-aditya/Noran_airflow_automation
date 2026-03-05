"use client";

import { createContext } from "react";

export interface DatabaseItem {
  db_id: number;
  db_name: string;
}

export interface Permissions {
  can_create_client: boolean;
  can_create_dump: boolean;
  can_manage_users: boolean;
}

export interface DashboardContextValue {
  databases?: DatabaseItem[];
  selectedDbId: number | null;
  setSelectedDbId: (id: number | null) => void;
  permissions?: Permissions;
}

export const DashboardContext = createContext<DashboardContextValue>({
  databases: undefined,
  selectedDbId: null,
  setSelectedDbId: () => {},
  permissions: undefined,
});
