import { useState, useEffect } from "react";
import { retrieveEmpForUsername, deleteEmpApi } from "./api/EmpApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeListComponent() {
  const [emp, setEmp] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useAuth();
  const username = authContext.username;
  const navigate =useNavigate();

  const { id } = useParams(); // Destructuring id from useParams

  useEffect(() => {
    // Only call retrieveEmpForUsername if id is not -1
    if (id !== "-1") {
      const refreshEmps = () => {
        retrieveEmpForUsername(username, id)
          .then((response) => {
            setEmp(response.data);
          })
          .catch((error) => console.log(error));
      };

      refreshEmps();
    }
  }, [username, id]);

  function deleteEmp(id) {
    console.log("deleteEmp " + id);
    deleteEmpApi(username, id)
      .then(() => {
        setMessage(`Delete of Emp with id = ${id} successful`);
        // Call refreshEmps again after deletion
        if (id !== "-1") {
          retrieveEmpForUsername(username)
            .then((response) => {
              setEmp(response.data);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  }

  function updateEmp(id) {
    console.log("updateEmp " + id);
    navigate(`/dashboard/${id}`)
    // You can navigate to an update page or open a modal here
  }
  
  function addNewEmployee() {
    navigate(`/dashboard/-1`)
}


  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <div>Employee Details</div>
      <div>{message && <div className="alert alert-warning">{message}</div>}</div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {emp.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteEmp(employee.id)}>
                    Remove
                  </button>
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => updateEmp(employee.id)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         <div className="btn btn-success m-5" onClick={addNewEmployee}>Add New Employee</div>
      </div>
    </div>
  );
}
