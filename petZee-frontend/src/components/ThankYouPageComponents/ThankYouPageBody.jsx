import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPageBody = () => {
  return (
    <div className="pt-28">

      <div className="text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 text-center h-[12vh] lg:h-[8vh] md:h-[8vh]">
        <p>Thank You for Your Order !</p>
      </div>

      <div className="mx-5 my-12 rounded-lg shadow-xl max-w-lg lg:mx-auto md:mx-auto">

        <div className="text-center space-y-8 pt-4 px-2">
          <p className="text-2xl font-semibold text-gray-800">Order placed Successfully !</p>
          <img src='https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg' alt="order-confirm-img" className='mx-auto opacity-50 w-1/3' />
        </div>

        <div className="text-center py-8">
          <Link to="/my-orders" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-badge hover:bg-gradient-to-l transition duration-300">
            View Orders
          </Link>
        </div>

      </div>
      
    </div>
  );
};

export default ThankYouPageBody;
