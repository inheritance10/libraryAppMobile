import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()

    const handleMenuItemPress = (menuItem) => {
        // İlgili menü öğesine tıklanıldığında gerçekleştirilecek işlemleri burada yazabilirsiniz
        // Örneğin, farklı sayfalara yönlendirme veya farklı fonksiyonları çağırma gibi işlemler yapılabilir
        switch (menuItem) {
            case 'Books':
                navigation.navigate('Books')
                break;
            case 'Users':
                navigation.navigate('Users')
                break;
            case 'Favorites':
                // Favorites sayfasına yönlendirme işlemi burada gerçekleştirilebilir
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Library App</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Menu</Text>
                <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Books')}>
                    <Text style={styles.menuItemText}>Books</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Users')}>
                    <Text style={styles.menuItemText}>Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuItemPress('Favorites')}>
                    <Text style={styles.menuItemText}>Favorites</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'blue',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',

        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        backgroundColor: 'lightblue',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
