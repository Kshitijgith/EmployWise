import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../Features/User/UserSlice";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleDelete = (id) => dispatch(deleteUser(id));

  const filteredUsers = list.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">User List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.email}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => navigate(`/edit/${user.id}`)}
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersList;
