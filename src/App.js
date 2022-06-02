import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import LogIn from "./component/LogIn";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LogIn
              username={{ name, setName }}
              password={{ password, setPassword }}
            ></LogIn>
          }
        />
        <Route path="/playlist" element={<Layout username={name} />} />
      </Routes>
    </>
  );
}

export default App;
