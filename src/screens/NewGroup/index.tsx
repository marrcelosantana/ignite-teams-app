import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { NewGroupContent, NewGroupContainer, Icon } from "./styles";
import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group: group });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar novas pessoas"
        />

        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 12 }}
          onChangeText={(group) => setGroup(group)}
        />
        <Button title="Criar" onPress={handleNew} />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
