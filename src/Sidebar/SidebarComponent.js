import React, { useState } from "react";
import "./SidebarComponent.css";
import { Divider, Card } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link } from "react-router-dom";
function SidebarComponent({
  drawer,
  Icon,
  Desc,
  active,
  subItem,
  service,
  serviceDesc,
}) {
  const [open, setopen] = useState(false);
  const DisplaySubOptions =
    open && subItem
      ? subItem.map((item, id) => (
          <Link
            key={id}
            to={Desc}
            onClick={() => {
              setopen(false);
            }}
          >
            <h3>{item}</h3>
          </Link>
        ))
      : "";

  return (
    <div className={`sidebar__component ${active && "sidebar__active"}`}>
      <h6>{service}</h6>

      <div
        className={`SidebarComponent ${active && "sidebar__active"}`}
        onClick={() => setopen(!open)}
      >
        <Icon />
        {drawer === true ? <h3>{Desc}</h3> : ""}
        {subItem ? (
          !open ? (
            <KeyboardArrowRightIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )
        ) : (
          ""
        )}

        <Divider />
      </div>
      {open && subItem ? (
        <Card className="sidebar__subcomponent">
          <h6>{serviceDesc}</h6>
          <Divider />
          {DisplaySubOptions}
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default SidebarComponent;
