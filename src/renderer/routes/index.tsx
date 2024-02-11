import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CalcPage from '../pages/CalcPage';

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calc" element={<CalcPage />} />
    </Routes>
  );
}

export default RoutesIndex;
