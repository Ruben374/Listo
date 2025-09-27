import Layout from "../components/Layout";

function TaskCategories() {
  return (
    <Layout>
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Task Categories</h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md shadow">
            Add Category
          </button>
        </div>

        {/* Task Status Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-gray-700 border-b border-orange-500 inline-block pb-1">
              Task Status
            </h2>
            <button className="text-orange-500 font-medium hover:underline text-sm">
              + Add Task Status
            </button>
          </div>

          <div className="overflow-hidden rounded-lg shadow border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-sm">
                <tr>
                  <th className="px-4 py-2 border">SN</th>
                  <th className="px-4 py-2 border">Task Status</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {["Completed", "In Progress", "Not Started"].map(
                  (status, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{idx + 1}</td>
                      <td className="px-4 py-2 border">{status}</td>
                      <td className="px-4 py-2 border space-x-2">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md shadow text-sm">
                          ✏️ Edit
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md shadow text-sm">
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Task Priority Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-gray-700 border-b border-orange-500 inline-block pb-1">
              Task Priority
            </h2>
            <button className="text-orange-500 font-medium hover:underline text-sm">
              + Add New Priority
            </button>
          </div>

          <div className="overflow-hidden rounded-lg shadow border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 text-sm">
                <tr>
                  <th className="px-4 py-2 border">SN</th>
                  <th className="px-4 py-2 border">Task Priority</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {["Extreme", "Moderate", "Low"].map((priority, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{idx + 1}</td>
                    <td className="px-4 py-2 border">{priority}</td>
                    <td className="px-4 py-2 border space-x-2">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md shadow text-sm">
                        ✏️ Edit
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md shadow text-sm">
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TaskCategories;
