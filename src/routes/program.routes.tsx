import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { SearchRoutes } from "./search.routes";

type ProgramRoutes = {
  home: undefined;
  searchRoutes: undefined;
};

export type ProgramNavigatorRoutesProps =
  NativeStackNavigationProp<ProgramRoutes>;

const { Navigator, Screen } = createNativeStackNavigator();

export function ProgramRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="searchRoutes" component={SearchRoutes} />
    </Navigator>
  );
}
