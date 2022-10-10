import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Appointment } from "./pages/Appointment";
import { Home } from "./pages/Home";
import { Levres } from "./pages/Levres";
import { Login } from "./pages/Login";
import { Make } from "./pages/Make";
import { Services } from "./pages/Services";
import { Sourcils } from "./pages/Soucils";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/sourcils" element={<Sourcils />} />
        <Route path="/levres" element={<Levres />} />
        <Route path="/make" element={<Make />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
