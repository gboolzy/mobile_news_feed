import React from "react";
import { StyleSheet, Text, TextInput, View, TextInputProps } from "react-native";

interface UserTextInputProps extends TextInputProps {
  label?: string;
  borderRadius?: number;
  marginBottom?: number;

}

const UserTextInput: React.FC<UserTextInputProps> = ({
  label,
  placeholder = "Enter text",
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType,
  borderRadius,
  marginBottom = 20,
  style,
  ...rest
}) => {
  return (
    <View style={{ marginBottom: marginBottom }}>
     {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#475569"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input, style, borderRadius == null ? { borderRadius: borderRadius }: {}]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    backgroundColor: "#F3F6F8",
    height: 48,
    width: "100%",
    paddingLeft: 20,
    fontFamily: "Satoshi-Medium",
  },
  label: {
    color: "#071A27",
    marginLeft: 5,
    marginBottom: 8,
    fontFamily: "Satoshi-Medium",
    fontSize: 14,
  },
});

export default UserTextInput;

