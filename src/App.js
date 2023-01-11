import NavBar from "./components/NavBar";
import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import StartTipPage from "./Pages/StartTipPage";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import CustomerDashBoardPage from "./Pages/CustomerDashBoardPage";
import LaundryOwnerDashBoardPage from "./Pages/LaundryOwnerDashBoardPage";
import ServiceListPage from "./Pages/ServiceListPage";
import AddServicePage from "./Pages/AddServicePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />

          <Route
            path="customer-dashboard"
            element={
              <ProtectedRoute>
                <CustomerDashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="LaundryOwner-dashboard"
            element={
              <ProtectedRoute>
                <LaundryOwnerDashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="LaundryOwner-dashboard/service-list"
            element={
              <ProtectedRoute>
                <ServiceListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="LaundryOwner-dashboard/add-service"
            element={
              <ProtectedRoute>
                <AddServicePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="start-tips"
            element={
              // <ProtectedRoute>
              <StartTipPage />
              // </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
