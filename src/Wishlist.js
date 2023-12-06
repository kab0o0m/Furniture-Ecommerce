// wishlist.js
const WISHLIST_KEY = "wishlist";
let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];

const getWishlist = () => {
  return wishlist;
};

const setWishlist = (updatedWishlistItems) => {
  wishlist = updatedWishlistItems;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlistItems));
};

export { getWishlist, setWishlist };
