import {
  VStack,
  View,
  Center,
  Heading,
  Pressable,
  Select,
  FormControl,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@components/Button";
import { ProgramNavigatorRoutesProps } from "@routes/program.routes";
import { useCompanies } from "@hooks/useCompanies";

export function CreateSearch() {
  const navigation = useNavigation<ProgramNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { competitors } = useCompanies();

  function handleCreateSearch(data: any) {
    console.log(data);
    navigation.navigate("addProductList");
  }

  return (
    <VStack flex={1} bg={"gray.100"} px={10}>
      <Center flex={1}>
        <View flexDirection={"row"} w={"100%"}>
          <Pressable onPress={() => navigation.navigate("home")}>
            <AntDesign name="back" size={24} color={"black"} />
          </Pressable>
          <Heading
            color={"gray.900"}
            fontSize={"xl"}
            ml={8}
            mb={6}
            fontFamily={"heading"}
          >
            Criar pesquisa
          </Heading>
        </View>

        <FormControl isInvalid={!!errors.name?.message} isReadOnly>
          <Controller
            control={control}
            name={"name"}
            render={({ field: { onChange, value } }) => (
              <Select
                w={"100%"}
                h={16}
                mb={errors.name?.message ? 0 : 12}
                mt={1}
                fontSize={16}
                borderWidth={0}
                borderBottomWidth={2}
                background={"gray.200"}
                borderColor={"gray.300"}
                placeholder="Selecione a empresa"
                accessibilityLabel="Selecione a empresa"
                _selectedItem={{
                  bg: "green.600",
                }}
                onValueChange={onChange}
                selectedValue={value}
              >
                {competitors?.map((item) => (
                  <Select.Item
                    key={item.id}
                    label={item.nome}
                    value={String(item.id)}
                  />
                ))}
              </Select>
            )}
          />
          <FormControl.ErrorMessage mb={errors.name?.message ? 12 : 0}>
            {errors.name?.message}
          </FormControl.ErrorMessage>
        </FormControl>

        <Button
          title="Começar"
          disabled={!!errors.name?.message}
          color={errors.name?.message ? "green.900" : "green.700"}
          onPress={handleSubmit(handleCreateSearch)}
        />
      </Center>
    </VStack>
  );
}
