import { useState } from "react";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { VStack, Image, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { AntDesign } from "@expo/vector-icons";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  username: string;
  password: string;
};

const signUpSchema = yup.object().shape({
  username: yup.string().required("Informe o nome de usuário"),
  password: yup.string().required("Informe a senha"),
});

export function SignIn() {
  const [showPassword, setShowPassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleSingUp({ username, password }: FormDataProps) {
    console.log({ username, password });
  }

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

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome de usuário"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.username?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry={showPassword ? true : false}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={handleSubmit(handleSingUp)}
              returnKeyType="send"
              errorMessage={errors.password?.message}
              rightElement={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ marginRight: 15 }}
                >
                  {showPassword ? (
                    <AntDesign name="eyeo" size={22} color={"white"} />
                  ) : (
                    <AntDesign name="eye" size={22} color={"white"} />
                  )}
                </TouchableOpacity>
              }
            />
          )}
        />

        <Button title="Acessar" onPress={handleSubmit(handleSingUp)} />
      </Center>
    </VStack>
  );
}
