import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user', // Slice name
  initialState: {
    profile: JSON.parse(localStorage.getItem('profile')) || null, // Initialize from localStorage
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
      // Store profile in localStorage when updated
      if (action.payload) {
        localStorage.setItem('profile', JSON.stringify(action.payload));
      } else {
        localStorage.removeItem('profile');
      }
    },
    clearProfile: (state) => {
      state.profile = null;
      localStorage.removeItem('profile'); // Remove from localStorage when logged out
    },
  },
});

// Exporting actions
export const { setProfile, clearProfile } = userSlice.actions;

// Selector to access user profile
export const selectUserProfile = (state) => state.user.profile;

// Exporting reducer
export default userSlice.reducer;
