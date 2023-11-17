import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { VStack, Image, Heading, Center, View, Text } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { AntDesign } from "@expo/vector-icons";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <VStack flex={1} bg={"gray.700"} px={10}>
      <Image
        source={BackgroundImg}
        alt={"Background da aplicação"}
        resizeMode={"contain"}
        position={"absolute"}
        opacity={40}
      />

      <Center mt={6} p={6}>
        <LogoSvg width={270} height={270} />
      </Center>

      <Center mt={-10}>
        <Heading
          color={"gray.100"}
          fontSize={"xl"}
          mb={6}
          fontFamily={"heading"}
        >
          Acesse sua conta
        </Heading>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View w={"full"}>
          <Input
            placeholder="Senha"
            secureTextEntry={showPassword ? true : false}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: 20, bottom: 38 }}
          >
            {showPassword ? (
              <AntDesign name="eye" size={22} color={"white"} />
            ) : (
              <AntDesign name="eyeo" size={22} color={"white"} />
            )}
          </TouchableOpacity>
        </View>

        <Button title="Acessar" />
      </Center>
    </VStack>
  );
}
