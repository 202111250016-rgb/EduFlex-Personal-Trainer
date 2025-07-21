// styles.js para o botão
import styled from "styled-components/native";

interface ContainerProps {
  radius?: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  height: 60px;
  width: 100%;
  background-color: #000000;
  padding: 12px;
  border-radius: ${(props) => props.radius || 16}px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;
