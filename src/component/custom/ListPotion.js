import React, {Component} from 'react';
import {
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
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

class ListPotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        updown : true ,
      expande: false,
      dapan: '',
      selectItem:'',
      titleChoose :this.props.t('Dạng yêu cầu'),
      data: [
        
      ],
    };
  }
  componentDidMount(){
    // console.log('data==', this.props.datalist);
    this.setState({data:this.props.datalist})
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
            flexDirection:'row',
            justifyContent:"space-between"
            
          }}>
          <TouchableOpacity
          style={{flexDirection: 'row',
          paddingVertical:10,
          marginHorizontal:10,
          justifyContent: 'space-between',
          alignItems: 'center',}}
          onPress={()=>{this.setState({selectItem:item}) ; 
          this.setState({updown: !this.state.updown})
          this.setState({titleChoose:item.label});
          this.props.onPressChooseType(item.label)
          this.setState({expande: !this.state.expande});
          }}>
            <Text style={{fontSize: 15}}>{item.label}</Text>
            
          </TouchableOpacity>
          {this.state.selectItem === item ? (
              <TouchableOpacity style={{justifyContent:"center", alignItems:"center",width:50,}}
              onPress={()=>{this.props.onPressChooseType('');this.setState({titleChoose:this.props.t('Dạng yêu cầu')});this.setState({expande: !this.state.expande});this.setState({updown: !this.state.updown})}}
              >
                <Image
                source={require('../../res/image/img/error.png')}
                style={{
                  width: Sizes.s30,
                  height: Sizes.s30,
                  resizeMode: 'contain',
                }}
              />
              </TouchableOpacity>
              
            ) : null}
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
            height: Sizes.s80,
            
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: Sizes.s20,
            borderRadius: 20,
            // backgroundColor: '#FFFFFF',
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
          <Text style={{fontSize: Sizes.s25, fontWeight: '700'}}>{this.state.titleChoose}</Text>
          {this.state.updown === true ? (<Image
            source={require('../../res/image/img/arrow-down.png')}
            style={{width: Sizes.h30, height: Sizes.h30, resizeMode: 'contain'}}
          />) :
          (
          <Image
            source={require('../../res/image/img/arrow-up.png')}
            style={{width: Sizes.h30, height: Sizes.h30, resizeMode: 'contain' , marginLeft:10}}
          />)
          }
          
        </TouchableOpacity>
        {this.state.expande ?<ScrollView style={{overflow: 'hidden' , height:110}}>
          {this.renderItem()}
        </ScrollView>: null }

        
      </View>
    );
  }
}
ListPotion.defaultProps = {
    // modalHeight: Dimensions.get('window').height * 0.4,
    // data: [],
    onPressChooseType:()=>{}
  }
  export default withTranslation()(ListPotion);
