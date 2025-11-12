/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './app/screen/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupSuccessScreen from './app/screen/SignupSuccessScreen';
import LoginScreen from './app/screen/LoginScreen';
import NewsFeedScreen from './app/screen/NewsFeedScreen';
import NewsScreen from './app/screen/NewsScreen';
import { NewsArticle } from './app/api/news/types';

const Stack = createNativeStackNavigator()
export type RootStackParamList = {
  Signup: undefined;
  Login: undefined;
  SignupSuccess: undefined;
  LoginScreen: undefined;
  NewsFeed: undefined;
  News: { article: NewsArticle };
};
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupSuccess" component={SignupSuccessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





export default App;
