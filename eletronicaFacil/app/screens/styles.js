import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    padding: 80px 26px;
    background: #FFF;
`;

export const Title = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 58px;
    color: #333333;
`;

export const Description = styled.Text`
    margin-top: 15px;
    margin-left: 4px;
    margin-bottom: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #3D3D3D;
    text-align: justify;
`;

export const Line = styled.View`
    border: 1px solid #B5B5B5;
    margin: 20px 0px;
`;

export const Body = styled.View`
    width: 358px;
    height: 380px;
    justify-content: space-around;
    
`;

export const AreaBtn = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 3px 0px;
`;

export const AreaBtn2 = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0px;
`;

export const BtnType = styled.TouchableOpacity`
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '110px'};
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color || '#626473'};
    border-radius: 8px;
    elevation: 5;
    
`;

export const BtnText = styled.Text`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: ${(props) => props.color || '#FFFFFF'};
`;

export const AreaHorizon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Cor1 = styled.TouchableOpacity`
    display: flex;
    position: absolute;
    top: 60px;
    left: 98px;
    width: 22px;
    height: 80px;
    background-color: ${(props) => props.color || '#FDCA01'};
    border-radius: 5px;
`;

export const Cor2 = styled.TouchableOpacity`
    display: flex;
    position: absolute;
    top: 65px;
    left: 130px;
    width: 22px;
    height: 70px;
    background-color: ${(props) => props.color || '#9F0099'};
    border-radius: 5px;
`;

export const Cor3 = styled.TouchableOpacity`
    display: flex;
    position: absolute;
    top: 65px;
    left: 160px;
    width: 22px;
    height: 70px;
    background-color: ${(props) => props.color || '#F44800'};
    border-radius: 5px;
`;

export const Cor4 = styled.TouchableOpacity`
    display: flex;
    position: absolute;
    top: 60px;
    left: 218px;
    width: 22px;
    height: 80px;
    background-color: ${(props) => props.color || '#C78402'};
    border-radius: 5px;
`;

export const InputOhm = styled.TextInput`
    width: 90px;
    height: 70px;
    background: rgba(105, 191, 175, 0.21);
    border-radius: 8px;
    padding: 10px;
    margin: 5px 0px;
    font-size: 30px;
    text-align: center;
`;

export const AreaResp = styled.View`
    width: 100%;
    height: 95px;
    background: rgba(105, 179, 71, 0.21);
    border-radius: 8px;
    padding: 15px;
    margin: 5px 0px;
    justify-content: center;
    align-items: center;
`;

export const Resp = styled.Text`
    color: #4A4A4A;
    font-size: 32px;
    padding-top: 10px
`;