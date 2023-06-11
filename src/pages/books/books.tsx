import React, { useState, useEffect } from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {deleteBook, getBooks} from "../../api/books";
import { useNavigation } from "@react-navigation/native";

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigation = useNavigation();
    const [isUpdate, setIsUpdate] = useState(false);

    const fetchBooks = () => {
        getBooks()
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    useEffect(() => {
        fetchBooks()
    }, [isUpdate])

    const renderBook = ({ item }) => {
        if (item.title) {
            return (
                <View style={styles.bookItem}>
                    <View style={styles.bookInfo}>
                        <Text style={styles.bookTitle}>{item.title}</Text>
                        <Text style={styles.bookAuthor}>Author: {item.author}</Text>
                        <Text style={styles.bookDescription}>{item.description}</Text>
                        <Text style={styles.bookPrice}>Price: {item.price}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UpdateBook", { book: item, setIsUpdate: setIsUpdate, isUpdate: isUpdate })}>
                            <Text style={styles.buttonLabel}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={() => handleDeleteBook(item._id)}>
                            <Text style={styles.buttonLabel}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    };

    const handleDeleteBook = (bookId) => {
        deleteBook(bookId).then((response) => {
            if(response.status == 200) {
                Alert.alert('Kitap kaydı silindi');
                fetchBooks();
            }
        }).catch((error) => {
            console.log(error)
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Library App</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddBook")}>
                    <Text style={styles.addButtonLabel}>Add Book</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={books}
                renderItem={renderBook}
                keyExtractor={(item) => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#F5F5F5",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        backgroundColor: "#2196F3",
        marginBottom: 20,
        elevation: 2,
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    addButton: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    addButtonLabel: {
        fontSize: 16,
        color: "#2196F3",
        fontWeight: "bold",
    },
    bookItem: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bookInfo: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    bookAuthor: {
        fontSize: 14,
        color: "gray",
        marginBottom: 5,
    },
    bookDescription: {
        fontSize: 14,
        marginBottom: 5,
    },
    bookPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2196F3",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        backgroundColor: "#2196F3",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonLabel: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
});

export default Books;
