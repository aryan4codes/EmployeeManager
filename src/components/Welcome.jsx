import { useParams,Link } from "react-router-dom";

export default function WelcomeComponent() {
    const { username } = useParams();
    return (
      <div className="Welcome">
        <h1>Welcome to EmployeeManager , {username}</h1>
        <div>
          Manage Employees- <Link to="/dashboard">Go here</Link>
        </div>
      </div>
    );
  }
  