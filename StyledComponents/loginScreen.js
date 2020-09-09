import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        height: 600,
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