import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONT_FAMILY } from '../utils/AppConstants'

import MarkedLogo from '../../assets/icons/marked.svg'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../components/Button';



type Nav = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const SignupSuccessScreen = () => {


    const navigation = useNavigation<Nav>();
    const styles = StyleSheet.create({
        appBackground: {
            backgroundColor: COLORS.mainBackgroundColor,
            flex: 1,
            alignItems: 'center'
        },
        textStyle: {
            fontSize: 28,
            color: COLORS.white,
            fontFamily: FONT_FAMILY.medium,
            fontWeight: 500,
        },

        smallText: {
            fontSize: 16,
            textAlign: 'center'
        },
        topContainer: {
            flex: 2,
            width: 270,
            alignItems: 'center',
            justifyContent: 'center'
        },
       
        buttonContainer: {
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: 'row',
            gap: 8,

        },

        bottomContainer: {
            flex: 1,
            justifyContent: 'center',
            width: 300,
        }

    })
    return (
        <View style={styles.appBackground}>
            <View style={styles.topContainer}>
                <MarkedLogo  style={{marginBottom:20}}/>
                <Text style={[styles.textStyle]}>Account Created</Text>
                <Text style={[styles.textStyle, styles.smallText]}>Your news account has been successfully created</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Button onPress={() => navigation.navigate("Login")} value='Continue to feed'  width={'100%'}/>
            </View>
        </View>

    )
}

export default SignupSuccessScreen