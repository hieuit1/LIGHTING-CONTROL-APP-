import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/homeOne";
import LoginScreen from "./src/LoginScreen";
import SignupScreen from "./src/SignupScreen";
import ForgotPasswordScreen from "./src/ForgotPasswordScreen";
import IntroductionScreen from "./src/IntroductionScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroductionScreen3">
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
