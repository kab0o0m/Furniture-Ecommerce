//Checkout.js
const CHECKOUT_KEY = "checkout";
let checkoutList = JSON.parse(localStorage.getItem(CHECKOUT_KEY)) || [];

const getCheckoutList = () => {
  console.log(checkoutList);
  return checkoutList;
};

const setCheckoutList = (updatedCheckoutItems) => {
  checkoutList = updatedCheckoutItems;
  localStorage.setItem(CHECKOUT_KEY, JSON.stringify(updatedCheckoutItems));
};

export { getCheckoutList, setCheckoutList };
