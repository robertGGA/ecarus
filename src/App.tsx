import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import NonAuthLayout from "./components/layouts/NonAuthLayout";

function App() {
  return (
    <Routes>
      <Route element={<NonAuthLayout/>} path={'/'}>
          <Route element={<MainPage/>} index/>
      </Route>
    </Routes>
  );
}

export default App;
