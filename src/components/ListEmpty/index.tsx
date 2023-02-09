import { Icon, ListEmptyContainer, Message } from "./styles";

interface ListEmptyProps {
  message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <ListEmptyContainer>
      <Icon />
      <Message>{message}</Message>
    </ListEmptyContainer>
  );
}
