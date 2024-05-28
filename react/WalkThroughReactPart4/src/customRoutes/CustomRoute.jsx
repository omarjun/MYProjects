
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function CustomRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default CustomRoute;
