import { Link } from "react-router-dom";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* User Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-center text-xl font-bold">User Dashboard</div>
        <nav className="mt-6">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/revisify/userdashboard">User Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/revisify/practice-sessions">Practice Sessions</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">Practice History</li>
            <li className="p-4 hover:bg-gray-700">Analytics</li>
            <li className="p-4 hover:bg-gray-700">Notifications</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
};

export default UserDashboardLayout;
