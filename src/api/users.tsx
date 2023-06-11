import apiManager from "./api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken} from "../storage/storage";
import ApiManager from "./api";
const getUser = async () => {
    try {
        const response = await apiManager.get('/users');
        return response;
    } catch (error) {
        throw error;
    }
};


const createUser = async (data) => {
    try {
        // Token'i AsyncStorage'den al
        const token = await getToken();

        // API isteğini gönder
        const response = await apiManager.post('/books', {
            "title": String(data.title),
            "description": String(data.description),
            "author": String(data.author),
            "price": Number(data.price),
            "category": "Adventure",
        }, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (data) => {
    try {
        // Token'i AsyncStorage'den al
        const token = await getToken();


        // API isteğini gönder
        const response = await apiManager.put('/books/'+ data._id, {
            "title": String(data.title),
            "description": String(data.description),
            "author": String(data.author),
            "price": Number(data.price),
            "category": String(data.category),
        }, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id) => {
    try {
        // Token'i AsyncStorage'den al
        const token = await getToken();

        // API isteğini gönder
        const response = await apiManager.delete('/books/' + id,  {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        throw error;
    }
}



export { getBooks, createBook, deleteBook, updateBook };
