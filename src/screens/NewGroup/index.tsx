import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { AppError } from "@utils/AppError";
import { groupCreate } from "@storage/group/groupCreate";

import { NewGroupContent, NewGroupContainer, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }
      await groupCreate(group);
      navigation.navigate("players", { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        console.log(error);
      }
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
        <Button title="Criar" onPress={handleCreateNewGroup} />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
