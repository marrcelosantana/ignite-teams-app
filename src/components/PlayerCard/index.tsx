import { ButtonIcon } from "@components/ButtonIcon";
import { Icon, Name, PlayerCardContainer } from "./styles";

type PlayerCardProps = {
  name: string;
  onRemove: (name: string) => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerCardContainer>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon
        icon="close"
        type="SECONDARY"
        onPress={() => onRemove(name)}
      />
    </PlayerCardContainer>
  );
}
