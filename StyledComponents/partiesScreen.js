import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        height: 200
    },
    image: {
        width: 350,
        height: 100,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        justifyContent: "center",
        marginLeft: 10,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
    }
})