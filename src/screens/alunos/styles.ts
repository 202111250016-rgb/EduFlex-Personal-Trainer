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
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
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

export const ContainerBottom = styled.View`
    position: absolute;
    bottom: 50px;
    right: 30px;
    z-index: 10;
    elevation: 10;
`;

export const Icon = styled.TouchableOpacity`
    padding: 6px;
    borderWidth: 1px;
    borderRadius: 8px;
    borderColor: #015958;
    align-items: center;
    justify-content: center;
`;