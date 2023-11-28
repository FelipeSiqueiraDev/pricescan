import { useContext } from "react";

import { CompaniesContext } from "@contexts/CompaniesContext";

export function useCompanies() {
  const context = useContext(CompaniesContext);
  return context;
}
