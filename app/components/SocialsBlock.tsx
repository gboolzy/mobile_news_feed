import React, {ReactNode } from 'react'
import { Text, View } from 'react-native'
interface SocialsBlockProps {
    text:string,
    children:ReactNode

}

const SocialsBlock: React.FC<SocialsBlockProps> = ({
text,
children
}) => {
    return (
        <View style={{ height: 48, backgroundColor: '#F3F6F8', paddingVertical: 12, flex: 1, alignContent: 'center', flexDirection: 'row', gap: 5, borderRadius: 8, justifyContent: 'center' }}>
            {children}
            <Text style={{fontFamily:'Satoshi-Medium', fontSize:16, color:'#071A27'}}>{text} </Text>
        </View>
    )
}

export default SocialsBlock