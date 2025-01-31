import React from 'react';

const AdminNavBar = ({ setIsAuthenticated }) => {
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between px-5 py-5 sm:px-12 bg-purple-100  border-b-2 border-indigo-500">
        <p className='text-xl'>Admin Panel</p>
        <button onClick={handleLogout} className="text-base hover:font-semibold px-4 py-2 border-2 rounded-full hover:bg-gradient-to-l text-white bg-gradient-to-r from-indigo-600 to-purple-600">
          Logout<i className="ml-2 text-lg ri-logout-box-r-line"></i>
        </button>
      </div>
    </>
  );
};

export default AdminNavBar;
