import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface User {
  id: number;
  username: string;
}

export interface UserState {
  isLoggedIn: boolean;
  user: User | null;
  subscribe: boolean;
  login: (userData: User) => void;
  logout: () => void;
  setSubscribe: (subscribe: boolean) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        isLoggedIn: false,
        user: null,
        subscribe: false,
        login: userData =>
          set(state => ({ ...state, isLoggedIn: true, user: userData })),
        logout: () =>
          set(state => ({ ...state, isLoggedIn: false, user: null })),
        setSubscribe: subscribe => set(state => ({ ...state, subscribe })),
      }),
      { name: 'userStore', getStorage: () => sessionStorage }
    )
  )
);
