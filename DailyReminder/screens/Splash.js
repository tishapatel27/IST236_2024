import { StyleSheet, Image, StatusBar, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors'; // Importing color constants

const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('Home')
    }, 2000);
    return (
        <LinearGradient colors={[Colors.primaryGradientStart, Colors.primaryGradientMiddle, Colors.primaryGradientEnd]} style={styles.container}>
            <StatusBar backgroundColor={Colors.statusBarColor} barStyle={'light-content'} />
            <Text style={styles.txt}>Daily Reminder App!</Text>
            <Image style={styles.img} source={require('../images/logo3.png')} />
            <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.desc}>Effortlessly manage your daily tasks with our intuitive reminder system.</Text>
            </View>
        </LinearGradient>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.cardBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 300,
        height: 250,
        resizeMode: 'contain'
    },
    txt: {
        fontSize: 18,
        color: Colors.textColor,
        marginVertical: 5,
        fontFamily: 'Poppins-Bold',
    },
    desc: {
        fontSize: 14,
        color: Colors.textColor,
        marginVertical: 5,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
})
