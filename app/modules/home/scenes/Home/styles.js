import {StyleSheet} from 'react-native';
import {theme} from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    activityIndicator:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },

    containerView:{
        marginVertical: padding * 3,
        width: windowWidth - 40
    },

    button:{
        backgroundColor: "#FF553F",
        height: normalize(55),
        marginBottom:20
    },

    buttonText:{
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    }
});

export default styles;