import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #C7FFED;
  border-radius: 8px;
  border: #023535 2px;
  /* padding: 8px; */
  margin-left: 16px;
  margin-right: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000;
  padding-left: 8px;
`;
