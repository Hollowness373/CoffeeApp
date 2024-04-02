import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = async (item) => {
    try {
        let cartItems = await AsyncStorage.getItem('cart');
        if (!cartItems) {
        cartItems = [];
        } else {
        cartItems = JSON.parse(cartItems);
        }
        cartItems.push(item);
        await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
        console.error('Error adding item to cart:', error);
    }
};

export const getCartItems = async () => {
    try {
        const cartItems = await AsyncStorage.getItem('cart');
        return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
        console.error('Error retrieving cart items:', error);
        return [];
    }
  
};

export const deleteItemFromAsyncStorage = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Item with key ${key} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting item with key ${key}:`, error);
    }
};