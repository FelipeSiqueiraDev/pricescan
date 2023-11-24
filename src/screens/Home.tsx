import { useState } from "react";
import { Pressable, VStack, Center, Text } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { ProgramNavigatorRoutesProps } from "@routes/program.routes";

import LogoSvg from "@assets/logo.svg";

import { Modal } from "@components/Modal";
import { Button } from "@components/Button";

export function Home() {
  const navigation = useNavigation<ProgramNavigatorRoutesProps>();

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSincronize() {
    setLoading(true);

    console.log("SINCRONIIZAAAAAAAAANDO");

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <VStack flex={1} bg={"white"}>
      <Center flex={1} px={10}>
        <LogoSvg
          width={200}
          height={200}
          style={{ position: "absolute", top: 100 }}
        />

        <Button
          title={"Pesquisas"}
          mb={8}
          mt={"70%"}
          disabled={loading}
          color={loading ? "green.900" : "green.700"}
          onPress={() => navigation.navigate("searchRoutes")}
        />

        <Button
          title={"Sincronizar"}
          color={"blue.700"}
          pressedColor={"blue.500"}
          isLoading={loading}
          onPress={handleSincronize}
        />

        <Pressable mt={32} disabled={loading} onPress={() => setVisible(true)}>
          <Text
            fontSize={"lg"}
            fontWeight={600}
            color={loading ? "gray.200" : "gray.500"}
            underline
          >
            Sair
          </Text>
        </Pressable>
        {visible && <Modal setVisible={setVisible} />}
      </Center>
    </VStack>
  );
}
