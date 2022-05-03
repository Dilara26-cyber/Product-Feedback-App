import "./styles/globals.scss";

import FeedbackAppRoutes from "./components/Routes";
import FilterProvider from "./context/FilterProvider";
import TagSelectProvider from "./context/TagSelectProvider";

function App() {
  return (
    <FilterProvider>
      <TagSelectProvider>
        <FeedbackAppRoutes />
      </TagSelectProvider>
    </FilterProvider>
  );
}

export default App;
