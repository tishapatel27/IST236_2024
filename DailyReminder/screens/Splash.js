import { StyleSheet, Image, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
const Splash = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('Home')
    }, 2000);
    return (
        <LinearGradient colors={['#833ab4', '#fd1d1d', '#fcb045']} style={styles.container}>
            <StatusBar backgroundColor={'#833ab4'} barStyle={'light-content'} />
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
        backgroundColor: '#156ced',
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
        color: '#f3e5f5',
        marginVertical: 5,
        fontFamily: 'Poppins-Bold',
    },
    desc: {
        fontSize: 14,
        color: '#f3e5f5',
        marginVertical: 5,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
})