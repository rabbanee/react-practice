import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../config";

const Home = () => {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      let response = await Axios.get(`${config.api_host}users?page=1`);
      setList(response.data.data);
      console.log("berhasil", response.data.data);
    } catch (error) {
      console.log("gagal", error);
    }
  };

  return (
    <React.Fragment>
      <h2>Home</h2>
      <div className="container">
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Email</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row, index) => (
              <tr key={row.id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={row.avatar}
                    width="50"
                    className="rounded-circle"
                    alt={row.email}
                  />
                </td>
                <td>{row.email}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-primary"
                    to={`DetailUser/${row.id}`}
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Home;
