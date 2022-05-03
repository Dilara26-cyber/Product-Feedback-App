import { createContext } from "react";

import useFilter from "../../hooks/useFilter";

export type FilterContextType = {
  filters: string[];
  handleFilterSelect(name: string): void;
  selectedFilter: string | undefined;
};

export interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: FilterProviderProps) => {
 const { filters, selectedFilter, handleFilterSelect } = useFilter();

  return (
    <FilterContext.Provider value={{ filters, selectedFilter, handleFilterSelect }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;