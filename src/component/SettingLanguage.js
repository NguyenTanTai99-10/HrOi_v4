import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import BottomSheet from './custom/BottomSheet';
import { withTranslation } from 'react-i18next';

 class SettingLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeChooseSession:'',
            dataLang :[
                {title:'Tiếng Việt'},
                {title:'English'}
            ]
            

        }
        this.modal = React.createRef();
    }
    
    
    onPressTypeChooseSession = (title) => {
        console.log('title==', title);
        if (title==='Tiếng Việt'){
            this.props.i18n.changeLanguage('vn')
        }
        else{
            this.props.i18n.changeLanguage('en')

        }
        
      };
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <Header
          title="Cài Đặt"
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth, flex: 1}}>
              <View style={{marginHorizontal: 15, marginVertical: 15, flex: 1}}>
                  <TouchableOpacity onPress={() => this.modal.current.open()}
                  style={{backgroundColor:'#FFFFFF' , paddingVertical: 15,paddingHorizontal:5}}>
                      <Text style={{color:'#4D89FF'}}>
                      {this.props.t('Ngôn ngữ')} *
                  </Text>
                  <View
                  style={{marginTop:10}}
                  
                  >
                      <Text>
                      {this.props.t('Thay đổi ngôn ngữ')}
                      </Text>

                  </View>
                  <BottomSheet
                      ref={this.modal}
                      title={this.props.t('Chọn ngôn ngữ')}
                      data={this.state.dataLang}
                      modalHeight={150}
                      onPressSession={(title) => {
                        this.onPressTypeChooseSession(title);
                      }}
                    />
                      </TouchableOpacity>

                  
                  
              </View>
          </ImageBackground>
            </View>
        )
    }
}
export default withTranslation()(SettingLanguage);
