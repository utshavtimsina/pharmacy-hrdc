import React, { useEffect } from "react";
import "./Patient.css";

import axios from "axios";
import UpdatePatient from "./UpdatePatient";
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

function Patient() {
  const [state, setstate] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [updator, setupdator] = React.useState({});
  const updatePatients = (patient) => {
    setChecked(true);
    setupdator(patient);
  };
  useEffect(() => {
    axios
      .get("https://utshav-billing.herokuapp.com/patients")
      .then((res) => setstate([...res.data]));
  }, [setstate]);
  return (
    <div className="content__table">
      <Paper className="content__header">
        <div className="searchIcon">
          <input type="text" placeholder="Search Patient..." />
          <SearchOutlinedIcon />
        </div>

        <Table>
          <TableHead>
            <TableRow className="patient__Header">
              <TableCell>SN.</TableCell>
              <TableCell>Patient Id</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((patient, keys) => (
              <TableRow
                key={patient.patientId}
                onDoubleClick={() => updatePatients(patient)}
                className="patient__details"
              >
                <TableCell>{keys + 1}</TableCell>
                <TableCell>{patient.patientId}</TableCell>
                <TableCell>{patient.fullName}</TableCell>
                <TableCell>{patient.address}</TableCell>
                <TableCell>{patient.contactNo}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>
                  <IconButton onClick={() => updatePatients(patient)}>
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
          {console.log(checked)}
          <UpdatePatient setChecked={setChecked} updator={updator} />
        </div>
      </Slide>
    </div>
  );
}

export default Patient;
