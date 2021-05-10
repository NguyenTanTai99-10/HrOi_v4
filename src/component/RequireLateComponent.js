import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import Header from './custom/Header';
import { colors, fonts, screenWidth, screenHeight } from '../res/style/theme';
import Images from '../res/image';
import DatetimePickerRequiest from './custom/DatetimePickerRequiest';



export default class RequireLateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Showdate: '',
      TimeLate: 'Thời gian đi trễ',
      Day: 'Chọn ngày',
     
    };
  }
  onChange = () => {
    this.setState({ Showdate: false })
  }
  onDismiss = () => {
    Keyboard.dismiss()
  }

  render() {
    // console.log(this.state.country);
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Header
          title="XIN ĐI TRỄ"
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
        />
        <TouchableWithoutFeedback
        style={{backgroundColor:'red'}}
        

          onPress = {()=>{Keyboard.dismiss();this.onChange()}}
        >
          
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{ height: screenHeight, width: screenWidth,}}>
            <ScrollView>

            
          <View style={{ marginHorizontal: 15, marginVertical: 15}}>
            <DatetimePickerRequiest showdate={this.state.Showdate} OnDismiss={()=>{this.onDismiss()}} />

            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: '700' }}>
                Lý do xin đi trễ:
              </Text>
              <View>
                <TextInput
                  onFocus={() => this.onChange()}
                  style={{
                    marginTop: 10,

                    borderWidth: 1,
                    height: 100,
                    borderColor: '#BFBFBF',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                  multiline></TextInput>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: '700' ,}}>
                Người nhận thông báo:
              </Text>
              <TextInput
                onFocus={()=>this.onChange()}
                  style={{
                    marginTop: 10,
                    
                    borderWidth: 1,
                    height: 40,
                    borderColor: '#BFBFBF',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                  multiline></TextInput>
            </View>
            <View >
              <Text style={{ color: 'gray', fontSize: 15 }}>
                Ví dụ : Kohei Nohara,Loan
              </Text>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text style={{ fontSize: 15, fontWeight: '700'}}>
                Cán bộ duyệt đơn :
              </Text>
              <Text style={{marginTop: 5}}>-HR xem xét (Loan)</Text>
              <Text style={{}}>-Manager phê duyệt (Kohei Nohara)</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 15,
              
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#bb64a1',
                width: 200,
                height: 40,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>GỬI ĐƠN</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class RequireLateComponent extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

