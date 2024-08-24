import { useCartStore } from '@store/cartStore';

export const totalPriceCalc = () => {
  const { carts } = useCartStore();

  const totalPrice = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );

  return totalPrice;
};

export const changeKroeaPrice = (price: number) => {
  const koreaPrice = price.toLocaleString('ko-KR');

  return `₩ ${koreaPrice}`;
};
