import { useRef, useState } from "react";
import { TextInput, Keyboard } from "react-native";
import { VStack, Heading, Center, Pressable } from "native-base";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { useAuth } from "@hooks/useAuth";

import Toast from "react-native-toast-message";
import { AntDesign } from "@expo/vector-icons";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { UserDTO } from "@dtos/UserDTO";

const signUpSchema = yup.object().shape({
  username: yup.string().required("Informe o nome de usuário"),
  password: yup.string().required("Informe a senha"),
});

export function SignIn() {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDTO>({
    resolver: yupResolver(signUpSchema),
  });

  async function handleSingUp(data: UserDTO) {
    Keyboard.dismiss();
    setLoading(true);
    try {
      await signIn(data);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Usuário ou senha incorretos!",
        text2: "Verifique as credenciais e tente novamente",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <VStack flex={1} bg={"gray.100"} px={10}>
      <Center flex={1}>
        <Heading
          color={"gray.900"}
          fontSize={"xl"}
          mb={6}
          fontFamily={"heading"}
        >
          Acesse sua conta
        </Heading>

        <Controller
          control={control}
          name={"username"}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={"Nome de usuário"}
              keyboardType={"email-address"}
              autoCapitalize={"none"}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.username?.message}
              cursorColor={"#00B37E"}
              onSubmitEditing={() => {
                if (passwordRef.current) {
                  passwordRef.current.focus();
                }
              }}
            />
          )}
        />

        <Controller
          control={control}
          name={"password"}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder={"Senha"}
              value={value}
              autoCorrect={false}
              returnKeyType={"send"}
              autoCapitalize={"none"}
              onChangeText={onChange}
              ref={passwordRef}
              errorMessage={errors.password?.message}
              onSubmitEditing={handleSubmit(handleSingUp)}
              secureTextEntry={showPassword ? true : false}
              mb={4}
              rightElement={
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  mr={15}
                >
                  {showPassword ? (
                    <AntDesign name="eyeo" size={22} color={"black"} />
                  ) : (
                    <AntDesign name="eye" size={22} color={"black"} />
                  )}
                </Pressable>
              }
            />
          )}
        />

        <Button
          title={"Acessar"}
          isLoading={loading}
          onPress={handleSubmit(handleSingUp)}
        />
      </Center>
    </VStack>
  );
}
