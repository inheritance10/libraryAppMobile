import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { getBooks } from "../../api/books";
import {useNavigation} from "@react-navigation/native";

const Books = () => {
    const [books, setBooks] = useState([]);
    const navigation = useNavigation();
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

    const renderBook = ({ item }) => {
        if (item.title) {
            return (
                <TouchableOpacity style={styles.bookItem}>
                    <Text style={styles.bookTitle}>{item.title}</Text>
                </TouchableOpacity>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Library App</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate('AddBook')}}>
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
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Books;
