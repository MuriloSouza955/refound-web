import  { Routes, Route } from 'react-router';

import { AppLayout } from '../components/AppLayout';

import { Dashboard } from '../pages/Dashboard';
import { NotFound } from '../pages/NotFound';
import { Refound } from '../pages/Refound';


export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path="/refound/:id" element={<Refound />} />
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}