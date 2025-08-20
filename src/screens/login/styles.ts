import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 16px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #C7FFED;
`;

export const ContainerLogo = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerBody = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #000000;
`;

export const ImageStyled = styled.Image`
    width: 200px;
    height: 200px;
    margin-bottom: 32px;
    border-radius: 90px;
`;