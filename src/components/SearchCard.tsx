import { VStack, HStack, Text } from "native-base";

import { CompetitorDTO } from "@dtos/CompetitorDTO";
import { SearchDTO } from "@dtos/SearchDTO";

type SeachCardProps = {
  competitor: CompetitorDTO;
};

export function SearchCard({ competitor }: SeachCardProps) {
  return (
    <VStack w={"100%"} h={160} bg={"white"} mb={4} borderRadius={12} p={4}>
      <HStack>
        <Text
          h={60}
          w={"65%"}
          fontSize={"lg"}
          numberOfLines={2}
          fontWeight={"bold"}
        >
          {competitor.nome}
        </Text>

        <Text
          h={60}
          w={"35%"}
          fontSize={"md"}
          numberOfLines={2}
          color={"green.500"}
          textAlign={"center"}
        >
          25/12/2023
        </Text>
      </HStack>

      <Text fontSize={"md"} fontStyle={"italic"}>
        {competitor.regiao}
      </Text>

      <Text fontSize={"md"} fontStyle={"italic"}></Text>
    </VStack>
  );
}
