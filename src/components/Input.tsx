import { forwardRef, Ref } from "react";

import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

import { TextInput } from "react-native";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export const Input = forwardRef(
  (
    { errorMessage = null, isInvalid, ...rest }: Props,
    ref: Ref<TextInput> | null
  ) => {
    const invalid = !!errorMessage || isInvalid;

    return (
      <FormControl isInvalid={invalid} mb={4}>
        <NativeBaseInput
          bg={"gray.700"}
          h={16}
          px={4}
          borderWidth={0}
          fontSize={"md"}
          color={"white"}
          fontFamily={"body"}
          placeholderTextColor={"gray.300"}
          isInvalid={invalid}
          _invalid={{
            borderWidth: 1,
            borderColor: "red.500",
          }}
          _focus={{
            bg: "gray.700",
            borderWidth: 1,
            borderColor: "green.500",
          }}
          ref={ref as React.RefObject<TextInput>}
          {...rest}
        />

        <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
    );
  }
);
