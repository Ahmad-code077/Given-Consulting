import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../baseurl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    signup: builder.mutation({
      query: (newUser) => ({
        url: "/signup",
        method: "POST",
        body: newUser,
      }),
    }),

    verifyOTP: builder.mutation({
      query: ({ email, otp }) => ({
        url: "/verify-user",
        method: "POST",
        body: { email, otp },
      }),
    }),

    myProfile: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    deleteMyProfile: builder.mutation({
      query: () => ({
        url: "/delete-my-profile",
        method: "DELETE",
      }),
    }),


  }),
});

// Export hooks for using in components
export const {
  useLoginMutation,
  useSignupMutation,
  useVerifyOTPMutation,
  useMyProfileQuery,
  useLogoutMutation,
  useDeleteMyProfileMutation
} = apiSlice;
