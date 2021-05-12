import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  
  TouchableOpacity,
  Platform
} from 'react-native';
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';
import HeaderCustom from '../custom/HeaderCustom';



import {colors, fonts, screenWidth, screenHeight} from '../../res/style/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
const HEADER_MAX_HEIGHT = heightPercentage('55%');
const HEADER_MIN_HEIGHT = heightPercentage('40%');
import {
  widthPercentageToDP as widthPercentage,
  heightPercentageToDP as heightPercentage,
} from 'react-native-responsive-screen';
import Header from '../custom/Header';
import {notification} from '../Notification/NotificationIOS';
import { withTranslation } from 'react-i18next';
import WalletModal from '../custom/WalletModal';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourCheckOur:'',
      minuteCheckOur:'',
      timeChekcIn: '',
      time: '',
      timeIn: '',
      timeOut: '',
      checkIn: true,
      checkOut: true,
      title: 'check in',
    };
    this.walletModal = React.createRef();
  }

  // componentDidMount(){ console.log('1234');}
  componentDidMount() {
    // console.log('123');
    setInterval(() => {
      const a = new Date();
      const b = this.formatDate(a);
      this.setState({time: b});
    }, 1000);
  }
  formatDate = date => {
    // console.log('date===',date);
    // const date = new Date(a);
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h}:${m}:${s} `;
  };

  
  Notifi = data => {
    // console.log('title==', data.Title);
    const option = {
      soundName: 'default',
      playSound: true,
      vibrate: true,
    };
    switch (data.Title) {
       
       case 'check in':
        notification.configure();
        // notification.PushChancel('Cảm ơn đã Check In',
        // `Bạn đã Check In lúc ${data.timeCheckIn}`,);
        notification.PushNotifi(
          // '1',
          'Cảm ơn đã Check In',
          `Bạn đã Check In lúc ${data.timeCheckIn}`,
          // option,
        );
        break;
      case 'check out':
        notification.configure();
        // notification.PushChancel('Cảm ơn đã Check In',
        // `Bạn đã Check In lúc ${data.timeCheckIn}`,);
        notification.PushNotifi(
          // '1',
          'Cảm ơn đã Check Out',
          `Bạn đã Check Out lúc ${data.timeCheckIn}`,
          // option,
        );
        break;
    }

    // console.log('timeChekcIn', timeCheckIn);
    // const option = {
    //   soundName: 'default',
    //   playSound: true,
    //   vibrate: true,
    // };
    // notification.configure();
    // notification.PushChancel('1');
    // notification.PushNotifi(
    //   '1',
    //   'Chào mừng bạn đến với app chúng tôi',
    //   `Bạn đã Check In lúc ${timeCheckIn.timeCheckIn}`,
    //   option,
    // );
    // // notification.PushNotifiContent();
  };

  
   OverTime =(time)=>{
    setTimeout(() => {
      const h = `0${time}`.slice(1, 3);
    // this.setState({hourCheckOur:h});
    const m = `0${time}`.slice(4, 6);
    // this.setState({minuteCheckOur:m});
    // console.log("=====thong bao===,",m);
     if(h >= 10 && m > 0){
      this.walletModal.current.open()

    }
  
    }, 2000);
     

    // console.log("=====thong bao===,",time);
    
  }

  render() {
    // console.log(this.state.timeNow);
    return (
      <View style={{flex: 1}}>
        <Header
          isShowMenu
          onPressMenu={() => this.props.navigation.openDrawer()}
          title={this.props.t('Trang chủ')}
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth}}>
            <View style={{justifyContent:'space-between'}}>

            </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: Sizes.s30,
              marginHorizontal: Sizes.s30,
              height: Sizes.s160,
            }}>
            <View style={{flex: 0.5, flexDirection: 'column'}}>
              <View
                style={{
                  flex: 0.5,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                }}>
                <Icon name="wifi" size={Sizes.s40} style={{color: '#91D5FF'}}></Icon>
                <Text style={{fontSize: Sizes.s40, paddingLeft: Sizes.s30}}>Wifi</Text>
              </View>
              <View style={{flex: 0.5, flexDirection: 'row'}}>
                <Icon
                  name="calendar-alt"
                  size={25}
                  style={{color: 'orange'}}></Icon>
                <Text style={{paddingLeft: Sizes.s30, fontSize: Sizes.s30 , width:'80%'}}>
                  {moment(new Date()).format('dddd')}{' '}
                  {moment(new Date()).format('L')}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                marginHorizontal: Sizes.s10,
                marginVertical: Sizes.s10,
                borderRadius: Sizes.s30,
                borderWidth: Sizes.s4,
                borderColor: 'pink',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: Sizes.s60, fontWeight: 'bold', color: 'orange'}}>
                {this.state.time}
               
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',

              //   marginVertical: 15,
              marginHorizontal: Sizes.s30,
            }}>
            <TouchableOpacity
            onPress={()=>{
              this.props.navigation.navigate('RequireLateContainer')
            }}
            >
              <ImageBackground
                source={Images.bg_bt_request_late}
                style={{
                  height: Sizes.s200,
                  width: (screenWidth * 0.9) / 2,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                resizeMode="contain">
                <Image
                  source={Images.ic_request_late}
                  style={{height: Sizes.s100, width: Sizes.s100}}
                  resizeMode="contain"></Image>
                <Text
                numberOfLines={1}
                  style={{color: 'white', fontWeight: 'bold', fontSize: Sizes.s40  ,width:'50%'}}>
                  {this.props.t('Xin đi trễ')}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            {this.state.title === 'check in' ? (
              <TouchableOpacity
                onPress={() => {
                  this.Notifi({
                    timeCheckIn: this.state.time,
                    Title: this.state.title,
                  });
                  this.setState({timeIn: this.state.time});
                  this.setState({checkIn: false});
                  this.setState({title: 'check out'});
                }}>
                <ImageBackground
                  source={Images.bg_bt_check_in}
                  style={{
                    height: Sizes.s200,
                    width: (screenWidth * 0.9) / 2,
                    marginLeft: Sizes.s20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  resizeMode="contain">
                  <Image
                    source={Images.ic_check_in}
                    style={{height: Sizes.s100, width: Sizes.s100}}
                    resizeMode="contain"></Image>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: Sizes.s40}}>
                    Check In
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.Notifi({
                    timeCheckIn: this.state.time,
                    Title: this.state.title,
                  });
                  this.setState({timeOut: this.state.time});
                  this.setState({checkOut: false});
                  this.OverTime(this.state.time)
                  // this.setState({title: 'check in'});
                }}>
                <ImageBackground
                  source={Images.bg_bt_check_in}
                  style={{
                    height: Sizes.s200,
                    width: (screenWidth * 0.9) / 2,
                    marginLeft: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  resizeMode="contain">
                  <Image
                    source={Images.ic_check_in}
                    style={{height: Sizes.s100, width: Sizes.s100}}
                    resizeMode="contain"></Image>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: Sizes.s40}}>
                    Check Out
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              marginHorizontal: Sizes.s30,
            }}>
            {this.state.checkIn === true ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_error_data}
                  style={{height: Sizes.s60, width: Sizes.s60}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: Sizes.s20}}>{this.props.t('Bạn chưa checkin')}</Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_Done}
                  style={{height: Sizes.s60, width: Sizes.s60}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: Sizes.s20}}>
                {this.props.t('Thành công checkin')} {this.state.timeIn}
                </Text>
              </View>
            )}
           
            {this.state.checkOut === true ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_error_data}
                  style={{height: Sizes.s60, width: Sizes.s60}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: Sizes.s20}}>{this.props.t('Bạn chưa checkout')}</Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.ic_Done}
                  style={{height: Sizes.s60, width: Sizes.s60}}
                  resizeMode="contain"></Image>
                <Text style={{marginLeft: Sizes.s20}}>
                {this.props.t('Thành công checkout')} {this.state.timeOut}
                </Text>
              </View>
            )}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flex:1 , paddingBottom:Platform.OS === 'ios' ? null : Sizes.s40}}>
            
          
            <Image source={Images.time_management} style={{ height:screenWidth , width:screenWidth  }}
            resizeMode='contain'
            />
      
          </View>
          <WalletModal
               ref={this.walletModal}
               modalTitle="Bạn có muôn yêu cầu OT"
               textSubmit="Gữi"
              //  onSubmit={this.onCreateWallet}
               cardName=""
            />

          
        </ImageBackground>
      </View>
    );
  }
}
export default withTranslation()(Home);
