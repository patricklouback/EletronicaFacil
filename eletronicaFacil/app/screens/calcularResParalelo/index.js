import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { TouchableOpacity, ScrollView } from 'react-native';
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
    Resp,
    AreaResp2,
    Input
} from "../styles"

import resistoresPrecisao from "../../utils/data/resistoresPrecisao";
import resistoresComuns from "../../utils/data/resistoresComuns";
import {formataValorResistor} from "../../utils/functions/formataValorResistor"


export default function Page() {
    const router = useRouter();
    const [rEq, setReq] = useState('');
    const [R1, setR1] = useState(0.0);
    const [R2, setR2] = useState(0.0);
    const [precisao, setPrecisao] = useState(null)
    const [fontLoaded, setFontLoaded] = useState(false);
    const [resposta, setResposta] = useState('Resposta');

    const muitoPreciso = [0.9999, 1.0001];
    const Preciso = [0.999, 1.001];
    const poucoPreciso = [0.99, 1.01];

    let req = rEq
    let r1
    let r2
    let temp
    let diferenca
    let pares = []


    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Inter': require('../../../assets/fonts/Montserrat-Regular.ttf'),
            });
            setFontLoaded(true);
        }
        loadFonts();

    }, []);

    useEffect(() => {
        let r1 = formataValorResistor(R1)
        let r2 = formataValorResistor(R2)
        setResposta('R1 = ' + r1 + '\nR2 = ' + r2)
    }, [R1, R2])


    if (!fontLoaded) {
        return null;
    }

    function clique() {
        if (rEq === '') {
            console.log('vazio')
        } else if (rEq.includes(',')) {
            setReq(rEq.replace(',', '.'))
        } else {
            calculaMelhorResistor();
        }
    }

    function calculaMelhorResistor() {
        // calculo
        // 1/r1  +  1/r2 = 1/req
        // 1/r1 = 1/req - 1/r2

        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > muitoPreciso[0] && diferenca < muitoPreciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            diminuirPrecisao();
        } else {
            setPrecisao(true);
            escolheOPar();
        }

    }

    function diminuirPrecisao() {
        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > Preciso[0] && diferenca < Preciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            diminuirMaisPrecisao()
        } else {
            setPrecisao(true);
            escolheOPar();
        }
    }

    function diminuirMaisPrecisao() {
        resistoresPrecisao.map(i => {
            r1 = i
            resistoresComuns.map(j => {
                r2 = j

                temp = 1 / (1 / r1 + 1 / r2)
                diferenca = req / temp

                if (diferenca > poucoPreciso[0] && diferenca < poucoPreciso[1]) {
                    pares.push([r1, r2])
                }
            })
        })

        if (pares.length === 0) {
            console.log('Não encontrou pares')
        } else {
            setPrecisao(false);
            escolheOPar();
        }
    }

    function escolheOPar() {

        let menor = 100

        pares.map(i => {

            const _r1 = i[0];
            const _r2 = i[1];

            let temporario = 1 / (1 / _r1 + 1 / _r2)
            let dif = req / temporario

            if (menor >= dif) {
                menor = dif
                setR1(_r1)
                setR2(_r2)
            }
        })
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
            <Description>Insira o valor da resistência equivalente</Description>
            <Line />

            <Body>
                <AreaHorizon>

                    <Input
                        value={rEq}
                        onChangeText={setReq}
                        placeholder="Req"
                        placeholderTextColor="#C3C3C3"
                        keyboardType='numeric' />

                    <AreaBtn>
                        <BtnType
                            height="45px"
                            onPress={clique}>
                            <BtnText>Calcular</BtnText>
                        </BtnType>
                    </AreaBtn>
                </AreaHorizon>
                <Line />
                <AreaHorizon>
                    <AreaResp2
                    
                    color={precisao ? "#69b34736" : precisao == null ? '#b3b3b336' : '#ff000036'}
                    >
                        <ScrollView>
                            <Resp>{resposta}</Resp>
                        </ScrollView>
                    </AreaResp2>
                </AreaHorizon>

            </Body>
            <Line />
        </Container>
    );
}