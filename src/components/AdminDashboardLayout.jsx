import { Link } from "react-router-dom";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">
        <div className="p-4 text-center text-2xl font-bold border-b border-blue-700">
          Admin Dashboard
        </div>
        <nav className="mt-6">
          <ul>
            <li className="p-4 hover:bg-blue-800">
              <Link to="/revisify/admindashboard" className="block">
                Dashboard
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-800">
              <Link to="/revisify/practice-sessions" className="block">
                Manage Practice Sessions
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-800">
              <Link to="/revisify/manage-users" className="block">
                Manage Users
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-800">
              <Link to="/revisify/analytics" className="block">
                Analytics
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-800">
              <Link to="/revisify/settings" className="block">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
