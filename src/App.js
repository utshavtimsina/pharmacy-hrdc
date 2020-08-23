import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

function App() {
  const [drawer, setdrawer] = React.useState(true);

  return (
    <div className="App">
      <Sidebar
        style={{
          marginBottom: "-5000px",
        }}
        className="sidebar"
        drawer={drawer}
      />
      <div className="content__holder">
        <Header setdrawer={setdrawer} />
        <Content />
      </div>
      {/* Content */}
    </div>
  );
}

export default App;
