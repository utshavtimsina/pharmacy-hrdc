import React from "react";
import "./UpdateService.css";
import { IconButton, Divider, Button } from "@material-ui/core";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function UpdateService({ setChecked, updator, category, department }) {
  const [service, setservice] = React.useState(updator);
  const [isChanged, setisChanged] = React.useState(false);

  const UpdatePatient = () => {
    if (!isChanged) {
      setChecked(false);
    } else {
      updator = service;
      setChecked(false);
    }
  };
  return (
    <div className="UpdateService">
      <div className="UpdateService__Icon">
        <h1>
          Update Service:{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            {service.serviceId}
          </span>
        </h1>

        <IconButton onClick={() => setChecked(false)}>
          {" "}
          <HighlightOffIcon
            style={{
              fontSize: "40px",
            }}
          />
        </IconButton>
      </div>

      <div className="updatecontent__container">
        <div className="firstColoum__updateService">
          <h1> Service: </h1>
          <div className="updateService__column">
            <h3> Service Title</h3>
            <input
              className="updatePatient__inputField"
              label="patient"
              value={service.serviceTitle}
              onChange={(e) => {
                setservice({
                  ...service,
                  serviceTitle: e.target.value,
                });
                setisChanged(true);
              }}
            />
          </div>
          <div className="updateService__column">
            <h3> Service Fee</h3>
            <input
              className="updatePatient__inputField"
              label="address"
              value={service.fee}
              onChange={(e) => {
                setservice({
                  ...service,
                  fee: e.target.value,
                });
                setisChanged(true);
              }}
            />
          </div>
          <div className="updateService__column">
            <h3> Discount</h3>
            <input
              className="updatePatient__inputField"
              label="patient"
              type="number"
              value={service.discount}
              onChange={(e) => {
                setservice({
                  ...service,
                  discount: e.target.value,
                });
                setisChanged(true);
              }}
            />

            <h3> Per Price</h3>
            <input
              className="updatePatient__inputField"
              label="patient"
              value={service.perPrice}
              onChange={(e) => {
                setservice({
                  ...service,
                  perPrice: e.target.value,
                });
                setisChanged(true);
              }}
            />
          </div>
          <div className="updateService__column">
            <h3> Category</h3>
            <select
              name="gender"
              className="updatePatient__inputField"
              value={service.categoryName}
              onChange={(e) => {
                setservice({
                  ...service,
                  categoryName: e.target.value,
                });
                setisChanged(true);
              }}
            >
              {category.map((category) => (
                <option key={category.id} value={category.categoryName}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            <h3> Department</h3>
            <select
              name="gender"
              className="updatePatient__inputField"
              value={service.departmentName}
              onChange={(e) => {
                setservice({
                  ...service,
                  departmentName: e.target.value,
                });
                setisChanged(true);
              }}
            >
              {department.map((department) => (
                <option key={department.id} value={department.departmentName}>
                  {department.departmentName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Divider />
      </div>
      <Button className="updatePatient__button" onClick={UpdatePatient}>
        {isChanged ? "update" : "go Back"}
      </Button>
    </div>
  );
}

export default UpdateService;
