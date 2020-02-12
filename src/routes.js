import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";
import TextDIN from "./components/TextDIN";

import Main from "./pages/Main";
import Recibo from "./pages/Recibo";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recibo"
          component={Recibo}
          options={{
            headerTitle: () => (
              <TextDIN color="#fff" size={19}>
                PAGAMENTO REALIZADO COM SUCESSO
              </TextDIN>
            ),
            headerBackImage: () => (
              <Ionicons name="ios-arrow-back" size={32} color="#fff" />
            ),

            headerTransparent: true,
            headerTitleAlign: "center",
            headerStyle: {
              height: 90
            },
            headerTintColor: "#fff"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
