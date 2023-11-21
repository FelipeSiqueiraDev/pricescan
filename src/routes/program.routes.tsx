import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

import { Provisory } from "@screens/Provisory";

type ProgramRoutes = {
  provisory: undefined;
};

export type ProgramNavigatorRoutesProps = BottomTabScreenProps<ProgramRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function ProgramRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Provisory" component={Provisory} />
    </Navigator>
  );
}
