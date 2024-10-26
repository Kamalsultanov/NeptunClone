import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Main from "./components/main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
