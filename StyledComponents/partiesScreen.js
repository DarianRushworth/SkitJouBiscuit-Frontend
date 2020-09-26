import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        height: 300,
        backgroundColor: "#B5C9D5",
    },
    image: {
        width: 300,
        height: 100,
        borderRadius: 10,
        margin: 5,
    },
    text: {
        justifyContent: "center",
        marginLeft: 10,
    },
    textTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "tomato",
        textAlign: "left",
        width: 150,
    },
    cardDate: {
        marginTop: 1,
        width: 150,
        height: 100,
        backgroundColor: "tomato",
    },
    cardContainer: {
        flexDirection: "row",
    },
    cardText: {
        color: "white",
        textAlign: "center",
    }
})