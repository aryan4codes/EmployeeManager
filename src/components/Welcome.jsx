import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldBean , retrieveHelloWorldPathVariable} from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
export default function WelcomeComponent() {
  const { username } = useParams();
  const [message, setMessage] = useState(null);
  
  const authContext = useAuth();

  function callHelloWorld() {
    console.log("called");


    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("cleanup"));

      retrieveHelloWorldPathVariable('Aryan',authContext.token)
      .then( (response) => successfulResponse(response) )
      .catch ( (error) => errorResponse(error) )
      .finally ( () => console.log('cleanup') )
  }

  function successfulResponse(response) {
    console.log(response);
    //setMessage(response.data)
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="Welcome">
      <h1>Welcome to EmployeeManager , {username}</h1>
      <div>
        Manage Employees- <Link to="/dashboard">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success m-5" onClick={callHelloWorld}>
          {" "}
          Call Hello World REST API
        </button>
        <div className="text-info">{message}</div>
      </div>
    </div>
  );
}
