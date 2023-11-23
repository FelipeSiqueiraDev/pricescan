import { isLoading } from "expo-font";
import {
  Button as NativeBaseButton,
  IButtonProps,
  Text,
  Spinner,
} from "native-base";

type ButtonProps = IButtonProps & {
  title: string;
  isLoading?: boolean;
  fontSize?: string;
  color?: string;
  pressedColor?: string;
};

export function Button({
  title,
  isLoading = false,
  fontSize = "2xl",
  color = "green.700",
  pressedColor = "green.500",
  ...rest
}: ButtonProps) {
  return (
    <NativeBaseButton
      w={"full"}
      h={16}
      bg={color}
      rounded={"sm"}
      _pressed={{ bg: pressedColor }}
      {...rest}
    >
      <Text color={"white"} fontFamily={"heading"} fontSize={fontSize}>
        {isLoading ? <Spinner color={"white"} /> : title}
      </Text>
    </NativeBaseButton>
  );
}
