import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { updateBook } from "../../api/books";
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdateBook = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { book, setIsUpdate, isUpdate } = route.params;
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);
    const [price, setPrice] = useState(String(book.price));

    const handleUpdateBook = () => {
        let data = {
            _id: book._id,
            title,
            author,
            description,
            price,
            category: 'Adventure',
        };

        updateBook(data)
            .then((response) => {
                if(response.status == 200) {
                    Alert.alert('Kitap başarıyla güncellendi');
                    setIsUpdate(!isUpdate);
                    navigation.navigate('Books');
                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>Author:</Text>
            <TextInput
                style={styles.input}
                value={author}
                onChangeText={setAuthor}
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
            />
            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateBook}>
                <Text style={styles.updateButtonLabel}>Update Book</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: "#F5F5F5",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    updateButton: {
        backgroundColor: "#2196F3",
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    updateButtonLabel: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default UpdateBook;
