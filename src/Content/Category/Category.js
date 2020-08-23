import React, { useEffect } from "react";
import "./Category.css";
import { Paper, IconButton, Slide, Button, Divider } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
function Category() {
  const [category, setCategory] = React.useState([
    { id: 1, categoryName: "Radiology", parentId: "0" },
    { id: 2, categoryName: "Labratory", parentId: "0" },
    { id: 3, categoryName: "car", parentId: "2" },
    { id: 4, categoryName: "carss", parentId: "1" },
  ]);
  const [ExpandMore, setExpendMore] = React.useState(
    category.length > 0
      ? category.map((cat, i) => {
          if (i === 0) {
            return true;
          }
          return false;
        })
      : ""
  );

  useEffect(() => {}, []);

  const [isAddCategory, setisAddCategory] = React.useState(false);
  const [iseditCategory, setiseditCategory] = React.useState(false);
  const [addCategory, setaddCategory] = React.useState({});
  const addCategories = (cat) => {
    setisAddCategory(true);
    setiseditCategory(false);
    setExpendMore({
      ...ExpandMore,
      [cat.id]: true,
    });
    if (cat !== "root") {
      setaddCategory(cat);
      setaddnew({
        ...cat,
        categoryName: "",
      });
    } else {
      setaddCategory({ id: 0, categoryName: "Root", parentId: "0" });
    }
  };
  const editCategory = (cat) => {
    setiseditCategory(true);
    setisAddCategory(false);
    setaddnew(cat);
    setaddCategory(cat);
  };

  var cats =
    category.length > 0
      ? category.map((cat, id) =>
          cat.parentId === "0" ? (
            <div className="categoryupdate__li" key={id}>
              <div className="categoryupdate__liFlex">
                <li
                  onClick={() =>
                    setExpendMore({
                      ...ExpandMore,
                      [cat.id]: !ExpandMore[cat.id],
                    })
                  }
                >
                  {" "}
                  {ExpandMore[cat.id] ? (
                    <ExpandMoreIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                  {cat.parentId === "0" ? cat.categoryName : ""}
                </li>

                <IconButton
                  onClick={(e) => {
                    editCategory(cat);
                    e.preventDefault();
                  }}
                  className="updateCategory__editIcon"
                >
                  <EditIcon />
                </IconButton>

                <li
                  className="categoryUpdate__addIcon"
                  onClick={() => addCategories(cat)}
                >
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </li>
              </div>

              <ul>
                {category.map((cat1, id) =>
                  cat1.parentId === "" + cat.id ? (
                    ExpandMore[cat.id] ? (
                      <div key={id} className="categoryupdate__liFlex">
                        <li>{cat1.categoryName} </li>
                        <IconButton
                          onClick={(e) => {
                            editCategory(cat1);
                            e.preventDefault();
                          }}
                          className="updateCategory__editIcon"
                        >
                          <EditIcon />
                        </IconButton>
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          ) : (
            ""
          )
        )
      : "";
  const [addnew, setaddnew] = React.useState({
    id: 1,
    categoryName: "",
    parentId: "0",
  });
  return (
    <div className="content__table">
      <Paper className="content__header">
        <h1> Categories</h1>
        <Divider />
        <div className="updatecontent__container">
          <div className="firstColoum__updatePatient">
            <ul>
              <div className="categoryupdate__liFlex">
                <li
                  onClick={() =>
                    setExpendMore({
                      ...ExpandMore,
                      0: !ExpandMore[0],
                    })
                  }
                >
                  {ExpandMore[0] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                  root{" "}
                </li>
                <li>
                  <IconButton onClick={() => addCategories("root")}>
                    {" "}
                    <AddIcon />
                  </IconButton>{" "}
                </li>
              </div>
              <ul className={`${!ExpandMore[0] && "hiddenCategory"}  `}>
                {" "}
                {cats}
              </ul>
            </ul>
          </div>

          <Slide
            direction="right"
            in={isAddCategory || iseditCategory}
            mountOnEnter
            unmountOnExit
          >
            <div className="secondColoum__updatePatient">
              <IconButton
                onClick={() => {
                  setisAddCategory(false);
                  setiseditCategory(false);
                }}
                className="updatePatient__cross"
              >
                {" "}
                <DeleteSweepIcon
                  style={{
                    fontSize: "30px",
                  }}
                />
              </IconButton>

              <div className="secoundColumn__inside">
                <h3>
                  {" "}
                  {isAddCategory
                    ? `Add ${addCategory.categoryName}'s Subcategory`
                    : "Edit this Category"}
                </h3>

                {iseditCategory ? (
                  <input
                    className="updatePatient__inputField"
                    label="patient"
                    value={addnew.categoryName}
                    onChange={(e) => {
                      setaddnew({
                        ...addnew,
                        categoryName: e.target.value,
                      });
                    }}
                  />
                ) : (
                  <input
                    className="updatePatient__inputField"
                    label="patient"
                    value={addnew.categoryName}
                    onChange={(e) => {
                      setaddnew({
                        categoryName: e.target.value,
                      });
                    }}
                  />
                )}
                {!iseditCategory ? (
                  <Button
                    className="updatePatient__button"
                    onClick={() => {
                      addnew.id = category.length + 1;
                      addnew.parentId = "" + addCategory.id;
                      setCategory([...category, addnew]);
                      setaddnew({
                        categoryName: "",
                      });
                      setiseditCategory(false);
                      setisAddCategory(false);
                    }}
                  >
                    Add New
                  </Button>
                ) : (
                  <Button
                    className="updatePatient__button"
                    onClick={() => {
                      setCategory(
                        category.map((cats) => {
                          if (addnew.id === cats.id) {
                            return addnew;
                          }
                          return cats;
                        })
                      );
                      setiseditCategory(false);
                      setisAddCategory(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </div>
            </div>
          </Slide>
        </div>
      </Paper>
    </div>
  );
}

export default Category;
