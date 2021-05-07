import React, {Component} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Sizes from '../../utils/Sizes';
import { withTranslation } from 'react-i18next';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

class ListShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        updown : true ,
      expande: false,
      dapan: '',
      selectItem:'',
      titleChoose :this.props.t('Dạng yêu cầu'),
      data: [
        {type: 1, title: 'Yêu cầu chưa thanh toán'},
        {type: 2, title: 'Nghỉ chính thức'},
        {type: 3, title: 'Tăng ca'},
        {type: 4, title: 'Đến trễ'},
        {type: 5, title: 'Về sớm'},
      ],
    };
  }

  renderItem = () => {
    let listItem = [];
    this.state.data.map((item, index) => {
      listItem.push(
        <View
          key={index}
          style={{
            marginVertical: 5,
            borderBottomWidth: 1,
            borderColor: 'pink',
            
          }}>
          <TouchableOpacity
          style={{flexDirection: 'row',
          paddingVertical:10,
          marginHorizontal:10,
          justifyContent: 'space-between',
          alignItems: 'center',}}
          onPress={()=>{this.setState({selectItem:item}) ; 
          this.setState({updown: !this.state.updown})
          this.setState({titleChoose:this.props.t(item.title)});
          this.props.onPressChooseType(item.type)
          this.setState({expande: !this.state.expande});
          }}>
            <Text style={{fontSize: 15}}>{this.props.t(item.title)}</Text>
            {this.state.selectItem === item ? (
              <Image
                source={require('../../res/image/img/checked.png')}
                style={{
                  width: Sizes.s30,
                  height: Sizes.s30,
                  resizeMode: 'contain',
                }}
              />
            ) : null}
          </TouchableOpacity>
        </View>,
      );
    });
    return listItem;
  };

  render() {
    return (
      <View style={{}}>
        <TouchableOpacity
          style={{
            overflow: 'hidden',
            height: 40,
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            borderColor: '#BFBFBF',
            borderWidth:1
          }}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            this.setState({expande: !this.state.expande});
            this.setState({updown: !this.state.updown})
          }}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>{this.state.titleChoose}</Text>
          {this.state.updown === true ? (<Image
            source={require('../../res/image/img/arrow-down.png')}
            style={{width: Sizes.h30, height: Sizes.h30, resizeMode: 'contain'}}
          />) :
          (<Image
            source={require('../../res/image/img/arrow-up.png')}
            style={{width: Sizes.h30, height: Sizes.h30, resizeMode: 'contain'}}
          />)
          }
          
        </TouchableOpacity>

        <View style={{overflow: 'hidden'}}>
          {this.state.expande && this.renderItem()}
        </View>
      </View>
    );
  }
}
ListShow.defaultProps = {
    // modalHeight: Dimensions.get('window').height * 0.4,
    // data: [],
    onPressChooseType:()=>{}
  }
  export default withTranslation()(ListShow);
