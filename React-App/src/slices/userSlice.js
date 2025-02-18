import { createSlice } from '@reduxjs/toolkit';

// Try to load from localStorage if available
const savedUserData = JSON.parse(localStorage.getItem('userData')) || {
  name: '',
  address: '',
  email: '',
  phone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: savedUserData.name,
    address: savedUserData.address,
    email: savedUserData.email,
    phone: savedUserData.phone,
    isAuthenticated: false, // for optional login
    isAdmin: false,         // for optional admin route
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, address, email, phone } = action.payload;
      state.name = name;
      state.address = address;
      state.email = email;
      state.phone = phone;
      // Save to localStorage for persistence
      localStorage.setItem('userData', JSON.stringify({ name, address, email, phone }));
    },
    login: (state, action) => {
      // For demonstration, any username === 'admin' => isAdmin
      // In real life, you'd check a real auth API or similar
      const { username, password } = action.payload;
      if (username && password) {
        state.isAuthenticated = true;
        state.isAdmin = username.toLowerCase() === 'admin';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

export const { updateUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
