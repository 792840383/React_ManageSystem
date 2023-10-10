import './App.css';
import {
  Route,
  Outlet,
  Routes,
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Navibar from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Products from './pages/Products';
import SystemLayout from './components/SystemLayout';
import ExportQuotationPdf from './pages/ExportQuotationPdf';
import ExportQuotationExcel from './components/ExportQuotationExcel';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/product",
    element:<Products/>,
  },
  {
    path:"/exportQuotationPdf",
    element:<ExportQuotationPdf/>
  },
  {
    path:"/exportQuotationExcel",
    element:<ExportQuotationExcel/>
  }
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/exportQuotationPdf" element={<ExportQuotationPdf />} />
          <Route path="/exportQuotationExcel" element={<ExportQuotationExcel />} />
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default App;