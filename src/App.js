import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './modules/DnsDashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
