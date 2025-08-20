import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: #C7FFED;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #000000;
`;

export const ContainerTop = styled.View`
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    gap: 32px;
`;

export const ContainerBody = styled.View`
    /* height: auto; */
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerImage = styled.View`
    width: 150px;
    height: 150px; /* Ajusta conforme o conteúdo */
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

export const ImageStyled = styled.Image`
    width: 100%;
    height: 100%;
    margin-top: 8px;
    border-radius: 90px;
`;

export const ContainerCampos = styled.View`
    width: 100%;
    height: 60px;
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #023535;
    flex-direction: row;
    align-items: center;
    padding: 0 10px; /* Adiciona padding horizontal */
`;

export const ContainerPesoAltura = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 8px;
`;

export const ContainerBottom = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity`
    padding: 6px;
    borderWidth: 1px;
    borderRadius: 8px;
    borderColor: #023535;
    align-items: center;
    justify-content: center;
`;