import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#B5C9D5",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        height: 200,
        justifyContent: "center",
    },
    textContainer : {
        flex: 1,
        flexDirection: "column",
    },
    buttonContainer : {
        flex: 0,
        flexDirection: "column",
        justifyContent: "center",
    }
})