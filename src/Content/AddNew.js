import React from "react";
import "./AddNew.css";

import { useHistory } from "react-router";

import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import PrintIcon from "@material-ui/icons/Print";

import PanToolIcon from "@material-ui/icons/PanTool";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import CategoryIcon from "@material-ui/icons/Category";
import EditIcon from "@material-ui/icons/Edit";
function AddNew() {
  const { push } = useHistory();

  const [opens, setOpens] = React.useState(true);
  const actions = [
    { icon: <PanToolIcon />, name: "Add Patient", redirect: "/Patient" },
    {
      icon: <SportsKabaddiIcon />,
      name: "Add Services",
      redirect: "/Services",
    },
    {
      icon: <CategoryIcon />,
      name: "Add Category",
      redirect: "/Category",
    },

    { icon: <PrintIcon />, name: "Print recipt", redirect: "/Category" },
  ];

  const handleClose = () => {
    setOpens(false);
  };

  const handleOpen = () => {
    setOpens(true);
  };

  return (
    <div className="AddNew">
      <div className="floating__button">
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          hidden={false}
          onClose={handleClose}
          onOpen={handleOpen}
          open={opens}
          direction={"right"}
          className="addNew__floatingButton"
        >
          {actions.map((action) => (
            <SpeedDialAction
              className="addNew__floatingButtonIcon"
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                handleClose();
                push(action.redirect);
              }}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

export default AddNew;
