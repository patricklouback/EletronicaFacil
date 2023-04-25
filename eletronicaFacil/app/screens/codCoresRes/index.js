import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../../../assets/images/logo-eletronica-facil.png'
import resistor from '../../../assets/images/resistor.jpg'
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
    Cor4
} from "../styles"

import { calcularLeiDeOhm } from '../../utils/functions/calculaLeiDeOhm';


export default function Page() {
    const router = useRouter();
    const [cor1, setCor1] = useState('#FDCA01');
    const [cor2, setCor2] = useState('#9F0099');
    const [cor3, setCor3] = useState('#F44800');
    const [cor4, setCor4] = useState('#C78402');
    const [v1, setV1] = useState(4);
    const [v2, setV2] = useState(7);
    const [v3, setV3] = useState(2);
    const [v4, setV4] = useState(1);
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

    useEffect(()=>{
        setResposta(v1)
    },[v1, v2, v3, v4])


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
                        style={{ width: '100%', height: 200, alignSelf: 'center' }}
                        source={resistor}
                        placeholder={'placeholder'}
                        contentFit="cover"
                        transition={1000}
                    />
                    <Cor1 color={cor1}/>
                    <Cor2 color={cor2}/>
                    <Cor3 color={cor3}/>
                    <Cor4 color={cor4}/>
                </AreaHorizon>
                
                <AreaHorizon>

                    <Picker
                        style={{ backgroundColor: cor1, color: "#FFF", width: "14%", }}
                        itemStyle={{ backgroundColor: "#8257E5", color: "#FFF" }}
                        selectedValue={cor1}
                        onValueChange={(itemValue, itemIndex) => {
                            setV1(itemIndex)
                            setCor1(itemValue)}}
                    >
                        <Picker.Item label="Preto" value="#000000" />
                        <Picker.Item label="Marrom" value="#C78402" />
                        <Picker.Item label="Vermelho" value="#F44800" />
                        <Picker.Item label="Laranja" value="#FF9900" />
                        <Picker.Item label="Amarelo" value="#FDCA01" />
                        <Picker.Item label="Verde" value="#00FF00" />
                        <Picker.Item label="Azul" value="#4A86E8" />
                        <Picker.Item label="Roxo" value="#9F0099" />
                        <Picker.Item label="Cinza" value="#CCCCCC" />
                        <Picker.Item label="Branco" value="#F2F2F2" />
                    </Picker>

                    <Picker
                        style={{ backgroundColor: cor2, color: "#FFF", width: "14%", }}
                        itemStyle={{ backgroundColor: "#8257E5", color: "#FFF" }}
                        selectedValue={cor2}
                        onValueChange={(itemValue, itemIndex) => {
                            setV2(itemIndex)
                            setCor2(itemValue)}}
                    >
                        <Picker.Item label="Preto" value="#000000" />
                        <Picker.Item label="Marrom" value="#C78402" />
                        <Picker.Item label="Vermelho" value="#F44800" />
                        <Picker.Item label="Laranja" value="#FF9900" />
                        <Picker.Item label="Amarelo" value="#FDCA01" />
                        <Picker.Item label="Verde" value="#00FF00" />
                        <Picker.Item label="Azul" value="#4A86E8" />
                        <Picker.Item label="Roxo" value="#9F0099" />
                        <Picker.Item label="Cinza" value="#CCCCCC" />
                        <Picker.Item label="Branco" value="#F2F2F2" />
                    </Picker>

                    <Picker
                        style={{ backgroundColor: cor3, color: "#FFF", width: "14%", }}
                        itemStyle={{ backgroundColor: "#8257E5", color: "#FFF" }}
                        selectedValue={cor3}
                        onValueChange={(itemValue, itemIndex) => {
                            setV3(itemIndex)
                            setCor3(itemValue)}}
                    >
                        <Picker.Item label="Preto" value="#000000" />
                        <Picker.Item label="Marrom" value="#C78402" />
                        <Picker.Item label="Vermelho" value="#F44800" />
                        <Picker.Item label="Laranja" value="#FF9900" />
                        <Picker.Item label="Amarelo" value="#FDCA01" />
                        <Picker.Item label="Verde" value="#00FF00" />
                        <Picker.Item label="Azul" value="#4A86E8" />
                        <Picker.Item label="Roxo" value="#9F0099" />
                        <Picker.Item label="Cinza" value="#CCCCCC" />
                        <Picker.Item label="Branco" value="#F2F2F2" />
                    </Picker>

                    <Picker
                        style={{ backgroundColor: cor4, color: "#FFF", width: "14%", }}
                        itemStyle={{ backgroundColor: "#8257E5", color: "#FFF" }}
                        selectedValue={cor4}
                        onValueChange={(itemValue, itemIndex) => {
                            setV4(itemIndex)
                            setCor4(itemValue)}}
                    >
                        <Picker.Item label="Preto" value="#000000" />
                        <Picker.Item label="Marrom" value="#C78402" />
                        <Picker.Item label="Vermelho" value="#F44800" />
                        <Picker.Item label="Laranja" value="#FF9900" />
                        <Picker.Item label="Amarelo" value="#FDCA01" />
                        <Picker.Item label="Verde" value="#00FF00" />
                        <Picker.Item label="Azul" value="#4A86E8" />
                        <Picker.Item label="Roxo" value="#9F0099" />
                        <Picker.Item label="Cinza" value="#CCCCCC" />
                        <Picker.Item label="Branco" value="#F2F2F2" />
                    </Picker>
                </AreaHorizon>
                <Line />

                <AreaResp>
                    <ScrollView>
                        <Resp>{resposta}</Resp>
                    </ScrollView>
                </AreaResp>

            </Body>
            <Line />
        </Container>
    );
}