import NavBar from "./components/NavBar";
import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import StartTipPage from "./Pages/StartTipPage";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import CustomerDashBoardPage from "./Pages/CustomerDashBoardPage";
import LaundryOwnerDashBoardPage from "./Pages/LaundryOwnerDashBoardPage";
import BranchListPage from "./Pages/BranchListPage";
import AddBranchPage from "./Pages/AddBranchPage";
import BranchDetails from "./Pages/branchDetails/BranchDetails";
import LaundryOwnerCalender from "./Pages/LaundryOwnerCalender";
import ProfilePage from "./Pages/profileInfo";
import OrderPage from "./Pages/myOrders";
import ReviewsTable from "./Pages/reviews";


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
            path="customer-dashboard/:branchID"
            element={
             
                <BranchDetails />
          
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
            path="LaundryOwner-dashboard/branch-list"
            element={
              <ProtectedRoute>
                <BranchListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="LaundryOwner-dashboard/add-branch"
            element={
              <ProtectedRoute>
                <AddBranchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="LaundryOwner-dashboard/calender"
            element={
              <ProtectedRoute>
                <LaundryOwnerCalender />
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
          <Route
            path="profile"
            element={
                <ProfilePage />
            }
          />
          <Route
            path="myOrder"
            element={
                <OrderPage />
            }
          />
          <Route
            path="myReviews"
            element={
                <ReviewsTable />
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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
