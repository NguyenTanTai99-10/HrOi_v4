import React from 'react'
import { View, Text , TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next';


const Test2 = ({navigation}) => {
    const { t ,i18n } = useTranslation();
    return (
        <View style={{justifyContent:'center' , alignItems:'center' , flex:1}}>
            <Text>{t('Bye World')}</Text>
            <TouchableOpacity
            onPress={()=>{
                navigation.goBack()
            }}
            
            >
                <Text>
                    abc
                </Text>

            </TouchableOpacity>
            
        </View>
    )
}

export default Test2
