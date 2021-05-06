import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class YourGetPermissionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          status: 'Đồng ý',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'Chờ đợi',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'Từ chối',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'Đồng ý',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'Chờ đợi',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
        {
          status: 'Từ chối',
          require: ' xin ve som',
          timeapply: '08:30-17h30 20-12-2012',
          timerequest: '08:15 19-12-2012',
        },
      ],
    };
  }
  chooseImage = item => {
    switch (item.status) {
      case 'Đồng ý':
        return Images.icon_approved;
        break;
      case 'Chờ đợi':
        return Images.icon_waiting;
        break;
      case 'Từ chối':
        return Images.icon_decline;
        break;
    }
  };
  chooseColor = item => {
    switch (item.status) {
      case 'Đồng ý':
        return '#4DD077';
        break;
      case 'Chờ đợi':
        return '#FFC069';
        break;
      case 'Từ chối':
        return 'red';
        break;
    }
  };
  renderItem = item => (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 10,

        marginTop: 20,
      }}>
      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              {
                height: 35,
                width: 100,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
              },
              {borderColor: this.chooseColor(item.item)},
            ]}>
            <Image
              source={this.chooseImage(item.item)}
              style={{width: 20, height: 20}}
            />

            <Text
              style={[
                {marginLeft: 5, fontSize: 15},
                {color: this.chooseColor(item.item)},
              ]}>
              {item.item.status}
            </Text>
          </View>
        </View>
        <Text style={{marginTop: 10, fontSize: 22}}>{item.item.require}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Icon name="clock" size={20} style={{color: 'gray'}} />
          <Text style={{marginLeft: 5, color: 'gray'}}>Thời gian đăng ký:</Text>
          <Text style={{marginLeft: 5, color: 'gray', flex: 1}}>
            {item.item.timeapply}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Icon name="clock" size={20} style={{color: 'gray'}} />
          <Text style={{marginLeft: 5, color: 'gray'}}>Thời gian yêu cầu :</Text>
          <Text style={{marginLeft: 5, color: 'gray', flex: 1}}>
            {item.item.timerequest}
          </Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        contentContainerStyle={{flexGrow: 1,}}
        keyExtractor={(item, index) => String(index)}
        data={this.state.data}
        renderItem={this.renderItem}
      />
    );
  }
}
