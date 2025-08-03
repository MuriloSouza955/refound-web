import { Route, Routes } from "react-router";

import { Refound } from "../pages/Refound";
import { Confirm } from "../pages/Confirm";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";

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