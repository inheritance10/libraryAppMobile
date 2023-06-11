import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createBook} from "../../api/books";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const {isAddBook, setIsAddBook} = route.params;

    const handleAddBook = () => {
        let data = {
            title: title,
            author: author,
            description: description,
            price: price
        }

        createBook(data).then((response) => {
            if(response.status == 201){
                setIsAddBook(!isAddBook);
                Alert.alert('Kitap kaydı başarılı');
                navigation.navigate('Books')

            }
        }).catch((error) => {
            console.log(error)
        })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={setAuthor}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Button title="Add Book" onPress={handleAddBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default AddBook;
