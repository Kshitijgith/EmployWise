import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axiosInstance.get(`/api/users/${id}`).then((res) => setForm(res.data.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.put(`/api/users/${id}`, form);
    navigate("/users");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="p-6 bg-white rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
