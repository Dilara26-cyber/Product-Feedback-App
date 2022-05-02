import { createContext } from "react";

import useSelectTag from "../../hooks/useSelectTag";
import { TagType } from "../../utils/types";

export type TagContextType = {
  tags: TagType[];
  handleTagSelect(id: number): void;
  selectedTag: TagType | undefined;
};

export interface TagSelectProviderProps {
  children: React.ReactNode;
}

export const TagSelectContext = createContext<TagContextType | null>(null);

export const TagSelectProvider = ({ children }: TagSelectProviderProps) => {
  const { tags, selectedTag, handleTagSelect } = useSelectTag();

  return (
    <TagSelectContext.Provider value={{ tags, selectedTag, handleTagSelect }}>
      {children}
    </TagSelectContext.Provider>
  );
};

export default TagSelectProvider;
