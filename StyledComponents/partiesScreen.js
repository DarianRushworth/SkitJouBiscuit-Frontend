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
        color: "white",
        textAlign: "left",
        width: 150,
    },
    cardDate: {
        marginTop: 10,
        width: 115,
        height: 80,
        backgroundColor: "tomato",
    },
    cardContainer: {
        flexDirection: "row",
        width: 300,
    },
    cardContainer2: {
        width: 90,
    },
    cardText: {
        color: "white",
        textAlign: "left",
        fontSize: 10,
    },
    cardTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "left",
    },
    card: {
        backgroundColor: "#748A9E",
    }
})