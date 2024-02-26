import MenuItem from "./menuItem";
import "./styles.css";

export default function MenuList({ list = [] }) {
  console.log("rrrrr", list);
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : "okmokmww"}
    </ul>
  );
}
