function DataTable({ columns, data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full">

        <thead className="bg-green-600 text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="p-3 text-left"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="p-3"
                >
                  {column.render
                    ? column.render(row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default DataTable;