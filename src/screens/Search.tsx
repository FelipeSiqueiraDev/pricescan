import { VStack, Text } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ProgramNavigatorRoutesProps } from "@routes/program.routes";

export function Search() {
  const navigation = useNavigation<ProgramNavigatorRoutesProps>();
  return (
    <VStack>
      <Text>SEARCH PAGE</Text>
      <Button title="Voltar" onPress={() => navigation.navigate("home")} />
    </VStack>
  );
}
