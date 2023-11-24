import { Text } from "native-base";
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { ListSearch } from "@screens/ListSearch";
import { CreateSearch } from "@screens/CreateSearch";

import { AntDesign } from "@expo/vector-icons";

type SearchRoutes = {
  listSearch: undefined;
  createSearch: undefined;
};

export type SearchNavigatorRoutesProps = BottomTabScreenProps<SearchRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function SearchRoutes() {
  return (
    <Navigator
      initialRouteName="listSearch"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
      }}
    >
      <Screen
        name="listSearch"
        component={ListSearch}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="form" size={20} color={"#00B37E"} />
            ) : (
              <AntDesign name="form" size={20} color={"#C4C4CC"} />
            ),
        }}
      />
      <Screen
        name="createSearch"
        component={CreateSearch}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="plus" size={20} color={"#00B37E"} />
            ) : (
              <AntDesign name="plus" size={20} color={"#C4C4CC"} />
            ),
        }}
      />
    </Navigator>
  );
}
