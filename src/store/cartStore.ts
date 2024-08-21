import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  category: string;
  key: string;
  imgPath: string;
  price: number;
  quantity: number;
}

export interface CartState {
  carts: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      set => ({
        carts: [],
        addItem: item =>
          set(state => {
            const existingItem = state.carts.find(
              cart => cart.key === item.key
            );
            if (existingItem) {
              return {
                carts: state.carts.map(cart => {
                  if (cart.key === existingItem.key) {
                    return cart.quantity
                      ? {
                          ...cart,
                          quantity: item.quantity,
                          price: item.price,
                        }
                      : cart;
                  } else return cart;
                }),
              };
            }
            return { carts: [...state.carts, { ...item }] };
          }),
        removeItem: key =>
          set(state => ({
            carts: state.carts.filter(cart => cart.key !== key),
          })),
        clearCart: () => set({ carts: [] }),
      }),
      { name: 'cartStore', getStorage: () => sessionStorage }
    )
  )
);
