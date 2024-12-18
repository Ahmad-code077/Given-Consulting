import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', // Slice name
  initialState: {
    profile: null, // Initial user profile state
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload; // Set user profile data
    },
    clearProfile: (state) => {
      state.profile = null; // Clear user profile data
    },
  },
});

// Exporting actions
export const { setProfile, clearProfile } = userSlice.actions;

// Selector to access user profile
export const selectUserProfile = (state) => state.user.profile;

// Exporting reducer
export default userSlice.reducer;
