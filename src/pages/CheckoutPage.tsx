import CompleteInput from '@components/common/CompleteInput';
import { checkoutFormDatas } from '@data/checkout';
import { useCartStore } from '@store/cartStore';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CheckoutForm from '@components/chekcout/ChekcoutForm';
import OrderSummary from '@components/chekcout/OrderSummary';

type paymentOrderType = 'Contact information' | 'Shipping details' | 'Payment';

const CheckoutPage = () => {
  const [paymentOrder, setPaymentOrder] = useState<paymentOrderType>(
    'Contact information'
  );

  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const handleFirstSection = () => {
    setPaymentOrder('Shipping details');
  };
  const handleSecondSection = () => {
    setPaymentOrder('Payment');
  };
  const handleThirdSection = () => {
    toast.success(`결제가 완료되었습니다`, {
      duration: 3000,
    });
    clearCart();
    navigate('/');
  };

  return (
    <CheckoutWrapper>
      <OrderSummary />
      <CheckoutFormWrapper className="bb-1 br-1 bl-1 pt-5 pb-5 pr-10 pl-10">
        {paymentOrder === 'Contact information' ? (
          <>
            <CheckoutForm
              checkoutFormData={checkoutFormDatas[0]}
              handlerFunc={handleFirstSection}
            />
            <div className="mt-5">
              <CompleteInput label="2 Shipping details" isFilled={false} />
            </div>
            <div className="mt-5">
              <CompleteInput label="3 Payment" isFilled={false} />
            </div>
          </>
        ) : (
          <></>
        )}
        {paymentOrder === 'Shipping details' ? (
          <>
            <CompleteInput label="1 Contact information" isFilled={true} />
            <div className="mt-5">
              <CheckoutForm
                checkoutFormData={checkoutFormDatas[1]}
                handlerFunc={handleSecondSection}
              />
            </div>
            <div className="mt-5">
              <CompleteInput label="3 Payment" isFilled={false} />
            </div>
          </>
        ) : (
          <></>
        )}
        {paymentOrder === 'Payment' ? (
          <>
            <CompleteInput label="1 Contact information" isFilled={true} />
            <div className="mt-5">
              <CompleteInput label="2 Shipping details" isFilled={true} />
            </div>
            <div className="mt-5">
              <CheckoutForm
                checkoutFormData={checkoutFormDatas[2]}
                handlerFunc={handleThirdSection}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </CheckoutFormWrapper>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.section``;

const CheckoutFormWrapper = styled.div``;

export default CheckoutPage;
