import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import Ant from 'react-native-vector-icons/AntDesign';
import { Colors } from '../constants/Colors'; // Importing color constants

const FinishCard = ({ title, dueDate, onDelete, description }) => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'flex-start' }}>
                <View style={{ width: '75%' }}>
                    <Text style={styles.cardTxt}>{title}</Text>
                    <Text style={styles.cardDesc}>{description}</Text>
                    <Text style={styles.cardDate}>{dueDate}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ant size={22} color={Colors.textColor} name='checksquare' />
                    <TouchableOpacity style={styles.btn} onPress={onDelete}>
                        <Ant size={22} color={Colors.textColor} name='delete' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default memo(FinishCard)

const styles = StyleSheet.create({
    card: {
        width: '95%',
        justifyContent: 'center',
        backgroundColor: Colors.cardBackgroundColor,
        padding: 15,
        margin: 10,
        borderRadius: 10,
        shadowColor: Colors.cardShadowColor,
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
        color: Colors.cardTextColor,
        fontFamily: 'Poppins-Bold',
    },
    cardDate: {
        fontSize: 10,
        color: Colors.cardDateColor,
        fontFamily: 'Poppins-Regular',
    },
    cardDesc: {
        fontSize: 12,
        color: Colors.cardDescriptionColor,
        fontFamily: 'Poppins-Medium',
    },
    btn: {
        margin: 5,
        marginHorizontal: 10
    }
})
