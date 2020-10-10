import Axios from "axios";
import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { config } from "../../config";

const DetailUser = () => {
  let { id } = useParams();
  let { push } = useHistory();
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      let response = await Axios.get(`${config.api_host}users/${id}`);
      setUser(response.data.data);
    } catch (error) {
      push("/UserNotFound");
    }
  };

  const nextHandle = () => {
    const nextId = parseInt(id, 10) + 1;
    push(`/DetailUser/${nextId}`);
  };

  const previousHandle = () => {
    const previousId = parseInt(id, 10) - 1;
    push(`/DetailUser/${previousId}`);
  };

  return (
    <React.Fragment>
      <div className="container">
        <img src={user.avatar} alt={user.avatar} className="rounded-circle" />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <h6>{user.email}</h6>
        <div>
          <button
            disabled={id < 2}
            onClick={previousHandle}
            className="btn btn-primary btn-sm mr-2"
          >
            Previous
          </button>
          <button onClick={nextHandle} className="btn btn-success btn-sm">
            Next
          </button>
        </div>
        <Link to="/" className="mt-2 btn btn-danger btn-sm">
          Back
        </Link>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
