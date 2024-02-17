import React from "react";
import Login from "./components/auth/Login";
import ResponsiveAppBar from "./components/header/Header";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Login />
    </>
  );
}

export default App;
