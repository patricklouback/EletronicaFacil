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
`;

export const Line = styled.View`
    border: 1px solid #B5B5B5;
    margin: 20px 0px;
`;

export const Body = styled.View`
    width: 358px;
    height: 339px;
    justify-content: space-around;
    
`;

export const AreaBtn = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const BtnType = styled.TouchableOpacity`
    width: ${(props) => props.width || '150px'};
    height: 110px;
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

export const AreaTitleIcon = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;