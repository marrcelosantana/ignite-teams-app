import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export const InputContainer = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
