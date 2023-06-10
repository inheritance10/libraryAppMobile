import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@MyApp:token';

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, token);
    console.log('Token saved successfully');
  } catch (error) {
    console.log('Error saving token:', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEY);
    return token;
  } catch (error) {
    console.log('Error retrieving token:', error);
    return null;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('Token removed successfully');
  } catch (error) {
    console.log('Error removing token:', error);
  }
};
