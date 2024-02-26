import "./App.css";
import TreeView from "./components/treeview";
import menus from "./components/treeview/data.js";

function App() {
  return (
    <div>
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
