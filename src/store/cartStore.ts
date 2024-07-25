import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  productImg: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      set => ({
        cart: [],
        addItem: item =>
          set(state => {
            const existingItem = state.cart.find(
              cartItem => cartItem.id === item.id
            );
            if (existingItem) {
              return {
                cart: state.cart.map(cartItem =>
                  cartItem.quantity !== item.quantity
                    ? {
                        ...cartItem,
                        quantity: item.quantity,
                        price: item.price,
                      }
                    : cartItem
                ),
              };
            }
            return { cart: [...state.cart, { ...item }] };
          }),
        removeItem: id =>
          set(state => ({
            cart: state.cart.filter(item => item.id !== id),
          })),
        clearCart: () => set({ cart: [] }),
      }),
      { name: 'cartStore', getStorage: () => sessionStorage }
    )
  )
);
