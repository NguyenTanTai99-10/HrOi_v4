import React, {Component} from 'react';
import {Text, View, ImageBackground, FlatList, ScrollView} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import { withTranslation } from 'react-i18next';

class AttendanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {date: '12/3/2021', time: '8:30/17:30', status: 'Ontime'},
        {date: '13/3/2021', time: '8:30/17:30', status: 'Late'},
        {date: '12/3/2021', time: '8:30/17:30', status: 'Early'},
        
      ],
    };
  }
  ChooseColor = (item) =>{
   
    
    switch(item){
      case "Ontime" :
      return "blue";
      break;
      case "Late" :
      return "red";
      break;
      case "Early" :
      return "orange";
      break;
    }
  
    
   
  }
  renderItem = (item, index) => (
    <View
      style={{
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        flex: 3,
        height: 50,
        borderBottomWidth:1,
        borderColor:"#BFBFBF"
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={{marginLeft: 10}}>{item.item.date}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{}}>{item.item.time}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          
        }}>
          <View style={[{ width:70 , height:30,justifyContent: 'center', 
          alignItems: 'center',borderRadius:20, borderWidth:1.5 , marginRight:5 } , {borderColor:this.ChooseColor(item.item.status)
          }] }>
            <Text  style={{color:this.ChooseColor(item.item.status)}}>{item.item.status}</Text>
          </View>
        
      </View>
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={this.props.t('Điểm danh')}
        isShowMenu
        onPressMenu={() => this.props.navigation.openDrawer()}
        
        />
        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight , flex:1}}
          imageStyle={{flex:1}}
          >
          <View style={{marginHorizontal: 10, marginVertical: 20, flex: 1}}>
            {/* {this.state.data.map((item)=>{
              console.log(item.date);
            })} */}
            <ImageBackground
              source={Images.ic_header_salary}
              style={{height: 50}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  height: 50,
                  borderRadius: 10,
                }}>
                <Text style={{marginLeft: 10, color: 'white'}}>{this.props.t('Ngày tháng')}</Text>
                <View>
                <Text style={{color: 'white' , alignSelf:"center"}}>{this.props.t('Thời gian')}</Text>
                <Text style={{color: 'white'}}>Checkin/Checkout </Text>
                  </View>
                <Text style={{marginRight: 10, color: 'white'}}>{this.props.t('Trạng thái')}</Text>
              </View>
            </ImageBackground>
            
              <ScrollView style={{flex:1 }}>
                  <FlatList
                style={{}}
                data={this.state.data}
                keyExtractor={(item, index) => String(index)}
                renderItem={this.renderItem}
              />
              </ScrollView>
            
         
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default withTranslation()(AttendanceComponent);
