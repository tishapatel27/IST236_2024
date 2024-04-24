import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
const ItemCard = ({ title, dueDate, onDelete, onPress, onFinish,description}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View style={{ width: '75%' }}>
                    <Text style={styles.cardTxt}>{title}</Text>
                    <Text style={styles.cardDesc}>{description}</Text>
                    <Text style={styles.cardDate}>{dueDate}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btn} onPress={onFinish}>
                        <Ant size={22} color={'#ffffff'} name='checkcircle' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={onDelete}>
                        <Ant size={22} color={'#ffffff'} name='delete' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default memo(ItemCard)
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
        fontFamily: 'Poppins-Bold',
    },
    cardDate: {
        fontSize: 10,
        color: '#ffca28',
        fontFamily: 'Poppins-Regular',
    },
    cardDesc: {
        fontSize: 12,
        color: '#f3e5f5',
        fontFamily: 'Poppins-Medium',
    },
    btn: {
        margin: 5,
        marginHorizontal: 10
    }
})