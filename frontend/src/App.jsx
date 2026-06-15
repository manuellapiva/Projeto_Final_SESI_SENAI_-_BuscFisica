import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Formulas from "./pages/Formulas/Formulas";
import Questoes from "./pages/Questoes/Questoes";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/formulas"
          element={
            <ProtectedRoute>
              <Formulas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/questoes"
          element={
            <ProtectedRoute>
              <Questoes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;