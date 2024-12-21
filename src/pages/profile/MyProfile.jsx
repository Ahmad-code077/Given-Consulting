import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteMyProfileMutation } from "../../Redux/userRoutes/userApi";
import { toast } from "react-toastify";
import { clearProfile } from "../../Redux/userRoutes/userSlice";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { profile } = useSelector((state) => state.user);
  const [deleteMyProfile, { isLoading }] = useDeleteMyProfileMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    try {
      const res = await deleteMyProfile();
      console.log(res);

      dispatch(clearProfile());
      navigate("/");
      toast.success(res?.data?.message || "Profile deleted successfully!", {
        position: "top-center",
      });
    } catch (error) {
      const errorMessage =
        error?.error?.data?.message ||
        "An unexpected error occurred. Please try again.";

      toast.error(errorMessage, { position: "top-center" });
    }
  };

  useEffect(() => {}, [profile]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center my-8">
      <div className="w-[450px] h-auto bg-white rounded-lg flex flex-col items-center text-center py-6 shadow-lg">
        {/* Profile Image */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />

        {/* Profile Info */}
        <p className="text-2xl font-bold mt-4 text-blue-600">
          Hello, {profile.name}
        </p>
        <p className="text-lg font-normal text-gray-600">{profile.email}</p>
        <p className="text-sm text-gray-500">Role: {profile.role}</p>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-6 px-6 gap-20">
          <button className="w-[50%] relative py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-btn-yellow before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-btn-yellow before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black hover:text-black">
            Update Profile
          </button>
          <button
            onClick={handleDeleteProfile}
            className="w-[50%] relative py-2 rounded-md bg-transparent isolation-auto z-10 border-2 border-btn-yellow before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-btn-yellow before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-black hover:text-black"
          >
            {isLoading ? "Deleting..." : "Delete Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
