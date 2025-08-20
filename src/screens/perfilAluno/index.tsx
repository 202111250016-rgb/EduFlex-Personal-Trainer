import { Container, Text, ContainerTop, ContainerBody, ContainerBottom, Icon, ContainerCampos, ContainerPesoAltura, ContainerImage, ImageStyled } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect } from "react";
import { View } from "react-native";
import 'react-native-get-random-values';;

export default function PerfilAluno({ navigation, route }: any) {

    const { aluno } = route.params;
    const imageSource = typeof aluno?.imagem === 'string'
        ? { uri: `data:image/jpeg;base64,${aluno?.imagem}` }
        : aluno?.imagem;

    return (
        <Container>
            <ContainerTop>
                <Icon onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Icon>
                <Text style={{ fontSize: 22 }}>Perfil do aluno</Text>
            </ContainerTop>
            <ContainerBody>
                <ContainerImage>
                    {aluno?.imagem !== null ? (
                        <ImageStyled source={imageSource} />
                    ) : (
                        <ImageStyled source={require("../../../assets/perfil.png")} />
                    )}
                </ContainerImage>
                <Text style={{ marginBottom: 16, fontSize: 22 }}>{aluno?.nome}</Text>
                <ContainerCampos>
                    <Text>{aluno?.email}</Text>
                </ContainerCampos>
                <ContainerCampos>
                    <Text>{aluno?.contato}</Text>
                </ContainerCampos>
                <ContainerCampos>
                    <Text>{aluno?.dataNascimento}</Text>
                </ContainerCampos>
                <ContainerPesoAltura>
                    <View style={{ flex: 1 }}>
                        <ContainerCampos>
                            <Text>{`${aluno?.peso}Kg`}</Text>
                        </ContainerCampos>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ContainerCampos>
                            <Text>{`${aluno?.altura}Cm`}</Text>
                        </ContainerCampos>
                    </View>
                </ContainerPesoAltura>
                <ContainerCampos>
                    <Text>{aluno?.sexo}</Text>
                </ContainerCampos>

            </ContainerBody>
            <ContainerBottom>

            </ContainerBottom>
        </Container>
    );
}