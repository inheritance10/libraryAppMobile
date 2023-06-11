import React, {useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

    }, [])

    const handleDeleteUser = (userId) => {
        // Handle delete user action
        console.log("Delete user with id:", userId);
    };

    const handleUpdateUser = (userId) => {
        // Handle update user action
        console.log("Update user with id:", userId);
    };

    const renderUserCard = (user) => {
        return (
            <View style={styles.card} key={user.id}>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => handleDeleteUser(user.id)}
                    >
                        <Text style={styles.actionButtonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => handleUpdateUser(user.id)}
                    >
                        <Text style={styles.actionButtonText}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {users.map((user) => renderUserCard(user))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 14,
        color: "gray",
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
    },
    actionButton: {
        backgroundColor: "#2196F3",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    actionButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default Users;
