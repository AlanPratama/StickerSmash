import { MaterialIcons } from "@expo/vector-icons"
import { Pressable, StyleSheet, Text, View } from "react-native"

export const IconButton = ({ icon, label, onPress }) => {
    return  (
        <Pressable style={style.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={"#fff"} />
            <Text style={style.iconButtonLabel} >{label}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center"
    },

    iconButtonLabel: {
        color: "#fff",
        marginTop: 12
    }

})