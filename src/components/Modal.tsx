import { View, VStack, Pressable } from "native-base";

import { Button } from "@components/Button";

import { useAuth } from "@hooks/useAuth";

type ModalProps = {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Modal({ setVisible }: ModalProps) {
  const { singOut } = useAuth();

  return (
    <VStack flex={1} h={"full"} w={"full"} position={"absolute"}>
      <Pressable flex={1} onPress={() => setVisible(false)} />

      <View w={"full"} h={165} py={2}>
        <Button
          title="Sair"
          color={"red.700"}
          pressedColor={"red.500"}
          onPress={singOut}
          mb={2}
        />
        <Button title="Cancelar" onPress={() => setVisible(false)} />
      </View>
    </VStack>
  );
}
