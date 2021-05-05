import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
// import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../res/image';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Animation from './custom/Animated';
import Header from './custom/Header';

import BottomSheetPhoto from './custom/BottomSheetPhoto';
import ImagePicker from 'react-native-image-crop-picker';

export default class UpdateInfoPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Đỗ Hữu Thiện',
      birthday: '1986-03-05',
      gmai: 'fermatandrew@gmail.com',
      phone: '0987996939',
      position: 'Wedsite Developer',
      animated: false,
      tittlePhoto: [
        {title: 'Take Photo', value: 'asda123sdasd'},
        {title: 'Choose From Library', value: 'asda123123sdasd'},
      ],
    };
    this.modal = React.createRef();
  }

  upDate = () => {
    // this.props.navigation.goBack();
    setTimeout(() => this.props.navigation.goBack(), 5000);
    this.setState({animated: true});
  };
  takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // this.bs.current.snapTo(1);
    });
  };
  libraryPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.animated && (
          <Animation
            offAnimatedState={() => this.setState({animated: false})}
            titlte="Update Thành Công"
          />
        )}
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Sửa thông tin cá nhân"
        />
        {/* http://45.119.213.225/timecard/storage/2020/08/avatar_1598275999.jpeg */}

        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight, flex: 1}}>
          <View style={{height: screenWidth * 0.5}}>
            <TouchableOpacity
              onPress={() => this.modal.current.open()}
              style={{
                width: screenWidth * 0.4,
                height: screenWidth * 0.4,
                alignSelf: 'center',
                borderRadius: 100,
                top: 10,

                flexDirection: 'row',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: screenWidth * 0.4,
                  height: screenWidth * 0.4,
                  alignSelf: 'center',
                  borderRadius: 100,
                }}
                source={{
                  uri: `http://45.119.213.225/timecard/storage/2020/08/avatar_1598275999.jpeg`,
                }}
              />
              <Image
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  right: 35,
                  top: 50,

                  borderRadius: 100,
                  // position:'absolute'
                }}
                source={Images.icon_upload_img}
              />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Họ và tên :</Text>
              <TextInput
                onChangeText={(text) => {
                  this.setState({name: text});
                }}
                defaultValue={this.state.name}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Ngày sinh :</Text>
              <TextInput
                value={this.state.birthday}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Gmail :</Text>
              <TextInput
                value={this.state.gmai}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Số điện thoại :</Text>
              <TextInput
                value={this.state.phone}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Nghề nghiệp :</Text>
              <TextInput
                value={this.state.position}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.upDate()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#bb64a1',
                  width: 100,
                  height: 50,
                  borderRadius: 8,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>UPDATE</Text>
              </TouchableOpacity>
            </View>
            <BottomSheetPhoto
              ref={this.modal}
              title="UPLOAD PHOTO"
              data={this.state.tittlePhoto}
              modalHeight={150}
              onPressTakePhoto = {()=>this.takePhoto()}
              onPressLibraryPhoto ={()=>this.libraryPhoto()}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
