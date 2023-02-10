import { TouchableOpacityProps } from "react-native";

import { FilterContainer, Title, FilterStyleProps } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </FilterContainer>
  );
}
