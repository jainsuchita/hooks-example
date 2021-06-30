import Copy from "./hooks/CopyToClipBoard";
import PageBottom from "./hooks/PageBottom";
import WindowSize from "./hooks/WindowSize";
import RightOrBottom from "./hooks/RightOrBottom";

function App() {
  return (
    <div className="app">
      <Copy />
      {/* It fetches data as it hits the bottom of the page */}
      {/* <PageBottom /> */}

      <RightOrBottom />
      {/* it would provide the dimensions of the window, both the width and height */}
      <WindowSize />
    </div>
  );
}

export default App;
