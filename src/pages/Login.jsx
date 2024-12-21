import { useState } from "react";
import { useLoginMutation } from "../Redux/userRoutes/userApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProfile } from "../Redux/userRoutes/userSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(formData);
      if (res?.data?.success === true) {
        dispatch(setProfile(res?.data?.user));
        navigate("/");
        toast.success(res?.data?.message || "Login successful!", {
          position: "top-center",
        });
      } else {
        toast.error(
          res?.error?.data?.message ||
            "Something went wrong. Please try again.",
          { position: "top-center" }
        );
      }
    } catch (error) {
      const errorMessage =
        error?.error?.data?.message ||
        "Something went wrong. Please try again.";

      toast.error(errorMessage, { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg md:max-w-3xl lg:max-w-4xl">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-blue-500">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Sign In Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-600">
            Sign In
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm sm:text-lg font-medium text-gray-700"
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
                className="block text-sm sm:text-lg font-medium text-gray-700"
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

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <Link
                to="#"
                className="text-sm sm:text-base text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-base sm:text-lg lg:text-xl"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center text-gray-500 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
