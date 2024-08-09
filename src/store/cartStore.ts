import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  imgPath: string;
  price: number;
  quantity: number;
}

export interface CartState {
  carts: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
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
              cart => cart.name === item.name
            );
            if (existingItem) {
              return {
                carts: state.carts.map(cart => {
                  if (cart.name === existingItem.name) {
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
        removeItem: name =>
          set(state => ({
            carts: state.carts.filter(cart => cart.name !== name),
          })),
        clearCart: () => set({ carts: [] }),
      }),
      { name: 'cartStore', getStorage: () => sessionStorage }
    )
  )
);
