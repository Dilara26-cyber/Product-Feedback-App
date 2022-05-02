import "./styles/globals.scss";

import FeedbackAppRoutes from "./components/Routes";
import TagSelectProvider from "./context/TagSelectProvider";

function App() {
  return (
    <TagSelectProvider>
      <FeedbackAppRoutes />
    </TagSelectProvider>
  );
}

export default App;
