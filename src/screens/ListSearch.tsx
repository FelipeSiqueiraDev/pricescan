import {
  VStack,
  View,
  Text,
  Center,
  Heading,
  Pressable,
  FlatList,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { ProgramNavigatorRoutesProps } from "@routes/program.routes";

import { SearchCard } from "@components/SearchCard";
import { useCompanies } from "@hooks/useCompanies";
import { CompetitorDTO } from "@dtos/CompetitorDTO";

export function ListSearch() {
  const navigation = useNavigation<ProgramNavigatorRoutesProps>();

  const { competitors } = useCompanies();

  return (
    <VStack flex={1} bg={"gray.100"} px={10}>
      <Center flex={1} pt={16}>
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
            Pesquisas
          </Heading>
        </View>

        <FlatList
          data={competitors}
          showsVerticalScrollIndicator={false}
          flex={1}
          w={"100%"}
          justifyItems={"center"}
          bounces={true}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SearchCard competitor={item} />
          )}
          ListEmptyComponent={() => (
            <Center mt={150}>
              <AntDesign name="closecircle" size={50} color={"#7C7C8A"} />
              <Text
                fontSize={"4xl"}
                textAlign={"center"}
                fontWeight={"bold"}
                color={"gray.500"}
                mt={8}
              >
                Ainda não temos itens nessa lista!
              </Text>
            </Center>
          )}
          contentContainerStyle={{
            paddingBottom: 80,
          }}
        />
      </Center>
    </VStack>
  );
}
