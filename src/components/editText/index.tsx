import React, { useState } from 'react';
import { Container, TextTitulo, ContainerInput, Input, Icon, IconNone } from './styles';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';

export function EditText({ text, icone, isPassword = false, placeholder, height = 60, marginBottom = 0, style = {}, ...rest }: any) {
  const [isPasswordVisible, setPasswordVisible] = useState(!isPassword);

  return (
    <Container marginBottom={marginBottom}>
      <TextTitulo>{text}</TextTitulo>
      <ContainerInput height={height}>
        <Input
          placeholder={placeholder || text}
          placeholderTextColor="#000000"
          secureTextEntry={isPassword && !isPasswordVisible} // Controla a visibilidade para senha
          {...rest} // Permite passar outras props para o TextInput
        />
        {icone !== 'none' ? (
          <Icon onPress={() => isPassword && setPasswordVisible(!isPasswordVisible)}>
            {isPassword ? (
              <Feather
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                size={24}
                color="black"
              />
            ) : (
              <Fontisto name={icone} size={24} color="black" />
            )}
          </Icon>
        ) : (
          <IconNone />
        )}
      </ContainerInput>
    </Container>
  );
}