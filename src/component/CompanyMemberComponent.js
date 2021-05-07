import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Keyboard,
} from 'react-native';
import Images from '../res/image';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import LoadingView from './custom/LoadingView';
import { withTranslation } from 'react-i18next';

import Icon from 'react-native-vector-icons/FontAwesome5';

class CompanyMemberComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageAvt: '',
      dataMB: '',
      dataSearch: '',
      search: '',
      backgroundColor: false,
      Kqcc: '',
      data: [
        // {label: 'barking every day', value: 'barking every day'},
        // {label: 'Website Developer', value: 'Website Developer'},
        // {label: 'Accountant', value: 'Accountant'},
        // {label: 'DIRECTOR & TESTER', value: 'DIRECTOR & TESTER'},
        // {label: 'Video Editor', value: 'Video Editor'},
        // {label: 'Faculty of Law', value: 'Faculty of Law'},
        // {label: 'Accountant', value: 'Accountant'},
        // {label: 'Website Developer', value: 'Website Developer'},
        // {label: 'Android Developer', value: 'Android Developer'},
        // {label: 'Designer', value: 'Designer'},
        // {label: 'Mobile Developer', value: 'Mobile Developer'},
        // {label: 'QC', value: 'QC'},
        // {label: 'IOS Developer', value: 'IOS Developer'},
        // {label: 'Mobile Developer', value: 'Mobile Developer'},
        // {label: 'Sales Marketing', value: 'Sales Marketing'},
        // {label: 'Recruiter', value: 'Recruiter'},
      ],
    };
    this.keyboardDidHide = this.keyboardDidHide.bind(this);
  }

  componentDidMount() {
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );

    // console.log('this.props.dataLG',this.props.dataLG.token);
    this.setState({imageAvt: this.props.dataLG.avatar});
    //
    this.didFocusListener = this.props.navigation.addListener('focus', () => {
      // do something
      this.props.companyMenberAction({token: this.props.dataLG.token});
    });
  }
  keyboardDidHide() {
    this.setState({backgroundColor: false});
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.statusCM !== null &&
      this.props.statusCM !== prevProps.statusCM
    ) {
      // console.log('(this.props.status==',this.props.message);
      // console.log('vao day1');
      if (this.props.statusCM === 1) {
        // console.log('vao day2');
        // console.log(this.props.dataCM);
        var temp = [];
        this.props.dataCM.map(item => {
          // console.log(item.position);
          var obj = {};

          obj[`value`] = `${item.position}`;
          obj[`label`] = `${item.position}`;
          // const kq = obj;
          temp.push(obj);
        });
        // console.log(temp);
        var x = Array.from(new Set(temp.map(JSON.stringify))).map(JSON.parse);
        // console.log("ket qua" ,x);
        this.setState({
          data: x,
        });

        this.setState({dataMB: this.props.dataCM});
        this.setState({dataSearch: this.props.dataCM});
      } else {
        // console.log('vao day message');
        setTimeout(() => {
          Alert.alert('Thông báo', this.props.messageCM);
        }, 10);
      }
    }
    if (
      this.props.errorCM !== null &&
      this.props.errorCM !== prevProps.errorCM
    ) {
      // console.log('vao day error');
      setTimeout(() => {
        Alert.alert('Thông báo', this.props.errorCM);
      }, 10);
    }
  }

  renderItem = item => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('InfoMemberComponent', {
          item: item.item,
        });
      }}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: (screenWidth * 0.9) / 2,
        marginHorizontal: 10,
        marginVertical: 10,
        // borderWidth: 1,q
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={{borderRadius: 50, borderColor: 'pink', borderWidth: 2}}>
          <Image
            source={{
              uri: `${item.item.avatar}`,
            }}
            style={{height: 50, width: 50, borderRadius: 9999}}
            resizeMode="cover"
          />
        </View>

        <Text style={{marginTop: 5, fontWeight: '600'}}>
          {item.item.name.toUpperCase()}
        </Text>
        <Text style={{fontWeight: '600'}}>
          {item.item.position}
        </Text>
      </View>
    </TouchableOpacity>
  );

  textSearch = text => {
    console.log(text.length);
    if (text.length >= 1) {
      const newData = this.state.dataSearch.filter(item => {
        // console.log(item);
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({dataMB: newData});
      this.setState({search: text});
    } else {
      this.setState({dataMB: this.props.dataCM});
    }
  };
  
  itemSearch = text => {
    console.log(text.length);
    if (text.length >= 1) {
      const newData = this.state.dataSearch.filter(item => {
        // console.log(item);
        const itemData = item.position ? item.position.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({dataMB: newData});
      this.setState({search: text});
    } else {
      this.setState({dataMB: this.props.dataCM});
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title={this.props.t('Thành viên')}
          isShowImage
          image={this.state.imageAvt}
          // onPressImage={()=>this.props.navigation.navigate('InfoPerson')}
          isShowMenu
          onPressMenu={() => this.props.navigation.openDrawer()}
        />
        {this.props.loadingCM && <LoadingView />}

        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{height: screenHeight, width: screenWidth , flex:1}}>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: 10,
                borderWidth: 1,
                borderRadius: 20,
                borderColor: '#BFBFBF',
                flex:1
              }}>
              <Icon
                name="search"
                style={{color: '#BFBFBF', marginLeft: 10 , flex:0.1}}
                size={20}
              />
              <TextInput
              
                // multiline
                // value={this.state.search}

                onFocus={() => {
                  this.setState({backgroundColor: true});
                }}
                onChangeText={text => {
                  this.textSearch(text);
                }}
                style={{
                  
                  flex:0.9,
                  
                  height: 40,
                }}
                placeholder={this.props.t('Tìm kiếm tên ...')}></TextInput>
            </View>
            
          </View>
          <View style={{marginBottom:40  , flex:1}}>
               <ScrollView nestedScrollEnabled >
            <FlatList
              data={this.state.dataMB}
              
              keyExtractor={(item, index) => String(index)}
              renderItem={this.renderItem}
              numColumns={2}
            />
          </ScrollView>
          </View>

       
        </ImageBackground>
      </View>
    );
  }
}
export default withTranslation()(CompanyMemberComponent);