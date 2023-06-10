import apiManager from "./api";

const getBooks = async () => {
    try {
        const response = await apiManager.get('/books');
        return response;
    } catch (error) {
        throw error;
    }
};

export { getBooks };
