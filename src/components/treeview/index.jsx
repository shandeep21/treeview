import MenuList from "./menuList";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  console.log("##", menus);
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
