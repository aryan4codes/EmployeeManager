import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./EmployeeApp.css";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./Header";
import WelcomeComponent from "./Welcome";
import EmployeeListComponent from "./EmployeeList";
import LoginComponent from "./Login";
import ErrorComponent from "./Error";
import AuthProvider, { useAuth } from "./security/AuthContext";
import EmployeeComponent from "./EmployeeComponent";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function EmployeeApp() {
  return (
    <div className="EmployeeApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/welcome/:username"
              element={<WelcomeComponent />}
            ></Route>

            <Route
              path="/dashboard"
              element={
                <AuthenticatedRoute>
                  <EmployeeListComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/dashboard/:id"
              element={
                <AuthenticatedRoute>
                  <EmployeeComponent />
                </AuthenticatedRoute>
              }
            />
            

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
