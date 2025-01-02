import AdminDashboardLayout from "./AdminDashboardLayout";

const AdminDashboard = () => {
  return (
    <AdminDashboardLayout>
      <div className="flex h-screen w-full">
        {/* Sidebar */}

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div className="relative">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Admin Profile
              </button>
              {/* Dropdown here */}
            </div>
          </header>

          {/* Dashboard Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 shadow rounded">Total Users: 120</div>
            <div className="bg-white p-6 shadow rounded">Active Sessions: 15</div>
            <div className="bg-white p-6 shadow rounded">Reports: 3 Pending</div>
          </section>

          {/* Analytics Section */}
          <section className="bg-white p-6 shadow rounded mb-6">
            <h2 className="text-xl font-bold mb-4">Analytics</h2>
            <div className="h-64">[Chart Placeholder]</div>
          </section>

          {/* User Management Section */}
          <section className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold mb-4">Manage Users</h2>
            <div>[Table Placeholder]</div>
          </section>
        </main>
      </div>
    </AdminDashboardLayout>
  );
};


  export default AdminDashboard;
  