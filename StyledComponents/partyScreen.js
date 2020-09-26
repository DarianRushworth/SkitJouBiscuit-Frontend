import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B5C9D5",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "tomato",
        textAlign: "center",
    },
    textHead: {
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        width: 300,
        textAlign: "center",
        alignSelf: "center",
    },
    image: {
        height: 200,
        width: 350,
        resizeMode: "cover",
    },
    avatarContainer: {
        flex: 1,
        flexDirection: "row",
    },
    avatar1: {
        backgroundColor: "tomato",
        marginRight: 30,
    },
    avatar2: {
        backgroundColor: "tomato",
        marginLeft: 30,
    },
    avatarText: {
        fontSize: 10,
        color: "white",
    }
})