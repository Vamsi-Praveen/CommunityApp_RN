import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import Button from '../components/Button'
import Input from '../components/Input'

const Register = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmpass: '',
  })
  const [regError, setRegError] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPass: '',
    username: '',
    phone: ''
  })
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegister = () => {
    setRegError({
      fullname: '',
      email: '',
      password: '',
      confirmPass: '',
      username: '',
      phone: ''
    })
    let validationError = false
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user.fullname == '') {
      setRegError(prevError => ({ ...prevError, fullname: 'FullName is required' }));
      validationError = true
    }
    if (user.email == '' || !emailRegex.test(user.email)) {
      setRegError(prevError => ({ ...prevError, email: 'Email is invalid' }));
      validationError = true
    }
    if (user.phone == '' || user.phone.length != 10) {
      setRegError(prevError => ({ ...prevError, phone: 'Phone Number is invalid' }));
      validationError = true
    }
    if (user.username == '') {
      setRegError(prevError => ({ ...prevError, username: 'Username is required' }));
      validationError = true
    }
    if (user.password == '') {
      setRegError(prevError => ({ ...prevError, password: 'Password is required' }));
      validationError = true
    }
    if (user.confirmpass == '') {
      setRegError(prevError => ({ ...prevError, confirmPass: 'ConfirmPassword is required' }));
      validationError = true
    }
    if (user.password != user.confirmpass) {
      setRegError(prevError => ({ ...prevError, confirmPass: 'Password\'s didn\'t match' }));
      validationError = true
    }

    setHasError(validationError)

    if (!validationError) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 15 }}>
      <View>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Icon name="arrow-back-outline" size={28} color={"#bbbbbb"} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 38, color: '#BBBBBB', textAlign: 'center', fontFamily: 'DmSans' }}>Join Our Community Now</Text>
          <View style={{ width: '100%', gap: 15, marginTop: 30 }}>
            <Input placeholder={'Full Name'} onChange={(e) => { setUser((prev) => ({ ...prev, fullname: e })) }} />
            {
              regError.fullname.length > 0 && <Text style={styles.error}>{regError.fullname}</Text>
            }
            <Input placeholder={'Email'} email onChange={(e) => { setUser((prev) => ({ ...prev, email: e })) }} />
            {
              regError.email.length > 0 && <Text style={styles.error}>{regError.email}</Text>
            }
            <Input placeholder={'Phone Number'} phone onChange={(e) => { setUser((prev) => ({ ...prev, phone: e })) }} />
            {
              regError.phone.length > 0 && <Text style={styles.error}>{regError.phone}</Text>
            }
            <Input placeholder={'Username'} onChange={(e) => { setUser((prev) => ({ ...prev, username: e })) }} />
            {
              regError.username.length > 0 && <Text style={styles.error}>{regError.username}</Text>
            }
            <Input placeholder={'Password'} secureText onChange={(e) => { setUser((prev) => ({ ...prev, password: e })) }} />
            {
              regError.password.length > 0 && <Text style={styles.error}>{regError.password}</Text>
            }
            <Input placeholder={'Confirm Password'} secureText onChange={(e) => { setUser((prev) => ({ ...prev, confirmpass: e })) }} />
            {
              regError.confirmPass.length > 0 && <Text style={styles.error}>{regError.confirmPass}</Text>
            }
          </View>
        </View>
        <Text style={{ fontSize: 18, color: '#bbbbbb', fontFamily: 'DmSans', marginVertical: 15, marginTop: 20, textAlign: 'center' }}>By continuing, you agree to our&nbsp;<Text style={styles.link}>Terms of Service</Text>&nbsp;&&nbsp;<Text style={styles.link}>Privacy Policy</Text></Text>
        <View style={{ marginTop: 15, width: '100%', }}>
          <Button text={'Join Now'} onPress={handleRegister} disabled={loading} loading={loading} />
        </View>
      </ScrollView>
    </View >

  )
}

export default Register



const styles = StyleSheet.create({
  link: {
    color: '#fd8438',
    textDecorationLine: 'underline',
    textDecorationColor: '#fd8438',
    fontFamily: 'DmSans',
    fontSize: 18
  },
  error: {
    color: '#fd8438',
    fontFamily: 'DmSans'
  }
})