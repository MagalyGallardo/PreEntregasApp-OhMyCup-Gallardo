import { View, Text, StyleSheet, Platform, StatusBar } from "react-native"
import colors from "../utils/globals/colors"
import fonts from '../utils/globals/fonts'

const Header = ({title="Oh My Cup"}) => {

    return  <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.brown1,
        height:150,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 30,
    },
    text:{
        fontSize:30,
        fontFamily: fonts.PoppinsBold,
        marginBottom: 15,
    }
})