import { isLoading } from "expo-font";
import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  Spinner,
} from "native-base";

type Props = IButtonProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <NativeBaseButton
      w={"full"}
      h={16}
      bg={"green.700"}
      rounded={"sm"}
      _pressed={{ bg: "green.500" }}
      {...rest}
    >
      <Text color={"white"} fontFamily={"heading"} fontSize={"sm"}>
        {isLoading ? <Spinner color={"white"} /> : title}
      </Text>
    </NativeBaseButton>
  );
}
