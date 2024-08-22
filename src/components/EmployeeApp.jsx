
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./EmployeeApp.css";
import LogoutComponent from "./LogoutComponent"
import HeaderComponent from "./Header";
import WelcomeComponent from "./Welcome";
import EmployeeListComponent from "./EmployeeList";
import LoginComponent from "./Login";
import ErrorComponent from "./Error";

export default function EmployeeApp() {
  return (
    <div className="EmployeeApp">
        
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
          <Route path='/logout' element={<LogoutComponent /> } />
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="/dashboard" element={<EmployeeListComponent />} />

          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}




