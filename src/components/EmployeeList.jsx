


export default function EmployeeListComponent() {
    const emp = [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        designation: "Software Engineer",
      },
      {
        id: 2,
        name: "Aryan",
        email: "aryan@example.com",
        designation: "HR",
      },
    ];
    return (
      <div className="container">
        <h1>Employee Dashboard</h1>
        <div>Employee Details</div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Designation</td>
              </tr>
            </thead>
  
            <tbody>
              {emp.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  