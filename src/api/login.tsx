import apiManager from "./api";

const login = async (data) => {
  try {
    const response = await apiManager.post('/auth/login', {
      email: data.email,
      password: data.password
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export { login };
