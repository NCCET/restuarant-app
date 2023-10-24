const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GroupComponent from "./components/GroupComponent";
import AndroidLarge8 from "./components/AndroidLarge8";
import AndroidLarge10 from "./components/AndroidLarge10";
import AndroidLarge3Default from "./components/AndroidLarge3Default";
import AndroidLarge15Default from "./components/AndroidLarge15Default";
import AndroidLarge14 from "./components/AndroidLarge14";
import AndroidLarge2 from "./components/AndroidLarge2";
import AndroidLarge4 from "./components/AndroidLarge4";
import AndroidLarge12 from "./components/AndroidLarge12";
import AndroidLarge13 from "./components/AndroidLarge13";
import GroupComponentSet from "./components/GroupComponentSet";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import SpicyNoodlesContainer from "./components/SpicyNoodlesContainer";
import SignInFormContainer from "./components/SignInFormContainer";
import MenuContainer from "./components/MenuContainer";
import FormContainer from "./components/FormContainer";
import Basedonthegivencontext from "./components/Basedonthegivencontext";
import FormContainer1 from "./components/FormContainer1";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    
    <>
    
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="SpicyNoodlesContainer"
          component={SpicyNoodlesContainer}
            screenOptions={{ headerShown: false }}>
            </Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="SignInFormContainer"
          component={SignInFormContainer}
            screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignInFormContainer" component={SignInFormContainer} />
        <Stack.Screen name="MenuContainer" component={MenuContainer} />
        <SignInFormContainer/>
            </Stack.Navigator>
        ) : null}
      </NavigationContainer>
      

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="MenuContainer"
          component={MenuContainer}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="GroupComponent"
          component={GroupComponent}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>


      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="GroupComponentSet"
          component={GroupComponentSet}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="FormContainer"
          component={FormContainer}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="FormContainer1"
          component={FormContainer1}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="Basedonthegivencontext"
          component={Basedonthegivencontext}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndroidLarge15Default"
          component={AndroidLarge15Default}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge14"
          component={AndroidLarge14}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge13"
          component={AndroidLarge13}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge12"
          component={AndroidLarge12}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge10"
          component={AndroidLarge10}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge8"
          component={AndroidLarge8}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge4"
          component={AndroidLarge4}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge3Default"
          component={AndroidLarge3Default}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
      </NavigationContainer>

      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
          name="AndriodLarge2"
          component={AndroidLarge2}
            screenOptions={{ headerShown: false }}
          ></Stack.Navigator>
        ) : null}
        
      </NavigationContainer>
    </>
    
  );
};

export default App;
