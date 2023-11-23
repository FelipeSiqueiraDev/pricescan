import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Initial } from "@screens/Initial";
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
      initialRouteName="initial"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Screen name="initial" component={Initial} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  );
}
