import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';

import TextInputAnimated from './custom/TextInputAnimated';
import DateSelector from './custom/DateSelector';
import ListShow from './custom/ListShow';
import BottomSheet from './custom/BottomSheet';
import Sizes from '../utils/Sizes';
import {DatetimePicker} from './custom/DatetimePicker';

export default class AddRequiesComponent extends Component {
  constructor(props) {
    super(props);
    let controller;
    this.state = {
      TimeLate: '',
      DateEnd: '',
      DateStart: '',
      disabled: false,
      ListDate: '',
      typeChoose: '',
      typeChooseTime: 'ChooseTime',
      typeChooseSession: 'ChooseSession',
      Showdate : '',

      dataTime: [
        {title: 'One day', value: 'asda123sdasd'},
        {title: 'Half a day', value: 'asda123123sdasd'},
      ],
      dataSession: [
        {title: 'Morning', value: 'asda123sdasd'},
        {title: 'Afternoon', value: 'asda123123sdasd'},
      ],
    };
    this.modal1 = React.createRef();
    this.modal2 = React.createRef();
  }

  onChangeDateStart = (text) => {
    this.setState({DateStart: text});
  };

  onClearDateStart = () => {
    this.setState({DateStart: ''});
  };
  onChangeDateEnd = (text) => {
    this.setState({DateEnd: text});
  };

  onClearDateEnd = () => {
    this.setState({DateEnd: ''});
  };

  onPressChooseType = (type) => {
    this.setState({typeChoose: type});
  };
  onPressTypeChooseTime = (title) => {
    console.log('title==', title);
    this.setState({typeChooseTime: title});
  };
  onPressTypeChooseSession = (title) => {
    console.log('title==', title);
    this.setState({typeChooseSession: title});
  };
  onChange =()=>{
    this.setState({Showdate:false})
  }

  render() {
    console.log('this.state.typeChoose==', this.state.typeChoose);
    console.log(this.state.ListDate);
    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Add Your Request"
        />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}

          // onPress = {Keyboard.dismiss}
        >
          <ImageBackground
            source={Images.ic_bg_timecard}
            style={{width: screenWidth, height: screenHeight, flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View
                style={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  // marginVertical: 20,
                }}>
                <Text style={{fontSize: 15, fontWeight: '700'}}>
                  Type request *{' '}
                </Text>
                <View
                  style={[
                    Platform.OS !== 'android' && {
                      zIndex: 10,
                    },
                    {
                      marginTop: 10,
                    },
                  ]}>
                  <ListShow
                    onPressChooseType={(type) => {
                      this.onPressChooseType(type);
                    }}
                  />
                </View>
              </View>
              {this.state.typeChoose === 1 || this.state.typeChoose === 2 || this.state.typeChoose === 4 || this.state.typeChoose === 5 ? (
                <View>
                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 20,
                      // marginVertical: 20,
                    }}>
                    <DateSelector
                      getAll={(date) => {
                        console.warn(date);
                        this.setState({ListDate: date});
                      }}></DateSelector>
                  </View>
                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 10,
                      borderWidth: 1,
                      height: 40,
                      backgroundColor: '#FFFFFF',

                      borderColor: '#BFBFBF',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      
                    }}>
                    {this.state.ListDate !== '' && (
                      <ScrollView horizontal={true}>
                        {this.state.ListDate.map((item) => {
                          return (
                            <View
                              style={{
                                marginLeft: 5,
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  borderRadius: 7,
                                  padding: 5,
                                  backgroundColor: '#e8eff7',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center',
                                    textAlign: 'center',
                                  }}>
                                  {item.year +
                                    '-' +
                                    (item.month + 1) +
                                    '-' +
                                    item.day}
                                </Text>
                              </View>
                            </View>
                          );
                        })}
                      </ScrollView>
                    )}
                  </View>
                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        textAlignVertical: 'center',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 10,
                      }}>
                      {'Total days : ' +
                        ((this.state.ListDate.length + '').length < 2
                          ? '0' + this.state.ListDate.length
                          : this.state.ListDate.length)}
                    </Text>
                  </View>
                </View>
              ) : null}

              {this.state.typeChoose === 1 || this.state.typeChoose === 2  ? (
                <View
                  style={{
                    marginTop: 10,
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{}}>
                    <TouchableOpacity
                      style={{
                        width: (screenWidth * 0.8) / 2,

                        height: 40,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderRadius: 8,
                        backgroundColor: '#FFFFFF',
                        borderColor: '#BFBFBF',
                        paddingHorizontal: 10,
                        borderWidth:1
                      }}
                      onPress={() => {
                        this.modal1.current.open();
                      }}>
                      <Text>{this.state.typeChooseTime}</Text>

                      <Image
                        source={require('../res/image/img/arrow-down.png')}
                        style={{
                          width: Sizes.h30,
                          height: Sizes.h30,
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>
                    <BottomSheet
                      ref={this.modal1}
                      title="ChooseTime"
                      data={this.state.dataTime}
                      modalHeight={150}
                      onPressTime={(title) => {
                        this.onPressTypeChooseTime(title);
                      }}
                    />
                  </View>
                  <View style={{}}>
                    
                    <TouchableOpacity
                      style={{
                        width: (screenWidth * 0.8) / 2,

                        height: 40,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderRadius: 8,
                        backgroundColor: '#FFFFFF',
                        borderColor: '#BFBFBF',
                        paddingHorizontal: 10,
                        borderWidth:1
                      }}
                      onPress={() => this.modal2.current.open()}>
                      <Text>{this.state.typeChooseSession}</Text>
                      <Image
                        source={require('../res/image/img/arrow-down.png')}
                        style={{
                          width: Sizes.h30,
                          height: Sizes.h30,
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>
                    <BottomSheet
                      ref={this.modal2}
                      title="ChooseSession"
                      data={this.state.dataSession}
                      modalHeight={150}
                      onPressSession={(title) => {
                        this.onPressTypeChooseSession(title);
                      }}
                    />
                  </View>
                </View>
              ) : null}

              {this.state.typeChoose === 4 || this.state.typeChoose === 5 ? (
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '700',
                      marginTop: 10,
                      marginLeft: 20,
                    }}>
                    Minutes *
                  </Text>
                  <View
                    style={{
                      borderColor: '#BFBFBF',

                      marginTop: 10,
                    }}>
                    <TextInputAnimated
                      //  isPassword
                      //  style={{height:50}}
                      label="Minutes"
                      value={this.state.DateStart}
                      onChangeText={this.onChangeDateStart}
                      onPressClear={this.onClearDateStart}
                    />
                  </View>
                </View>
              ) : null}
              {this.state.typeChoose === 3 ? <DatetimePicker  showdate = {this.state.Showdate}/> : null}

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginTop: 10,
                  marginLeft: 20,
                }}>
                Note *
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',

                  marginTop: 10,
                }}>
                <TextInput
                onFocus={()=>this.onChange()}
                  style={{
                    width: '90%',
                    borderWidth: 1,
                    height: 100,
                    borderColor: '#BFBFBF',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                  multiline></TextInput>
              </View>
              <View
                style={{
                  marginVertical: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#bb64a1',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
