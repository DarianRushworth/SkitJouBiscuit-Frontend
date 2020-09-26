import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#B5C9D5",
    },
    image: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textContainer : {
        flex: 2,
        flexDirection: "column"
    },
    text: {
        marginTop: 100,
        color: "tomato",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    }
})