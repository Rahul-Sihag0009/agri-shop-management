import Layout from "../../components/layout/Layout";
import Loading from "../../components/ui/Loading";

import useUsers from "../../hooks/useUsers";

function Users() {

  const {
    data: users = [],
    isLoading,
  } = useUsers();

  if (isLoading) return <Loading />;

  return (

    <Layout>

      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          User Management
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-4">Name</th>

                <th className="text-left">Email</th>

                <th className="text-center">Role</th>

                <th className="text-center">Joined</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-t"
                >

                  <td className="p-4">
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        user.role === "ADMIN"
                          ? "bg-red-600"
                          : "bg-green-600"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="text-center">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </Layout>

  );
}

export default Users;