import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

const Button = ({ text, onPress, disabled, loading }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#FD8438', paddingHorizontal: 10, paddingVertical: 15, minWidth: 150, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} disabled={disabled}>
                {
                    loading ? (<ActivityIndicator size={24} color={'black'} />) : (<Text style={{ fontFamily: 'DmSans', fontSize: 25, color: 'black' }}>{text}</Text>)
                }
            </TouchableOpacity>
        </View >
    )
}

export default Button