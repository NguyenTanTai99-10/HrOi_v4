import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { withTranslation } from 'react-i18next';

class Test extends Component {
    render() {
        // const  t  = useTranslation();



        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>{this.props.t('Tên đăng nhập')}</Text>
                
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Test2')
                    }}
                >
                    <Text>
                        abc
                </Text>
                </TouchableOpacity>

            </View>

        )
    }
}
export default withTranslation()(Test);


// import React from 'react'
// import { View, Text , TouchableOpacity } from 'react-native'
// import { useTranslation } from 'react-i18next';


// const Test = ({navigation}) => {
//     const { t ,i18n } = useTranslation();
//     return (
//         <View style={{justifyContent:'center' , alignItems:'center' , flex:1}}>
//             <Text>{t('Hello World')}</Text>
//             <TouchableOpacity
//             onPress={()=>{
//                 // i18n.chageLanguage(i18n.language === 'ar'? 'en' : 'ar')
//                 i18n.changeLanguage(i18n.language === 'ar'?'en':'ar')
//             }}

//             >
//                 <Text>
//                     abc
//                 </Text>

//             </TouchableOpacity>
//             <TouchableOpacity
//             onPress={()=>{
//                 navigation.navigate('Test2')
//             }}

//             >
//                 <Text>
//                     abc
//                 </Text>

//             </TouchableOpacity>

//         </View>
//     )
// }

// export default Test


