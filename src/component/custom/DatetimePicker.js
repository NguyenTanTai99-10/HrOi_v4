import React, {useState,useEffect} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Sizes from '../../utils/Sizes';
import {colors, screenWidth, screenHeight} from '../../res/style/theme';
import moment from 'moment';

export const DatetimePicker = (props) => {
  
  useEffect(() => {
  console.log('====================================');
  console.log('props==',props.showdate);
  console.log('====================================');
  if ( props.showdate === false){
    setShow(false);
  setShow1(false);
  setShow2(false);
  setShow3(false);
  }
  }, [props])
  //==========================================================================
  const [disabled1, setDisabled1] = useState(false);
  const [date, setDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());

  const [DateStart, setDateStart] = useState('Day Start');

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const DayStart = moment(selectedDate).format('L');
    console.log('DayStart=======', DayStart);
    setShow(Platform.OS === 'ios');
    setDateStart(DayStart);
    setMinDate(selectedDate)
    setDate(selectedDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //================================================================
  const [date1, setDate1] = useState(new Date());
  const [DateEnd, setDateEnd] = useState('Day End');

  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);

  const onChange1 = (event, selectedDate1) => {
    const DayEnd = moment(selectedDate1).format('L');
    console.log('DayEnd=======', DayEnd);
    setShow1(Platform.OS === 'ios');
    setDateEnd(DayEnd);
    setDate1(selectedDate1)
  };

  const showMode1 = (currentMode1) => {
    setShow1(true);
    setMode1(currentMode1);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };

  //==========================================================================
  const [date2, setDate2] = useState(new Date());
  const [TimeStart, seTimeStart] = useState('Time Start');
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);

  const onChange2 = (event, selectedDate2) => {
    const chooseTimeStart = formatDate2(selectedDate2);
    console.log('TimeStart=======', chooseTimeStart);
    setShow2(Platform.OS === 'ios');
    seTimeStart(chooseTimeStart);
    setDate2(selectedDate2)
    
    
  };

  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  const formatDate2 = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h} : ${m}: ${s} `;
  };

  const showTimepicker2 = () => {
    showMode2('time');
  };
  //================================================================
  //   //==========================================================================
  const [date3, setDate3] = useState(new Date());
  const [TimeEnd, seTimeEnd] = useState('Time End');
  const [mode3, setMode3] = useState('date');
  const [show3, setShow3] = useState(false);

  const onChange3 = (event, selectedDate3) => {
    const ChooseTimeEnd = formatDate3(selectedDate3);
    console.log('TimeEnd=======', ChooseTimeEnd);
    setShow3(Platform.OS === 'ios');
    seTimeEnd(ChooseTimeEnd);
    setDate3(selectedDate3)
  };

  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
  };
  const formatDate3 = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h} : ${m}: ${s} `;
  };

  const showTimepicker3 = () => {
    showMode3('time');
  };
  //   ================================================================

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
        
      </View> */}
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Ngày Bắt Đầu * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

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
            onPress={()=>{showDatepicker();setShow2(false);setShow3(false);setShow1(false)}}>
            <Text numberOfLines={1}  >{DateStart}</Text>

            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Thời Gian Bắt Đầu * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth *0.8 ) / 2,
              marginTop: 10,

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
            onPress={()=>{showTimepicker2();setShow(false);setShow3(false);setShow1(false)}}>
            <Text numberOfLines={1}  >{TimeStart}</Text>
            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
        
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode={mode2}
          is24Hour={true}
          display="default"
          onChange={onChange2}
        />
      )}

      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Ngày Kết Thúc * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

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
            onPress={()=>{showDatepicker1();setShow(false);setShow3(false);setShow2(false)}}>
            <Text numberOfLines={1}  >{DateEnd}</Text>

            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal:10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            Chọn Thời Gian Kết Thúc *{' '}
          </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

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
            onPress={()=>{showTimepicker3();setShow(false);setShow2(false);setShow1(false)}}>
            <Text numberOfLines={1} >{TimeEnd}</Text>
            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
                
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode1}
          is24Hour={true}
          display="default"
          onChange={onChange1}
          minimumDate={minDate}
        />
      )}
      {show3 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date3}
          mode={mode3}
          is24Hour={true}
          display="default"
          onChange={onChange3}
          mi
        />
      )}
    </View>
  );
};
