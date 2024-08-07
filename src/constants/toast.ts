import toast from 'react-hot-toast';

export const pageWait = () =>
  toast.error('페이지 완성까지 조금만 기다려주세요.', {
    icon: '🥲',
    duration: 3000,
  });

export const subscriptionDone = (remind: string) => {
  console.log(remind);
  toast.success(`구독이 완료되었습니다`, {
    duration: 3000,
  });
};

export const paymentsDone = () => {
  toast.success(`결제가 완료되었습니다`, {
    duration: 3000,
  });
};

export const loginDone = () => {
  toast.success(`로그인이 완료되었습니다`, {
    duration: 3000,
  });
};

export const loginError = () => {
  toast.error(`로그인을 진행해주세요`, {
    icon: '🔐',
    duration: 3000,
  });
};

export const addToCart = (productName: string) => {
  toast.success(`${productName}이(가) 장바구니에 담겼어요!`, {
    icon: '🛒',
    duration: 3000,
  });
};

export const clearCart = () => {
  toast.error(`장바구니가 비어있습니다!`, {
    duration: 3000,
  });
};
