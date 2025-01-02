import { Link } from "react-router-dom";
import UserDashboardLayout from "./UserDashboardLayout";

const UserDashboard = () => {
    return (
        <UserDashboardLayout>
      <div className="flex h-screen">
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="relative">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Profile</button>
              {/* Dropdown here */}
            </div>
          </header>
  
          {/* Dashboard Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 shadow rounded">Practice Streak: 5 Days</div>
            <div className="bg-white p-6 shadow rounded">Accuracy: 85%</div>
            <div className="bg-white p-6 shadow rounded">Recent Scores: 80/100</div>
          </section>
  
          {/* Graph Section */}
          <section className="bg-white p-6 shadow rounded mb-6">
            <h2 className="text-xl font-bold mb-4">Performance Over Time</h2>
            {/* Chart Component */}
            <div className="h-64">[Chart Placeholder]</div>
          </section>
  
          {/* Upcoming Practices */}
          <section className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-bold mb-4">Upcoming Practices</h2>
            <ul>
              <li>Math - 10 Questions - Jan 10</li>
              <li>Science - 15 Questions - Jan 11</li>
            </ul>
          </section>
        </main>
      </div>
      </UserDashboardLayout>
    );
  };
  
 export default UserDashboard;