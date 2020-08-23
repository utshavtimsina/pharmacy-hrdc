import React from "react";
import "./UpdatePatient.css";
import { IconButton, Divider, Button, Slide } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function UpdatePatient({ setChecked, updator }) {
  const [patient, setpatient] = React.useState(updator);
  const [isChanged, setisChanged] = React.useState(false);
  const [hasCareTaker, sethasCareTaker] = React.useState(updator.hasCareTaker);

  const UpdatePatient = () => {
    if (!isChanged) {
      setChecked(false);
    }
  };
  return (
    <div className="UpdatePatient">
      <div className="UpdatePatient__Icon">
        <h1>
          Update Patient:{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            {patient.patientId}
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
        <div className="firstColoum__updatePatient">
          <h1> Patient: </h1>
          <h3> Full Name</h3>
          <input
            className="updatePatient__inputField"
            label="patient"
            value={patient.fullName}
            onChange={(e) => {
              setpatient({
                ...patient,
                fullName: e.target.value,
              });
              setisChanged(true);
            }}
          />
          <h3> Address</h3>
          <input
            className="updatePatient__inputField"
            label="address"
            value={patient.address}
            onChange={(e) => {
              setpatient({
                ...patient,
                address: e.target.value,
              });
              setisChanged(true);
            }}
          />
          <h3> Gender</h3>
          <select
            name="gender"
            className="updatePatient__inputField"
            value={patient.gender}
            onChange={(e) => {
              setpatient({
                ...patient,
                gender: e.target.value,
              });
              setisChanged(true);
            }}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
          </select>

          <h3> Contact No</h3>
          <input
            className="updatePatient__inputField"
            label="patient"
            value={patient.contactNo}
            onChange={(e) => {
              setpatient({
                ...patient,
                contactNo: e.target.value,
              });
              setisChanged(true);
            }}
          />
          <Button
            style={{
              margin: "10px",
              borderRadius: "30px",
            }}
            className="updatePatient__cross"
            onClick={() => sethasCareTaker(true)}
          >
            <AddCircleIcon /> Add Care Taker
          </Button>
        </div>
        <Divider />

        <Slide direction="right" in={hasCareTaker} mountOnEnter unmountOnExit>
          <div className="secondColoum__updatePatient">
            <IconButton
              onClick={() => sethasCareTaker(false)}
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
              <h3> {patient.careTaker.relation}'s Name</h3>
              <input
                className="updatePatient__inputField"
                label="patient"
                value={patient.careTaker.fullName}
                onChange={(e) => {
                  setpatient({
                    ...patient,
                    careTaker: {
                      ...patient.careTaker,
                      fullName: e.target.value,
                    },
                  });
                  setisChanged(true);
                }}
              />
              <h3> {patient.careTaker.relation}'s Address</h3>
              <input
                className="updatePatient__inputField"
                label="address"
                value={patient.careTaker.address}
                onChange={(e) => {
                  setpatient({
                    ...patient,
                    careTaker: {
                      ...patient.careTaker,
                      address: e.target.value,
                    },
                  });
                  setisChanged(true);
                }}
              />

              <h3> {patient.careTaker.relation}'s contact No</h3>
              <input
                className="updatePatient__inputField"
                label="patient"
                value={patient.careTaker.contactNo}
                onChange={(e) => {
                  setpatient({
                    ...patient,
                    careTaker: {
                      ...patient.careTaker,
                      contactNo: e.target.value,
                    },
                  });
                  setisChanged(true);
                }}
              />
            </div>
          </div>
        </Slide>
      </div>
      <Button className="updatePatient__button" onClick={UpdatePatient}>
        {isChanged ? "update" : "go Back"}
      </Button>
    </div>
  );
}

export default UpdatePatient;
