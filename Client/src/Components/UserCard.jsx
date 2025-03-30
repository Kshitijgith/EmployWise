import { useState } from 'react';
import { deleteUser } from '../Features/User/UserAPI';
import UserForm from './Form';

const UserCard = ({ user, onUserUpdate, onUserDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteUser(user.id);
      onUserDelete(user.id);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdateSuccess = (updatedUser) => {
    onUserUpdate(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      {isEditing ? (
        <UserForm user={user} onSuccess={handleUpdateSuccess} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <img src={user.avatar} alt={`${user.first_name}`} className="w-16 h-16 rounded-full mb-4" />
          <h3 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
