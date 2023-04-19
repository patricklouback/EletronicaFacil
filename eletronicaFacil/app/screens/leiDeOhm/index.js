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


export default function Page() {
  const router = useRouter();

  const [fontLoaded, setFontLoaded] = useState(false);
  const [v, setV] = useState('');
  const [r, setR] = useState('');
  const [i, setI] = useState('');
  const [voltz, setVoltz] = useState(0.0);
  const [ohm, setOhm] = useState(0.0);
  const [amper, setAmper] = useState(0.0);
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
  
  useEffect(()=>{
    
    if(!NaN) {
      setI(toString(amper))
    }
    

  },[amper])

  if (!fontLoaded) {
    return null;
  }


  function calcular() {

    if (v == '' && r != '' && i != '') {
      console.log('primeiro if')

      if (!isNaN(parseFloat(r))){
        ohm = parseFloat(r)
      } else {
        setR('')
      }

      if (!isNaN(parseFloat(i))){
        amper = parseFloat(i)
      } else {
        setI('')
      }

      voltz = ohm * amper
      setV(voltz)

    } else if (v != '' && r == '' && i != '') {

      console.log('segundo if')

      if (!isNaN(parseFloat(v))){
        ohm = parseFloat(v)
      } else {
        setV('')
      }

      if (!isNaN(parseFloat(i))){
        amper = parseFloat(i)
      } else {
        setI('')
      }

      ohm = voltz / amper
      setR(ohm)

    } else if (v != '' && r != '' && i == '') {

      console.log('terceiro if')

      if (!isNaN(parseFloat(v))){
        setVoltz(parseFloat(v))
        console.log('v = ', voltz)
      } else {
        setV('')
      }

      if (!isNaN(parseFloat(r))){
        setOhm(parseFloat(r))
        console.log('r = ', ohm)
      } else {
        setR('')
      }

      setAmper(voltz / ohm)
      console.log('amper = ', amper)

    } else {

      console.log('ultimo else')

      setV('')
      setR('')
      setI('')

    }
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
            onPress={()=>{}}
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