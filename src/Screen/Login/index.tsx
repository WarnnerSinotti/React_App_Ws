import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  Portal,
  Provider,
  TextInput,
  HelperText,
} from "react-native-paper";
import { MyDivider } from "../../components/Divider";
import {
  Container,
  ContainerModal,
  Grid,
  Row,
  RowRight,
} from "../../components/Global";
import { Logo } from "../../components/Image";
import { MySubmit } from "../../components/Submit";
import { MyText, SubTitulo, TitleLogin, Titulo } from "../../components/Text";
import { MyTextInput } from "../../components/TextInput";
import { useNavigation } from "@react-navigation/native";
import { SocialButton } from "../../components/Buttons";
import { Alert } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { theme } from "../../core/theme";

const Acesso = async (
  email: any,
  password: any,
  navigation: any,
  setEmail,
  setPassword
) => {
  if (email == 1 && password == 1) {
    navigation.navigate("Menu");

    console.log("Acessou Menu");
  } else {
    Alert.alert("Usuário ou Senha Inválido");
  }
  setEmail("");
  setPassword("");
};

export default function Index(props: any) {
  const [email, setEmail] = React.useState("");
  const [emailForget, setEmailForget] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [eyed, setEyed] = React.useState(true);
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  const onSubmitRecuperarSenha = (data) => {
    Alert.alert("Enviado Recuperação de Senha em Seu E-mail");
    
    hideModal();
    reset();//Resetando os inputs

    console.log("Validar email antes de fechar");
    console.log(data);
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const schema = yup.object({
    emailForget: yup
      .string()
      .required("Não pode conter campo vazio")
      .email("Digite um e-mail válido"),
  });

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <TitleLogin> My Pet App </TitleLogin>
      <Row>
        <MyTextInput
          label="Email"
          value={email}
          onChangeText={(Email) => setEmail(Email)}
        />
      </Row>
      <Row>
        <MyTextInput
          label="Senha"
          value={password}
          secureTextEntry={eyed}
          right={
            <TextInput.Icon
              name="eye"
              color={"#fff"}
              onPress={VisualPassword}
            />
          }
          onChangeText={(Password) => setPassword(Password)}
        />
      </Row>
      <Row>
        <MySubmit
          icon="login"
          mode="contained"
          onPress={() =>
            Acesso(email, password, navigation, setEmail, setPassword)
          }
        >
          Entrar
        </MySubmit>
      </Row>
      <Row>
        <RowRight>
          <MyText onPress={showModal}>Esqueceu Senha?</MyText>
        </RowRight>
      </Row>
      <Row style={{ padding: 20 }}>
        <Grid>
          <SubTitulo>Acesse com seu favorito login social</SubTitulo>
        </Grid>
      </Row>
      <Row>
        <Grid>
          <SocialButton
            icon="google"
            color={"white"}
            size={30}
            onPress={() => console.log("google")}
          >
            Google
          </SocialButton>
        </Grid>
        <Grid>
          <SocialButton
            icon="facebook"
            color={"white"}
            size={30}
            onPress={() => console.log("facebook")}
          >
            Facebook
          </SocialButton>
        </Grid>
        <Grid>
          <SocialButton
            icon="apple"
            color={"white"}
            size={30}
            onPress={() => console.log("Apple")}
          >
            Apple
          </SocialButton>
        </Grid>
      </Row>
      <Row>
        <Grid>
          <MyDivider />
        </Grid>
        <Grid>
          <MyText>OU</MyText>
        </Grid>
        <Grid>
          <MyDivider />
        </Grid>
      </Row>

      <Row>
        <MySubmit
          icon="star"
          onPress={() => props.navigation.navigate("Cadastro")}
        >
          Cadastre-se
        </MySubmit>
      </Row>

      <Row style={{ padding: 14 }}>
        <Logo source={require("../../../assets/pet.gif")} />
      </Row>

      {/*MODAL DENTRO DE ESQUECEU SENHA*/}
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <ContainerModal>
              <Row>
                <Titulo>Recuperação de Senha</Titulo>
              </Row>
              <Row>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <MyTextInput
                      label="Email"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      error={errors.emailForget}
                      right={
                        errors.emailForget && (
                          <TextInput.Icon
                            name="alert-circle-outline"
                            color={theme.colors.iconButtonColor}
                          />
                        )
                      }
                    />
                  )}
                  name="emailForget"
                />
              </Row>
              <Row>
                {errors.emailForget && (
                  <Grid>
                    <HelperText type="error">
                      {errors.emailForget.message}
                    </HelperText>
                  </Grid>
                )}
              </Row>
              <Row>
                <Grid>
                  <MySubmit icon="send" onPress={handleSubmit(onSubmitRecuperarSenha)}>
                    Enviar
                  </MySubmit>
                </Grid>
              </Row>
            </ContainerModal>
          </Modal>
        </Portal>
      </Provider>
    </Container>
  );
}
