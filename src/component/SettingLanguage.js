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
                {title:'Tiếng Nhật'}
            ]
            

        }
        this.modal = React.createRef();
    }
    
    
    onPressTypeChooseSession = (title) => {
        console.log('title==', title);
        this.props.i18n.changeLanguage(this.props.i18n.language === 'Tiếng Việt' ? 'vn' : 'ja')
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
                  <Text>
                      ChangeLanguage *
                  </Text>
                  <TouchableOpacity
                  onPress={() => this.modal.current.open()}
                  >
                      <Text>
                          nhan
                      </Text>

                  </TouchableOpacity>
                  <BottomSheet
                      ref={this.modal}
                      title="ChooseSession"
                      data={this.state.dataLang}
                      modalHeight={150}
                      onPressSession={(title) => {
                        this.onPressTypeChooseSession(title);
                      }}
                    />
                  
              </View>
          </ImageBackground>
            </View>
        )
    }
}
export default withTranslation()(SettingLanguage);
