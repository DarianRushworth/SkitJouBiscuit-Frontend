import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
        margin: 5,
    },
    text: {
        justifyContent: "center",
        marginLeft: 5,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
    }
})