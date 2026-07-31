import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Inventory from "./pages/Inventory/Inventory";
import Billing from "./pages/Billing/Billing";
import Customers from "./pages/Customers/Customers";

import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Invoice from "./pages/Invoice/Invoice";

import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleProtectedRoute from "./routes/RoleProtectedRoute";


function App() {
  return (
    <Routes>

      {/* Login Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
  path="/products"
  element={
    <RoleProtectedRoute allowedRoles={["ADMIN"]}>
      <Products />
    </RoleProtectedRoute>
  }
/>

      <Route
        path="/inventory"
        element={
          <ProtectedRoute>
            <Inventory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <Billing />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <Customers />
          </RoleProtectedRoute>
        }
      />

      <Route
    path="/reports"
    element={
        <RoleProtectedRoute
            allowedRoles={["ADMIN"]}
        >
            <Reports />
        </RoleProtectedRoute>
    }
/>

      <Route
    path="/settings"
    element={
        <RoleProtectedRoute
            allowedRoles={["ADMIN"]}
        >
            <Settings />
        </RoleProtectedRoute>
    }
/>

      <Route
        path="/invoice/:saleId"
        element={
          <ProtectedRoute>
            <Invoice />
          </ProtectedRoute>
        }
      />

      <Route
  path="/users"
  element={
    <RoleProtectedRoute allowedRoles={["ADMIN"]}>
      <Users />
    </RoleProtectedRoute>
  }
/>
      {/* Unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;