import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    height: auto;
    width: 100%;
    margin-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #D8FFDB;
    border-radius: 16px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5; /* Para Android */
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #000000;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Icon = styled.TouchableOpacity`

`;