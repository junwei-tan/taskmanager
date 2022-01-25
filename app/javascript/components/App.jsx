import React from "react";
import { Router, Route, Routes, Switch, useParams } from "react-router-dom";
import Tasks from "./Tasks/Tasks";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Tasks />} />
    </Routes>
  );
};

export default App;
