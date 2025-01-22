import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContextProvider';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const FormPageBody = () => {

  const navigate = useNavigate();
  const { url } = useContext(AppContext);
  
  const [showRegister, setShowRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [RegisterData, setRegisterData] = useState({ name: '', email: '', mobile: '', username: '', password: '', address: '' });

  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/.test(password);

  const KeyUp_Login = (e) => setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const KeyUp_Register = (e) => setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleForm = () => setShowRegister(!showRegister);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleLoginPasswordVisibility = () => setShowLoginPassword(!showLoginPassword);

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    console.log('Prevented default submission');  
    try {
      const response = await axios.post(`${url}/add_user`, RegisterData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 200) {
        toast.success(`Welcome to PetZee, ${RegisterData.username}! Registration successful. Now Login`, { autoClose: 2000 });
        setTimeout(() => {
          toast.dismiss(); 
          navigate('/home');
        }, 2000);
      } 
      else {
        toast.error('Registration failed. Please try again.', { autoClose: 2000 });
      }
    } 
    catch (error) {
      toast.error('Registration failed. Please try again.', { autoClose: 2000 });
    }
  };
  
  const LoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/user_id`, loginData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.message);
        localStorage.setItem('userId', response.data.message);

        toast.success(`Welcome to PetZee, ${loginData.username}!`, { autoClose: 2000 });
          navigate('/home');
          setTimeout(() => {
          toast.dismiss(); 
        }, 2000); 
      } 
      else {
        toast.error('Invalid username or password. Please try again.', { autoClose: 2000 });
      }
    } 
    catch (error) {
      toast.error('Invalid username or password. Please try again.', { autoClose: 2000 });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full">
        {showRegister ? (
          // Register Form
          <div className='lg:flex md:flex items-center justify-center border rounded shadow-xl lg:mx-auto mx-5 p-5 xl:w-7/12 lg:w-8/12 bg-white'>
            <img src={assets.register_animation} alt="register_animation" className='lg:block md:block hidden w-1/2' />
            <div className='w-full py-5'>
              <h2 className="text-2xl font-semibold text-purple-600 mb-5">Register</h2>
              <form onSubmit={RegisterSubmit} className="space-y-5">
                <input type="text" placeholder="Name" name="name" value={RegisterData.name} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md" />
                <input type="email" placeholder="Email" name="email" value={RegisterData.email} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md" />
                <input type="number" placeholder="Mobile" name="mobile" value={RegisterData.mobile} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md" />
                <input type="text" placeholder="Username" name="username" value={RegisterData.username} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md" />
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" value={RegisterData.password} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md" />
                  <i className={`absolute right-3 top-3 cursor-pointer ${showPassword ? "ri-eye-off-fill" : "ri-eye-fill"}`} onClick={togglePasswordVisibility}></i>
                </div>
                {!validatePassword(RegisterData.password) && RegisterData.password && <p className="text-red-500 text-sm">Password must contain a capital letter, number, and special character.</p>}
                <textarea placeholder="Address" name="address" value={RegisterData.address} onChange={KeyUp_Register} className="w-full px-4 py-2 border rounded-md"></textarea>
                <button type="submit" className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md">Register</button>
              </form>
              <p className="mt-5 text-center">Already have an account ? <span onClick={toggleForm} className="text-purple-600 cursor-pointer">Login</span></p>
            </div>
          </div>
        ) : (
          // Login Form
          <div className='lg:flex md:flex items-center justify-center border rounded shadow-xl lg:mx-auto mx-5 p-5 xl:w-7/12 lg:w-8/12 bg-white'>
            <img src={assets.login_animation} alt="login_animation" className='lg:block md:block hidden w-1/2' />
            <div className='lg:p-5 w-full'>
              <h2 className="text-2xl font-semibold text-purple-600 mb-5">Login</h2>
              <form onSubmit={LoginSubmit} className="space-y-5">
                <input type="text" placeholder="Username" name="username" value={loginData.username} onChange={KeyUp_Login} className="w-full px-4 py-2 border rounded-md" />
                <div className="relative">
                  <input type={showLoginPassword ? "text" : "password"} placeholder="Password" name="password" value={loginData.password} onChange={KeyUp_Login} className="w-full px-4 py-2 border rounded-md" />
                  <i className={`absolute right-3 top-3 cursor-pointer ${showLoginPassword ? "ri-eye-off-fill" : "ri-eye-fill"}`} onClick={toggleLoginPasswordVisibility}></i>
                </div>
                <button type="submit" className="w-full py-2 bg-purple-600 text-white rounded-md">Login</button>
              </form>
              <p className="mt-5 text-center">Don’t have an account ? <span onClick={toggleForm} className="text-purple-600 cursor-pointer">Register</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default FormPageBody;
