import { useState, useEffect } from "react";
import axios from "axios";
import CssClass from "./Dashboard.module.css";

function Dashboard() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3001/api/users/");
    console.log(res);
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={CssClass.dashboardDiv}>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Login Time</th>
          <th>Logout Time</th>
        </tr>

        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.loginTime}</td>
            <td>{user.logoutTime}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Dashboard;
