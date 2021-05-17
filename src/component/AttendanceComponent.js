import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../res/image';
import {colors, screenHeight, screenWidth} from '../res/style/theme';
import AttendanceCalendar from './custom/AttendanceCalendar';
import Header from './custom/Header';
import { useTranslation } from 'react-i18next';
const time = (h, company_timezone) => {
  let a = new Date(h).toLocaleString('en-US', {timeZone: company_timezone});
  let b = new Date(a);
  return b;
};
const company_time = (h) => {
  let a = new Date(h);
  return a;
};

const AttendanceComponent = (props) => {
    const { t, i18n } = useTranslation();
  const [page, setPage] = React.useState(1);
  const [attendanceList, setAttendanceList] = React.useState([]);
  const [nowDate, setNowDate] = React.useState('');
  const [sortType, setSortType] = React.useState(2);
  return (
    <View style={{flex: 1}}>
      <Header 
      title = {t('Điểm danh')}
      isShowMenu 
      onPressMenu={() => props.navigation.openDrawer()} />
      <ImageBackground
        source={Images.ic_bg_timecard}
        style={{width: screenWidth, height: screenHeight, flex: 1}}
        imageStyle={{flex: 1}}>

{
                sortType === 2 ?
                    <AttendanceCalendar style={styles.container_body} listAttendace={attendanceList}
                        getListAttendanceFollowMonth={()=>{console.log('123');}}
                        time={time}
                        // companyInfo={route.params.companyInfor}
                        ></AttendanceCalendar>
                    :
                    <View style={styles.container_body}>
                        <LinearGradient style={{
                            flexDirection: 'row', justifyContent: 'space-between',
                            padding: 10
                            , backgroundColor: 'transparent', alignItems: 'center', marginLeft: 24, marginRight: 24, marginTop: 10, marginBottom: 10
                        }}
                            colors={[colors.gardient_from_button, colors.gardient_end_button]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Date</Text>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Time checkin/ Checkout</Text>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Status</Text>
                        </LinearGradient>
                        <FlatList style={{ flex: 1 }}
                            // onEndReached={() => {
                            //     if (state !== null && state.data !== null && state.data.length > 0) {
                            //         dispatch(attendanceTimeAction(route.params.useInfor.id, route.params.useInfor.token, page, "attendance_time"))
                            //     }
                            // }}
                            data={attendanceList}
                            renderItem={({ item, index }) => {
                                // let text = item.type === 1 ?
                                //     checkTimeIn(time(item.created_at, route.params.companyInfor.timezone),
                                //         route.params.companyInfor.opened_at)
                                //         ?
                                //         "On Time" : 'Later'
                                //     :
                                //     checkTimeOut(time(item.created_at, route.params.companyInfor.timezone)
                                //         , route.params.companyInfor.closed_at)
                                //         ?
                                //         "On Time" : 'Early'
                                return <View style={{
                                    flexDirection: 'column', borderBottomWidth: 1,
                                    borderBottomColor: colors.line, marginLeft: 24, marginRight: 24, marginTop: 10, marginBottom: 10
                                }}>
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between',
                                        padding: 10
                                        , alignItems: 'center'
                                    }}>
                                        <Text style={{ color: colors.black, fontSize: 14, fontWeight: 'bold' }}>{
                                            FormatDate(item.created_at, "day") + "/" + FormatDate(item.created_at, "month") + "/" + FormatDate(item.created_at, "year")
                                        }</Text>
                                        <Text style={{ color: colors.black, fontSize: 14, fontWeight: 'bold' }}>

                                            {/* {
                                                (les(time(item.created_at, route.params.companyInfor.timezone).getHours())) + " : "
                                                + les((time(item.created_at, route.params.companyInfor.timezone).getMinutes()))
                                            } */}
                                        </Text>
                                        <Text style={{
                                            color: text === 'On Time' ? colors.blue :
                                                text === 'Later' ? colors.red : colors.yellow, fontSize: 12, fontWeight: 'bold'
                                            , padding: 10, textAlign: 'center', textAlignVertical: 'center'
                                            , borderWidth: 1, borderColor:
                                                text === 'On Time' ? colors.blue :
                                                    text === 'Later' ? colors.red : colors.yellow, width: 90,
                                            borderRadius: 10,
                                        }}>
                                            {/* {
                                               (item.type === 1 ? "Checkin " : "Checkout " )+ text
                                            } */}
                                        </Text>
                                    </View>
                                </View>
                            }}>
                        </FlatList>
                    </View>
            }
        </ImageBackground>
    </View>
  );
};

const les = (val) => {
  return (val + "").length < 2 ? "0" + val : val;
}
const checkTimeIn = (time1, time2) => {
  let time = time2.split(':')
  let a = new Date(time1);
  let b = new Date();
  b.setHours(time[0]);
  b.setMinutes(time[1]);
  if ((a.getHours()) < b.getHours()) {
      return true;
  } else if ((a.getHours()) == b.getHours() && a.getMinutes() <= b.getMinutes()) {
      return true;
  } else {
      return false;
  }

}
const checkTimeOut = (time1, time2) => {
  let time = time2.split(':')
  let a = new Date(time1);
  let b = new Date();
  b.setHours(time[0]);
  b.setMinutes(time[1]);
  if ((a.getHours()) > b.getHours()) {
      return true;
  } else if ((a.getHours()) == b.getHours() && a.getMinutes() >= b.getMinutes()) {
      return true;
  } else {
      return false;
  }

}
const styles = StyleSheet.create({
  container_body :{
    flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center'
  }

  
})


export default AttendanceComponent;
