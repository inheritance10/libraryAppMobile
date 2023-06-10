import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getBooks } from "../../api/books";

const Books = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
        getBooks()
            .then((response) => {
                setBooks(response.data); // Gelen verileri "books" dizisine atar
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <View>
            {books.map((book) => (
                <Text key={book._id}>{book.title}</Text>
            ))}
        </View>
    );
};

export default Books;
