import { toast } from 'react-toastify';
import React, { useState } from 'react';

const AdminLogin = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validUsername = 'admin';
        const validPassword = 'admin123';

        if (username === validUsername && password === validPassword) {
            toast.success('Login successful!');
            setIsAuthenticated(true);
        } else {
            toast.error('Invalid username or password.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded w-full max-w-md">
                <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Admin Login</p>
                <div className='p-2 mt-5 space-y-3'>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text" id="username" className="w-full border-b-2 bg-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-purple-500 peer" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <span className='text-purple-600 text-sm'>Username : admin*</span>
                </div>
                <div className="relative p-2 space-y-3">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type={showPassword ? 'text' : 'password'} id="password" className="w-full border-b-2 bg-transparent text-gray-700 focus:outline-none focus:ring-0 focus:border-purple-500 peer" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <i className={`absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer ${showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'}`} onClick={() => setShowPassword(!showPassword)}></i>
                    <span className='text-purple-600 text-sm'>Password : admin123*</span>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded mt-4">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
