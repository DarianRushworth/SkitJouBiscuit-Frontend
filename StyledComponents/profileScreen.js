import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 150,
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#ef3100"
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
        marginTop: 50,
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
        fontSize: 10,
    }
})