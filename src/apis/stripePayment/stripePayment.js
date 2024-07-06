import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

//=======Stripe Payment=====
export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    `${apiUrl}/api/v1/stripe/free-plan`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};

//=======Stripe Payment Intent=====
export const createStripePaymentIntentAPI = async (payment) => {
  console.log(payment);
  const response = await axios.post(
    `${apiUrl}/api/v1/stripe/checkout`,
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    {
      withCredentials: true,
    }
  );
  return response?.data;
};

//=======Verify Payment=====
export const verifyPaymentAPI = async (paymentId) => {
  const response = await axios.post(
    `${apiUrl}/api/v1/stripe/verify-payment/${paymentId}`,
    {},
    {
      withCredentials: true,
    }
  );
  return response?.data;
};
