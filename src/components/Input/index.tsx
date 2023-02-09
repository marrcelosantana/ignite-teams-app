import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const theme = useTheme();

  return (
    <InputContainer placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />
  );
}
