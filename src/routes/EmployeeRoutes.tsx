import { Route, Routes } from "react-router";

import { AppLayout } from "../components/AppLayout";

import { Refound } from "../pages/Refound";
import { Confirm } from "../pages/Confirm";
import { NotFound } from "../pages/NotFound";

export function EmployeeRoutes(){
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refound />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}