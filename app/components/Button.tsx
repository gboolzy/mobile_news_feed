import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text, TextProps } from 'react-native'

import ArrowRight from '../../assets/icons/arrow_right.svg';
import { COLORS, FONT_FAMILY } from '../utils/AppConstants';
interface ButtonProps extends PressableProps{
    value:string,
    width?:any,
    height?:any
}
export const Button: React.FC<ButtonProps> = ({
    value,
    onPress,
    width=148,
    height=56,

}) => {
    return (
        <Pressable
            onPress={onPress }
            style={[styles.button, { width: width, height: height}]}
        >
            <Text style={styles.buttonText}>{value}</Text>
            <ArrowRight />
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.buttonColor,
        paddingVertical: 14,
        borderRadius: 18,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontFamily: FONT_FAMILY.medium,
        fontWeight: 500
    },
})

interface TextButtonProps extends TextProps {
    text: string
    color?: string,
    fontSize?: number
    fontFamily?: string,
    fontWeight?: any,

}

export const TextButton: React.FC<TextButtonProps> = ({
    text,
    onPress,
    color = "#071A27",
    fontSize = 16,
    fontFamily = 'Satoshi-Medium',
    fontWeight = 500


}) => {
    return (
        <Text onPress={onPress} style={{ color: color, fontSize: fontSize, fontFamily: fontFamily, fontWeight: fontWeight }}>{text}</Text>
    )
}

  