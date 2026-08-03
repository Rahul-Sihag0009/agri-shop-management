import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Inventory from "./pages/Inventory/Inventory";
import Billing from "./pages/Billing/Billing";
import Customers from "./pages/Customers/Customers";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Invoice from "./pages/Invoice/Invoice";
import Users from "./pages/Users/Users";

import Login from "./pages/Login/Login";
import Register from "./pages/Auth/Register";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleProtectedRoute from "./routes/RoleProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Products */}
      <Route
        path="/products"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Products />
          </RoleProtectedRoute>
        }
      />

      {/* Inventory */}
      <Route
        path="/inventory"
        element={
          <ProtectedRoute>
            <Inventory />
          </ProtectedRoute>
        }
      />

      {/* Billing */}
      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <Billing />
          </ProtectedRoute>
        }
      />

      {/* Customers */}
      <Route
        path="/customers"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Customers />
          </RoleProtectedRoute>
        }
      />

      {/* Reports */}
      <Route
        path="/reports"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Reports />
          </RoleProtectedRoute>
        }
      />

      {/* Settings */}
      <Route
        path="/settings"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Settings />
          </RoleProtectedRoute>
        }
      />

      {/* Users */}
      <Route
        path="/users"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Users />
          </RoleProtectedRoute>
        }
      />

      {/* Invoice */}
      <Route
        path="/invoice/:saleId"
        element={
          <ProtectedRoute>
            <Invoice />
          </ProtectedRoute>
        }
      />

      {/* Unknown Route */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;