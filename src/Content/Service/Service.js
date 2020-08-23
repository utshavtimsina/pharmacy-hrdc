import React, { useEffect } from "react";
import "./Service.css";

import axios from "axios";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Slide,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import UpdateService from "./UpdateService";

function Service() {
  const [state, setstate] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [department, setDepartment] = React.useState([]);

  const [checked, setChecked] = React.useState(false);
  const [updator, setupdator] = React.useState({});
  const updatePatients = (service) => {
    setChecked(true);
    setupdator(service);
  };
  useEffect(() => {
    axios
      .get("https://utshav-billing.herokuapp.com/service/list")
      .then((res) => setstate([...res.data]));
    axios
      .get("https://utshav-billing.herokuapp.com/getAllCategory")
      .then((res) => setCategory([...res.data]));
    axios
      .get("https://utshav-billing.herokuapp.com/getAllDepartment")
      .then((res) => setDepartment([...res.data]));
  }, []);
  return (
    <div className="content__table">
      <Paper className="content__header">
        <div className="searchIcon">
          <input type="text" placeholder="Search Service..." />
          <SearchOutlinedIcon />
        </div>

        <Table>
          <TableHead>
            <TableRow className="patient__Header">
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Fee</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Per Price</TableCell>

              <TableCell>Department</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((service, keys) => (
              <TableRow
                key={service.serviceId}
                onDoubleClick={() => updatePatients(service)}
                className="patient__details"
              >
                <TableCell>{service.serviceTitle}</TableCell>
                <TableCell>{service.categoryName}</TableCell>
                <TableCell>{service.fee}</TableCell>
                <TableCell>{service.discount}</TableCell>
                <TableCell>{service.perPrice}</TableCell>
                <TableCell>{service.departmentName}</TableCell>

                <TableCell>
                  <IconButton onClick={() => updatePatients(service)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteSweepIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        <div className="slider">
          <UpdateService
            setChecked={setChecked}
            updator={updator}
            category={category}
            department={department}
          />
        </div>
      </Slide>
    </div>
  );
}

export default Service;
