import { Pressable, Text, View } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { useAuth } from "@hooks/useAuth";

export function Provisory() {
  const navigation = useNavigation();
  const { singOut } = useAuth();
  return (
    <View flex={1} alignItems={"center"} justifyContent={"center"}>
      <Pressable onPress={singOut}>
        <Text>VOLTAR</Text>
      </Pressable>
    </View>
  );
}
