import { Text, Pressable, VStack, Center } from "native-base";

import LogoSvg from "@assets/logo.svg";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Button } from "@components/Button";

export function Home() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <VStack flex={1} bg={"black"} px={10}>
      <Center mt={32} p={6} mb={48}>
        <LogoSvg width={270} height={270} />
      </Center>

      <Button title="Iniciar" onPress={() => navigation.navigate("signIn")} />
    </VStack>
  );
}
