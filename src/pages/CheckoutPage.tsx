import CheckoutForm from '@components/common/CheckoutForm';
import CompleteInput from '@components/common/CompleteInput';
import { checkoutFormDatas } from '@data/checkout';
import { useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

type paymentOrderType = 'Contact information' | 'Shipping details' | 'Payment';

const CheckoutPage = () => {
  const [paymentOrder, setPaymentOrder] = useState<paymentOrderType>(
    'Contact information'
  );

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
  };

  return (
    <CheckoutWrapper className="bb-1 br-1 bl-1 pt-5 pb-5 pr-10 pl-10">
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
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.section``;

export default CheckoutPage;
