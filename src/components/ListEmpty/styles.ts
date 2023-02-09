import styled, { css } from "styled-components/native";

import { FilePlus } from "phosphor-react-native";

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Icon = styled(FilePlus).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_300,
}))`
  margin-bottom: 10px;
`;
