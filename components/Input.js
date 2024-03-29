import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import useAuth from '../hooks/useAuth'

const Input = ({ value, placeholder, onChange, secureText }) => {
    const { showPassword, setShowPassword } = useAuth()
    const iconName = showPassword ? 'eye-off' : 'eye'
    return (
        <View>
            <TextInput placeholder={placeholder}
                onChangeText={onChange}
                secureTextEntry={!showPassword && secureText}
                value={value}
                placeholderTextColor={'gray'}
                cursorColor={'gray'}
                autoCapitalize='none'
                style={{ color: '#838383', fontFamily: 'DmSans', paddingVertical: 15, fontSize: 22, paddingHorizontal: 12, borderRadius: 6, borderWidth: 1, borderColor: 'gray', position: 'relative', zIndex: -1 }} />
            {
                secureText &&
                <TouchableOpacity style={{ position: 'absolute', right: 5, top: '20%', padding: 8, zIndex: 2 }} onPress={() => setShowPassword(!showPassword)}>
                    <Icon name={iconName} color={'gray'} size={22} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Input