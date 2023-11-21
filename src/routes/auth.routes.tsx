import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { SignIn } from "@screens/SignIn";

type AuthRoutes = {
  home: undefined;
  signIn: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
