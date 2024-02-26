import { useState } from "react";
import MenuList from "./menuList";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles.css";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleExpandChildren(currentChildItem) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentChildItem]: !displayCurrentChildren[currentChildItem],
    });
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <div
            className="icon-wrapper"
            onClick={() => {
              handleExpandChildren(item.label);
            }}
          >
            <span>
              {displayCurrentChildren[item.label] ? (
                <FaMinus color="white" size={20} />
              ) : (
                <FaPlus color="white" size={20} />
              )}
            </span>
          </div>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
