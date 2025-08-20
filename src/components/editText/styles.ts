import styled from "styled-components/native";

interface ContainerProps {
  marginBottom?: number;
}

interface ContainerInputProps {
  height?: number;
}

export const Container = styled.View<ContainerProps>`
  /* padding-left: 16px;
  padding-right: 16px; */
  margin-top: 16px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${({ marginBottom }) => marginBottom}px; /* Define o espaçamento inferior */
`;

export const TextTitulo = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ContainerInput = styled.View<ContainerInputProps>`
  width: 100%;
  height: ${({ height }) => height}px; /* Define a altura customizável */
  border-radius: 10px;
  border: 2px solid #023535;
  flex-direction: row;
  align-items: center;
  padding: 0 10px; /* Adiciona padding horizontal */
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%; /* Ajusta a altura ao valor de ContainerInput */
  font-size: 16px;
  padding-left: 8px; /* Ajuste no padding interno */
`;

export const Icon = styled.TouchableOpacity`
  width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const IconNone = styled.TouchableOpacity`
  
`;
