import { useState } from "react";

import { TagType } from "../utils/types";

const useSelectTag = () => {
  const tags: TagType[] = [
    { id: 1, name: "All" },
    { id: 2, name: "UI" },
    { id: 3, name: "UX" },
    { id: 4, name: "Enhancement" },
    { id: 5, name: "Bug" },
    { id: 6, name: "Feature" },
  ];
  const [selectedTag, setSelectedTag] = useState<TagType | undefined>({
    id: 1,
    name: "All",
  });

  const handleTagSelect = (id: number) => {
    if (selectedTag?.id === id) return;
    setSelectedTag(tags.find((tag) => tag.id === id));
  };

  return { tags, selectedTag, handleTagSelect };
};

export default useSelectTag;
