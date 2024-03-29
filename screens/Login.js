import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Keyboard } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const { error, setError, user, setUser } = useAuth()
    const handleLogin = async () => {
        Keyboard.dismiss()
        let validationError = false
        setError({
            username: '',
            password: ''
        })
        if (user.username === '') {
            setError(prevError => ({ ...prevError, username: 'Username is required' }));
            validationError = true
        }
        if (user.password === '') {
            setError(prevError => ({ ...prevError, password: 'Password is required' }));
            validationError = true
        }
        setHasError(validationError)
        if (!validationError) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', }}>
            <Text style={{ fontSize: 40, color: '#BBBBBB', textAlign: 'center', fontFamily: 'DmSans' }}>Welcome back&nbsp;🖐,</Text>
            <Text style={{ fontSize: 20, color: '#BBBBBB', textAlign: 'center', fontFamily: 'DmSans' }}>Please Login to Continue&nbsp;&nbsp;</Text>
            <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 25, gap: error.username.length ? 7 : 15 }}>
                <Input placeholder={'Username or Email'} onChange={(e) => { setUser((prev) => ({ ...prev, username: e })) }} />
                {
                    error.username.length > 0 && <Text style={{ color: '#fd8438', marginVertical: 5, fontFamily: 'DmSans' }}>{error.username}</Text>
                }
                <Input secureText placeholder={'Password'} onChange={(e) => { setUser((prev) => ({ ...prev, password: e })) }} />
                {
                    error.password.length > 0 && <Text style={{ color: '#fd8438', marginVertical: 5, fontFamily: 'DmSans' }}>{error.password}</Text>
                }
            </View>
            <View style={{ marginTop: 15, width: '90%' }}>
                <Button text={'Login'} disabled={loading} loading={loading} onPress={handleLogin} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 25 }}>
                <Text style={{ color: '#bbbbbb', fontSize: 18, fontFamily: 'DmSans' }}>Don't have an account,</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color: '#fd8438', textDecorationLine: 'underline', fontSize: 18, fontFamily: 'DmSans' }}>Join us</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})