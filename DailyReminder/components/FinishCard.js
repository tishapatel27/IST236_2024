import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ant from 'react-native-vector-icons/AntDesign'
const FinishCard = ({ title, dueDate, onDelete }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Ant size={22} color={'#ffffff'} name='checksquare' />
                <View style={{ width: '75%' }}>
                    <Text style={styles.cardTxt}>{title}</Text>
                    <Text style={styles.cardDate}>{dueDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btn} onPress={onDelete}>
                        <Ant size={22} color={'#ffffff'} name='delete' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default FinishCard
const styles = StyleSheet.create({
    card: {
        width: '95%',
        justifyContent: 'center',
        backgroundColor: '#a55eea',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    cardTxt: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
        color: '#ffffff',
        fontFamily: 'Poppins-Medium',
    },
    cardDate: {
        fontSize: 12,
        color: '#ffffff',
        fontFamily: 'Poppins-Regular',
    },
    btn: {
        margin: 5,
        marginHorizontal: 10
    }
})