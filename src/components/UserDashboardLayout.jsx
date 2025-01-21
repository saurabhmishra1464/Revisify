import { Link } from "react-router-dom"; // Ensure this import is included if using React Router

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* User Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-center text-xl font-bold">User Dashboard</div>
        <nav className="mt-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/revisify/userdashboard"
                className="block p-4 hover:bg-gray-700"
              >
                User Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/revisify/userdashboard/practice-sessions"
                className="block p-4 hover:bg-gray-700"
              >
                Practice Sessions
              </Link>
            </li>
            <li>
              <Link
                to="/revisify/userdashboard/practice-history"
                className="block p-4 hover:bg-gray-700"
              >
                Practice History
              </Link>
            </li>
            <li>
              <Link
                to="/revisify/userdashboard/analytics"
                className="block p-4 hover:bg-gray-700"
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/revisify/userdashboard/notifications"
                className="block p-4 hover:bg-gray-700"
              >
                Notifications
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
};

export default UserDashboardLayout;
