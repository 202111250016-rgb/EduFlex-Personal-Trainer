import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 250px; /* Ajusta conforme o conteúdo */
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    padding: 16px;
    background-color: #C7FFED;
    border-radius: 8px;
    shadow-color: #000;
    shadow-opacity: 1;
    shadow-radius: 1.41px;
    elevation: 4;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #000000;
`;

export const ImageContainer = styled.View`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`;

export const RemoveButton = styled.TouchableOpacity`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const UploadButton = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px dashed #023535;
`;

export const UploadButtonText = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight: bold;
`;

export const ImageStyled = styled.Image`
    width: 100%;
    height: 100%;
    margin-top: 8px;
    border-radius: 4px;
    resize-mode: cover; /*Faz a imagem cobrir o container*/
`;