import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    textContainer : {
        flex: 2,
        flexDirection: "column"
    },
    text: {
        color: "yellow",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
})