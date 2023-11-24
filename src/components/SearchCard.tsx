import { HStack, Text } from "native-base";

import { CreateSearchFormDataProps } from "@screens/CreateSearch";

export function SearchCard({ name }: CreateSearchFormDataProps) {
  return (
    <HStack w={"100%"} h={160} bg={"green.500"} mb={4}>
      <Text>{name}</Text>
    </HStack>
  );
}
