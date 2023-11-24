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

export const concorrentes: CompanyDataProps[] = [
  /* {
    id: 1,
    name: "Empresa 1",
  },
  {
    id: 2,
    name: "Empresa 2",
  },
  {
    id: 3,
    name: "Empresa 3",
  },
  {
    id: 4,
    name: "Empresa 4",
  },
  {
    id: 5,
    name: "Empresa 5",
  },
  {
    id: 6,
    name: "Empresa 6",
  }, */
];

export type CompanyDataProps = {
  id: number;
  name: string;
};

export type CreateSearchFormDataProps = {
  name: string;
};

const companySchema = yup.object().shape({
  name: yup.string().required("Informe o nome da empresa"),
});

export function CreateSearch() {
  const navigation = useNavigation<ProgramNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<CreateSearchFormDataProps>(companySchema),
  });

  function handleCreateSearch({ name }: CreateSearchFormDataProps) {
    console.log(name);
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
                {concorrentes?.map((item) => (
                  <Select.Item
                    key={item.id}
                    label={item.name}
                    value={item.name}
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
