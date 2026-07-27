import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Products/Products";
import Inventory from "./pages/Inventory/Inventory";
import Billing from "./pages/Billing/Billing";
import Customers from "./pages/Customers/Customers";
import Suppliers from "./pages/Suppliers/Suppliers";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Invoice from "./pages/Invoice/Invoice";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Routes>
        
        <Route path="/" element={<Dashboard />} />

        <Route path="/products" element={<Products />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/billing" element={<Billing />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/suppliers" element={<Suppliers />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/invoice/:saleId" element={<Invoice />} />

      </Routes>
    </>
  );
}

export default App;