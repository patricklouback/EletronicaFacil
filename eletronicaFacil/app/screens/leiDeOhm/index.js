import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { TouchableOpacity, View, ActivityIndicator, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../../../assets/images/logo-eletronica-facil.png'
import {
  AreaBtn,
  InputOhm,
  Body,
  BtnText,
  BtnType,
  Container,
  Description,
  Line,
  AreaHorizon,
  Title,
  AreaResp,
  AreaBtn2,
  Resp
} from "../styles"

import { calcularLeiDeOhm } from '../../utils/functions/calculaLeiDeOhm';


export default function Page() {
  const router = useRouter();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [v, setV] = useState('');
  const [r, setR] = useState('');
  const [i, setI] = useState('');
  const [loading, setLoading] = useState(false);
  const [resposta, setResposta] = useState('Resposta');

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Inter': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);
  
  if (!fontLoaded) {
    return null;
  }

  function calcular() {
    let resultado = calcularLeiDeOhm(v, r, i)
    setResposta(resultado)
  }

  function atualizar() {
    setV('')
    setR('')
    setI('')
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => router.push('../')}>
        <Ionicons name='arrow-back' size={35} color="#333333" />
      </TouchableOpacity>
      <Image
        style={{ width: 130, height: 130, alignSelf: 'center' }}
        source={logo}
        placeholder={'placeholder'}
        contentFit="cover"
        transition={1000}
      />
      <Description>A Lei de Ohm afirma que a intensidade da corrente elétrica em um condutor é proporcional à diferença de potencial elétrico aplicada e inversamente proporcional à sua resistência elétrica. Insira os dados para calcular.</Description>
      <Line />

      <Body>
        <AreaHorizon>
          <InputOhm
            value={v}
            onChangeText={setV}
            placeholder="V"
            placeholderTextColor="#C3C3C3"
            multiline={true} />
          <Title>=</Title>
          <InputOhm
            value={r}
            onChangeText={setR}
            placeholder="R"
            placeholderTextColor="#C3C3C3"
            multiline={true} />
          <Title>x</Title>
          <InputOhm
            value={i}
            onChangeText={setI}
            placeholder="I"
            placeholderTextColor="#C3C3C3"
            multiline={true} />
        </AreaHorizon>
        <AreaBtn>
          <BtnType
            height="45px"
            onPress={calcular}
            disabled={loading}>
            {loading && <ActivityIndicator size="large" color="#DDD" />}
            {!loading && <BtnText>Calcular</BtnText>}
          </BtnType>
        </AreaBtn>
        <Line />

        <AreaResp>
          <ScrollView>
            <Resp>{resposta}</Resp>
          </ScrollView>
        </AreaResp>
        <AreaBtn>
          <BtnType
            disabled={loading}
            onPress={atualizar}
            width="54px"
            height="60px"
            color="#F2F2F2">
            <Ionicons name='refresh-circle' size={35} color="#333333" />
          </BtnType>
        </AreaBtn>
      </Body>
      <Line />
    </Container>
  );
}