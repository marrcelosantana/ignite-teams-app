import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputContainer = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
