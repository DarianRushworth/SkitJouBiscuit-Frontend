import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B5C9D5",
        flex: 1,
        flexDirection: "column",
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#ef3100",
        flex: 5,
        flexDirection: "column-reverse"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10,
        color: "white"
    },
    avatarContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    avatar1: {
        backgroundColor: "tomato",
        marginRight: 40,
    },
    avatar2: {
        backgroundColor: "tomato",
    },
    avatar3: {
        backgroundColor: "tomato",
        marginLeft: 40,
    },
    avatarText: {
        fontSize: 15,
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B5C9D5"
    },
    modalView2: {
        margin: 20,
        backgroundColor: "#B5C9D5",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText: {
        color: "tomato",
        fontWeight: "bold",
        textAlign: "center",
    },
    cardImage: {
        height: 30,
        width: 30,
        marginRight: 10,
    },
    cardContainer: {
        margin: 15,
        flexDirection: "row",
    },
    cardText: {
        color: "tomato",
        fontWeight: "bold",
    },
    cardBackground: {
        backgroundColor: "#003152",
    },
    mainCard: {
        backgroundColor: "#003152",
        flex: 7,
        marginTop: 60,
    },
    mainText: {
        color: "white",
        fontWeight: "bold",
    },
    eventCard: {
        backgroundColor: "#003152",
        flex: 7,
    }
})