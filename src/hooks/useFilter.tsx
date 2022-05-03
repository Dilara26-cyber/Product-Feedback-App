import { useState } from "react";

const useFilter = () => {
  const filters = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];
  
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>("Most Upvotes");

  const handleFilterSelect = (name: string) => {
    if (selectedFilter === name) return;
    setSelectedFilter(filters.find((filter) => filter === name));
  };

  return { filters, selectedFilter, handleFilterSelect };
};

export default useFilter;
