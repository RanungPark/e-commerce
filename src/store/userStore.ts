import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';

export interface User {
  id: number;
  username: string;
}

export interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        isLoggedIn: false,
        user: null,
        login: userData => set({ isLoggedIn: true, user: userData }),
        logout: () => set({ isLoggedIn: false, user: null }),
      }),
      { name: 'userStore' }
    )
  )
);
