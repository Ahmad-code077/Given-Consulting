import React, { useState } from 'react';
import { useSignupMutation } from '../Redux/userRoutes/userApi';
import { toast } from 'react-toastify';

const Signup = () => {
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('All fields are required!');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address!');
      return;
    }

    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    try {
      const res = await signup(formData).unwrap();
      toast.success(res.message,{position:'top-center'});

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      toast.error(error?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-36 py-5">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Sign In Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 sm:p-12">
          <h2 className="text-2xl font-bold text-center text-black">Registration</h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Signup'}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center text-gray-500">
            Already have an account?{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
