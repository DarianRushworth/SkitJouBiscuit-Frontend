import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
        justifyContent: "center",
        width: 350,
        height: 300,
    },
    tileImage: {
        marginTop: 30,
        width: 300,
        height: 235,
        resizeMode: "cover",
    },
    tileTitle: {
        color: "tomato",
        fontWeight: "bold",
    },
    container: {
        backgroundColor: "#B5C9D5",
    }
})