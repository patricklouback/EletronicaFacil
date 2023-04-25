import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../assets/images/logo-eletronica-facil.png'
import { AreaBtn, AreaTitleIcon, Body, BtnText, BtnType, Container, Description, Line, Title } from "./styles"


export default function Page() {
  const router = useRouter();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('../assets/fonts/Montserrat-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Container>
       <Image
       style={{width: 200, height: 200, alignSelf: 'center'}}
       source={logo}
       placeholder={'placeholder'}
       contentFit="cover"
       transition={1000}
      />
      <Description>Selecione o tipo de ajuda que deseja:</Description>
      <Line />

      <Body>
        <AreaBtn>
          <BtnType onPress={() => router.push("./screens/leiDeOhm")}>
            <BtnText>Lei</BtnText>
            <BtnText>de Ohm</BtnText>
          </BtnType>
          <BtnType color="#69BFAF" onPress={() => router.push("./screens/codCoresRes")} >
            <BtnText>Código de</BtnText>
            <BtnText>cores - Res</BtnText>
          </BtnType>
        </AreaBtn>

        <AreaBtn>
          <BtnType color="#69BFAF" >
            <BtnText>TL 431</BtnText>
          </BtnType>
          <BtnType>
            <BtnText>Calcular</BtnText>
            <BtnText>Req</BtnText>
          </BtnType>
        </AreaBtn>

      </Body>
      <Line />
    </Container>
  );
}