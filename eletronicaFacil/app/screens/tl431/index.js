import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../../../assets/images/logo-eletronica-facil.png'
import tl from '../../../assets/images/tl431.jpg'
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
    Resp,
    Cor,
    Cor1,
    Cor2,
    Cor3,
    Cor4,
    AreaVertical,
    AreaResp1
} from "../styles"

import { codigoDeCores } from '../../utils/functions/codigoDeCores';
import { formataValorResistor } from '../../utils/functions/formataValorResistor';
import { calcularTL } from '../../utils/functions/calcularTl';


export default function Page() {
    const router = useRouter();
    const [v, setV] = useState(0.0);
    const [r1, setR1] = useState(0.0);
    const [r2, setR2] = useState(0.0);
    const [fontLoaded, setFontLoaded] = useState(false);
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
        let resultado = calcularTL(v, r1, r2)
        setResposta(resultado)
    }

    function atualizar() {
        setV(0.0)
        setR1(0.0)
        setR2(0.0)
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
            <Description>Selecione as Cores para descobrir o valor do resistor</Description>
            <Line />

            <Body>
                <AreaHorizon>
                    <Image
                        style={{ width: '50%', height: 200, alignSelf: 'center' }}
                        source={tl}
                        placeholder={'placeholder'}
                        contentFit="cover"
                        transition={1000}
                    />
                    <AreaVertical>
                        <InputOhm
                            value={v}
                            onChangeText={setV}
                            placeholder="V"
                            placeholderTextColor="#C3C3C3"
                            keyboardType='numeric' />
                        <InputOhm
                            value={r1}
                            onChangeText={setR1}
                            placeholder="R1"
                            placeholderTextColor="#C3C3C3"
                            keyboardType='numeric' />
                        <InputOhm
                            value={r2}
                            onChangeText={setR2}
                            placeholder="R2"
                            placeholderTextColor="#C3C3C3"
                            keyboardType='numeric' />
                    </AreaVertical>

                </AreaHorizon>
                <AreaBtn>
                    <BtnType
                        height="45px"
                        onPress={calcular}>
                        <BtnText>Calcular</BtnText>
                    </BtnType>
                </AreaBtn>
                <Line />
                <AreaHorizon>
                    <AreaResp1>
                        <ScrollView>
                            <Resp>{resposta}</Resp>
                        </ScrollView>
                    </AreaResp1>
                    <AreaBtn>
                        <BtnType
                            onPress={atualizar}
                            width="54px"
                            height="60px"
                            color="#F2F2F2">
                            <Ionicons name='refresh-circle' size={35} color="#333333" />
                        </BtnType>
                    </AreaBtn>
                </AreaHorizon>

            </Body>
            <Line />
        </Container>
    );
}