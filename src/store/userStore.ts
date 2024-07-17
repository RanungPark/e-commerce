import { create } from 'zustand';

export interface User {
  id: number;
  email: string;
}

export interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>(set => ({
  isLoggedIn: false,
  user: null,
  login: userData => set({ isLoggedIn: true, user: userData }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));
