import { FaTrash, FaKey } from "react-icons/fa";
import Button from "../ui/Button";

function UserTable({ users, onDelete, onChangePassword }) {
  return (
    <table className="w-full">

      <thead>

        <tr className="bg-green-600 text-white">

          <th className="p-3">Name</th>

          <th>Email</th>

          <th>Role</th>

          <th>Joined</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {users.map((user) => (

          <tr
            key={user.id}
            className="border-b"
          >

            <td className="p-3">
              {user.name}
            </td>

            <td>
              {user.email}
            </td>

            <td>
              {user.role}
            </td>

            <td>
              {new Date(user.createdAt).toLocaleDateString()}
            </td>

            <td>

              <div className="flex gap-2 justify-center">

                <Button
                  variant="secondary"
                  onClick={() => onChangePassword(user)}
                >
                  <FaKey />
                </Button>

                <Button
                  variant="danger"
                  onClick={() => onDelete(user.id)}
                >
                  <FaTrash />
                </Button>

              </div>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default UserTable;