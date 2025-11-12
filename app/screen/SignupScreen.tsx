import React from 'react'
import { Alert, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Logo from '../../assets/icons/app_logo.svg';
import StarLogo from '../../assets/icons/star_icon.svg';
import GoogleLogo from '../../assets/icons/google.svg';
import FaceBookLogo from '../../assets/icons/facebook.svg';
import UserTextInput from '../components/UserTextInput';
import SocialsBlock from '../components/SocialsBlock';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { COLORS, FONT_FAMILY } from '../utils/AppConstants';
import { Button, TextButton } from '../components/Button';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
const SignupScreen = () => {
  const navigation = useNavigation<Nav>();
  const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 15,
      height: Dimensions.get("window").height,

    },
    formContainer: {
      backgroundColor: COLORS.white,
      borderRadius: 40,
      width: '100%',
      marginTop: 20,
      paddingHorizontal: 24,
      paddingVertical: 24,
    },
    textStyle: {
      fontFamily: FONT_FAMILY.bold,
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 20,
    },
    socialsContainer: {
      width: '100%',
      height: 50,
      gap: 3,
      marginBottom: 20,
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    formBackround: {
      position: 'absolute',
      top: 0,
      backgroundColor: 'rgba(255,255,255, 0.08)',
      height: 300,
      width: '87%',
      borderRadius: 40,
      alignSelf: 'center'
    },
  });
  return (

    <View style={{ backgroundColor: COLORS.mainBackgroundColor, }}>
      <ScrollView>
        <View style={styles.appContainer}>
          <Logo style={{ marginTop: 40 }} />
          <>
            <View style={{ position: 'relative', width: '100%' }}>
              <View style={styles.formBackround}></View>
              <View style={[styles.formBackround, { top: 10, width: '93%' }]}></View>
              <View style={styles.formContainer}>
                <StarLogo style={{ marginBottom: 14 }} />
                <Text style={styles.textStyle} >Create Account</Text>
                <View style={styles.socialsContainer}>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <SocialsBlock text='Google'><GoogleLogo /></SocialsBlock>
                    <SocialsBlock text='Facebook'><FaceBookLogo /></SocialsBlock>
                  </View>
                </View>
                <UserTextInput label='User name' placeholder='Enter your user name' />
                <UserTextInput label='Email' placeholder='Enter your email' keyboardType='email-address' />
                <UserTextInput label='Password' placeholder='Enter your password' secureTextEntry={true} />
                <View style={styles.buttonContainer}>
                  <Button onPress={() => navigation.navigate("SignupSuccess")} value='Sign Up' />
                  <TextButton text='Login' onPress={() => navigation.navigate("Login")} />
                </View>
              </View>
            </View>
          </>

        </View>
      </ScrollView>
     
    </View>

  )

}

export default SignupScreen