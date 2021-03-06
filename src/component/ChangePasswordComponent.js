import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View,ImageBackground, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import TextInputAnimated from './custom/TextInputAnimated';
import { withTranslation } from 'react-i18next';




class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Passwordcomfirm :'',
      Password:'',
      PasswordOld :''

    }
  }
  onChangePasswordOld = (text) => {
    this.setState({ PasswordOld: text });
 };

 onClearPasswordOld= () => {
    this.setState({ PasswordOld: '' });
 };

  onChangePasswordcomfirm = (text) => {
    this.setState({ Passwordcomfirm: text });
 };

 onClearPasswordcomfirm= () => {
    this.setState({ Passwordcomfirm: '' });
 };
 onChangePassword = (text) => {
  this.setState({ Password: text });
};

onClearPassword= () => {
  this.setState({ Password: '' });
};
  render() {
    return (
      <View >

        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title={this.props.t('Thay đổi mật khẩu')}
        />
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        >

        
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight}}>
        <View style={{marginHorizontal: 40, marginVertical: 30}}>
          <View >
            <View style={{  justifyContent :'center' , alignItems:'center'}}>
               <Text style={{fontWeight: 'bold',width:'90%'}}>{this.props.t('Mật khẩu hiện tại')}</Text>
            </View>
           
           
              <TextInputAnimated
              style={{  marginTop : 10 , }}
                
                //  isPassword
                //  style={{height:50}}
                 label={this.props.t('Mật khẩu hiện tại')}
                 value={this.state.PasswordOld}
                 onChangeText={this.onChangePasswordOld}
                 onPressClear={this.onClearPasswordOld}
              />
              {/* PasswordOld */}
          </View>

          <View style={{marginTop: 20}}>
          <View style={{  justifyContent :'center' , alignItems:'center'}}>
               <Text style={{fontWeight: 'bold',width:'90%'}}>{this.props.t('Mật khẩu mới')}</Text>
            </View>
            
           
               <TextInputAnimated
              style={{  marginTop : 10 , }}
                
                //  isPassword
                //  style={{height:50}}
                 label={this.props.t('Mật khẩu mới')}
                 value={this.state.Password}
                 onChangeText={this.onChangePassword}
                 onPressClear={this.onClearPassword}
              />
          </View>
          <View style={{marginTop: 20}}>
          <View style={{  justifyContent :'center' , alignItems:'center'}}>
               <Text style={{fontWeight: 'bold',width:'90%'}}>{this.props.t('Nhập lại mật khẩu')}</Text>
            </View>
            
            
              <TextInputAnimated
              style={{  marginTop : 10 , }}
                
                //  isPassword
                //  style={{height:50}}
                 label={this.props.t('Nhập lại mật khẩu')}
                 value={this.state.Passwordcomfirm}
                 onChangeText={this.onChangePasswordcomfirm}
                 onPressClear={this.onClearPasswordcomfirm}
              />
          </View>
          <View style={{justifyContent:'center', alignItems:'center' ,top:50}}>
          <TouchableOpacity
                style={{
                  backgroundColor: '#bb64a1',
                  height: 50,
                  width: screenWidth / 2,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                {this.props.t('XÁC NHẬN')}
                </Text>
              </TouchableOpacity>

          </View>
        </View>
        </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
export default withTranslation()(ChangePasswordComponent);
