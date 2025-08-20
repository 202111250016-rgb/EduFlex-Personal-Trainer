import { Container, Text, ContainerTop, ContainerBody, ContainerBottom, ContainerPesoAltura, ContainerDropdown, Icon, ErrorText } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EditText } from '../../components/editText';
import { useState } from 'react';
import { UploadImage } from '../../components/cardUploadImagem';
import { Button } from '../../components/button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { maskTelefone, maskData } from '../../utils/masks';
import { ref, set } from "firebase/database";
import { database } from "../../services/firebaseConfig";
import { Aluno } from '../../types/types';
import { v4 as uuidv4 } from 'uuid'
import 'react-native-get-random-values';
import Alunos from "../alunos";
import { View, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


export default function CadastrarAluno({ navigation }: any) {

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Masculino', value: 'masculino' },
        { label: 'Feminino', value: 'feminino' },
        { label: 'Outro', value: 'outro' },
    ]);

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
        contato: Yup.string().required('Contato é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        sexo: Yup.string().required('Sexo é obrigatório'),
    });

    const handleCadastrar = async (values: any) => {
        const result: Aluno = {
            id: uuidv4(),
            nome: values.nome,
            contato: values.contato,
            email: values.email,
            dataNascimento: values.dataNascimento,
            peso: values.peso,
            altura: values.altura,
            sexo: values.sexo,
            imagem: values.imagem
        }
        await set(ref(database, `/alunos/${result.id}`), result);
        alert('Aluno cadastrado com sucesso');
        navigation.goBack();
        // console.log(result);
    };

    return (
        <ScrollView>
            <Container>
                <ContainerTop>
                    <Icon onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </Icon>
                    <Text style={{ fontSize: 22 }}>Lista de alunos</Text>
                </ContainerTop>

                <Formik
                    initialValues={{
                        nome: '',
                        contato: '',
                        email: '',
                        dataNascimento: '',
                        peso: '',
                        altura: '',
                        sexo: '',
                        imagem: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleCadastrar(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                        <>
                            <ContainerBody>
                                <EditText
                                    text="Nome"
                                    icone="none"
                                    placeholder="Nome"
                                    value={values.nome}
                                    onChangeText={handleChange('nome')}
                                    onBlur={handleBlur('nome')}
                                />
                                {errors.nome && touched.nome && <ErrorText>{errors.nome}</ErrorText>}
                                <EditText
                                    text="Contato"
                                    icone="none"
                                    placeholder="Digite seu contato"
                                    value={maskTelefone(values.contato)}
                                    onChangeText={(text: string) => setFieldValue('contato', maskTelefone(text))}
                                    onBlur={handleBlur('contato')}
                                    keyboardType="numeric"
                                />
                                {errors.contato && touched.contato && <ErrorText>{errors.contato}</ErrorText>}
                                <EditText
                                    text="Email"
                                    icone="email"
                                    placeholder="Digite seu email"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    keyboardType="email-address"
                                />
                                {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                                <EditText
                                    text="Data de nascimento"
                                    icone="none"
                                    placeholder="dd/mm/aaaa"
                                    value={maskData(values.dataNascimento)}
                                    onChangeText={(text: string) => setFieldValue('dataNascimento', maskData(text))}
                                    onBlur={handleBlur('dataNascimento')}
                                    keyboardType="numeric"
                                />
                                {errors.dataNascimento && touched.dataNascimento && <ErrorText>{errors.dataNascimento}</ErrorText>}

                                <ContainerPesoAltura>
                                    <View style={{ flex: 1 }}>
                                        <EditText
                                            text="Peso"
                                            icone="none"
                                            placeholder="0kg"
                                            value={values.peso}
                                            onChangeText={handleChange('peso')}
                                            onBlur={handleBlur('peso')}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    {errors.peso && touched.peso && <ErrorText>{errors.peso}</ErrorText>}

                                    <View style={{ flex: 1 }}>
                                        <EditText
                                            text="Altura"
                                            icone="none"
                                            placeholder="0cm"
                                            value={values.altura}
                                            onChangeText={handleChange('altura')}
                                            onBlur={handleBlur('altura')}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    {errors.altura && touched.altura && <ErrorText>{errors.altura}</ErrorText>}

                                </ContainerPesoAltura>

                                <ContainerDropdown>
                                    <Text>Sexo</Text>
                                    <DropDownPicker
                                        open={open}
                                        value={values.sexo}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={(cb) => setFieldValue('sexo', cb(values.sexo))}
                                        setItems={setItems}
                                        placeholder="Selecione o sexo"
                                        dropDownDirection="BOTTOM"
                                        listMode="SCROLLVIEW" 

                                        // estilo do campo fechado
                                        style={{
                                            borderWidth: 2,
                                            borderRadius: 12,
                                            borderColor: '#023535',
                                            backgroundColor: '#C7FFED',
                                        }}

                                        // estilo do texto selecionado
                                        textStyle={{
                                            fontSize: 16,
                                            color: '#000000', // cor do valor selecionado
                                        }}

                                        // estilo do placeholder
                                        placeholderStyle={{
                                            color: '#000000',
                                            fontSize: 16,
                                        }}

                                        // estilo da lista quando abre
                                        dropDownContainerStyle={{
                                            borderWidth: 2,
                                            borderColor: '#023535',
                                            backgroundColor: '#C7FFED',
                                        }}

                                        // evita ficar atrás de outros elementos
                                        containerStyle={{
                                            zIndex: 1000,
                                        }}
                                    />


                                    {errors.sexo && touched.sexo && <ErrorText>{errors.sexo}</ErrorText>}
                                </ContainerDropdown>
                                <UploadImage
                                    onSelectImage={(img) => setFieldValue('imagem', img)}
                                />
                            </ContainerBody>
                            <ContainerBottom>
                                <Button text="Cadastrar Aluno" onPress={handleSubmit} />
                            </ContainerBottom>
                        </>
                    )}
                </Formik>
            </Container>
        </ScrollView>
    );
}