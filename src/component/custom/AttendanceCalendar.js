import React from 'react';
import { View, Text, Image, TouchableOpacity, Picker,ScrollView } from 'react-native';
import { colors } from '../../res/style/theme';

// import { ScrollView } from 'react-native-gesture-handler';
import PickerYearMonth from './PickerYearMonth';
const getDateCurrent = (year, month, date) => {
    if (month === 0) {
        console.log(year, month, "date");
        date.setDate(31);
    } else if (month === 1 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
        date.setDate(29);
    } else if (month === 1 && year % 4 !== 0) {
        date.setDate(28);
    } else if (month === 2) {
        date.setDate(31);
    } else if (month === 3) {
        date.setDate(30);
    } else if (month === 4) {
        date.setDate(31);
    } else if (month === 5) {
        date.setDate(30);
    } else if (month === 6) {
        date.setDate(31);
    } else if (month === 7) {
        date.setDate(31);
    } else if (month === 8) {
        date.setDate(30);
    } else if (month === 9) {
        date.setDate(31);
    } else if (month === 10) {
        date.setDate(30);
    } else if (month === 11) {
        date.setDate(31);
    }
}
export default CalendarAttendance = ({ style, listAttendace, getListAttendanceFollowMonth, companyInfo, time }) => {
    const [year, setYear] = React.useState(new Date().getFullYear());
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [day, setDay] = React.useState(new Date().getDate());
    const [dayOfMonth, setDayOfMonth] = React.useState([]);
    const [loadCurrent, setLoadCurrent] = React.useState(true);
    const [nameDayOfWeek, setNameDayOfWeek] = React.useState(['Sun', 'Mon', 'Tus', 'Wes', 'Thu', 'Fri', 'Sat']);
    const [isShow, setIsShow] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const [scrollRef,setScrollRef] = React.useState(React.createRef());
    if (listAttendace.length > 0 && !loader) {
        setLoadCurrent(true);
        setLoader(true);
    }
    if (loadCurrent && listAttendace !== null) {
        const date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        getDateCurrent(date.getFullYear(), month, date);
        let l = [];
        for (let i = 1; i <= date.getDate(); i++) {
            i = i + "";
            if (i.length < 2) {
                i = "0" + i;
            }
            let nowDate = new Date();
            nowDate.setYear(date.getFullYear());
            nowDate.setMonth(date.getMonth())
            nowDate.setDate(i);
            var data = [];
            if (listAttendace.length > 0) {
                for (let j = 0; j < listAttendace.length; j++) {
                    let s = new Date(listAttendace[j].created_at);
                    if (s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate()
                        === nowDate.getFullYear() + "-" + (nowDate.getMonth() + 1) + "-" + nowDate.getDate()) {
                        data.push(listAttendace[j]);
                    }
                }
            }
            l.push({
                dayOfWeek: nameDayOfWeek[nowDate.getDay()],
                day: i,
                date: nowDate.getFullYear() + ":" + (nowDate.getMonth()) + ":" + nowDate.getDate(),
                note: data
            })
        }
        setDayOfMonth(l.reverse());
        setLoadCurrent(false);
    }
    const onShowChange = () => {
        setIsShow(!isShow);
    }
    const getDate = (month, year) => {
        listAttendace = [];
        setLoader(false);
        setMonth(month);
        setYear(year);
        setLoadCurrent(true);
        getListAttendanceFollowMonth(month, year)
        onShowChange();

    }
    const prevMonth = () => {
        listAttendace = [];
        setLoader(false);
        setMonth(month - 1 < 0 ? 11 : month - 1);
        setLoadCurrent(true);
        getListAttendanceFollowMonth(month, year)
    }
    const nextMonth = () => {
        listAttendace = [];
        setLoader(false);
        setMonth(month + 1 > 11 ? 0 : month + 1);
        setLoadCurrent(true);
        getListAttendanceFollowMonth(month, year)
    }
    return (
        <View style={style}>
            <View style={{
                justifyContent: 'space-between'
                , alignItems: 'center', flexDirection: 'row'
                , paddingLeft: 16, paddingRight: 16
                , marginTop: 20, marginBottom: 20
            }}>
                <TouchableOpacity
                    onPress={prevMonth} style={{ width: 30, height: 30 }}>
                    <Image style={{
                        height: '100%', width: '100%'
                    }} source={require('../../icon/arl.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={onShowChange}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{(month + 1) + "/" + year}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={nextMonth} style={{ width: 30, height: 30 }}>
                    <Image style={{
                        height: '100%', width: '100%'
                    }} source={require('../../icon/arr.png')}></Image>
                </TouchableOpacity>
            </View>
            <ScrollView
                ref={ref=>{
                    // console.log("123abc",ref);
                    setScrollRef(ref)
                }}>
                {
                    dayOfMonth.length > 0 ?
                        dayOfMonth.map((item, index) => {
                            return <View style={{
                                marginLeft: 16, marginRight: 16
                                , marginTop: 10, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: colors.line, paddingBottom: 10
                            }}>
                                <View style={{
                                    height: 50, width: 50,
                                    paddingRight: 10
                                }}>
                                    <Text style={{ color: colors.black, fontSize: 16 }}>{item.dayOfWeek}</Text>
                                    <Text style={{ color: colors.gray_blur, marginTop: 5, fontSize: 20 }}>{item.day}</Text>
                                </View>
                                <View style={{
                                    paddingLeft: 10, borderLeftColor: colors.line,
                                    borderLeftWidth: 1, flexDirection: 'column', marginRight: 10, marginRight: 10
                                }}>
                                    {
                                        item.note.length > 0 ?
                                            item.note.map((item, index) => {
                                                let text = item.type === 1 ?
                                                    checkTimeIn(time(item.created_at, companyInfo.timezone),
                                                        companyInfo.opened_at)
                                                        ?
                                                        "On Time" : 'Later'
                                                    :
                                                    checkTimeOut(time(item.created_at, companyInfo.timezone)
                                                        , companyInfo.closed_at)
                                                        ?
                                                        "On Time" : 'Early'
                                                return <View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <View style={{
                                                            width:100,
                                                            justifyContent: 'flex-start'
                                                            , marginLeft: 10, marginTop: 5, flexDirection: 'row',
                                                        }}>
                                                            <View style={{
                                                                marginTop: 3,
                                                                height: 10, width: 10, borderWidth: 1, 
                                                                borderColor: text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow
                                                                , backgroundColor: text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow, marginRight: 5
                                                            }}></View>
                                                            <Text>
                                                                {item.type === 1 ? 'Check in' : 'Check out'}
                                                            </Text>
                                                        </View>
                                                        <View style={{
                                                            width: 100,
                                                            marginTop: 3,
                                                            borderColor: text === 'On Time' ? colors.blue :
                                                                text === 'Later' ? colors.red : colors.yellow
                                                            // ,
                                                            // borderWidth: 1,
                                                            //  borderRadius: 10
                                                            , padding: 5, marginTop: 5, marginLeft: 5
                                                            , flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                                                        }}>
                                                            <View style={{
                                                                height: 10, width: 10, borderRadius: 5
                                                                , backgroundColor: text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow
                                                                    , marginRight: 5
                                                            }}></View>
                                                            <Text>{les(time(item.created_at, companyInfo.timezone).getHours())
                                                                + ":"
                                                                + les(time(item.created_at, companyInfo.timezone).getMinutes())}</Text>
                                                        </View>
                                                        <View style={{ justifyContent: 'flex-start'
                                                        , marginLeft: 10, marginTop: 5, flexDirection: 'row',
                                                        width:100 }}>
                                                            <View style={{
                                                                marginTop: 3,
                                                                height: 10, width: 10, borderWidth: 1, borderColor: text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow
                                                                , backgroundColor: text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow, marginRight: 5
                                                            }}></View>
                                                            <Text>
                                                                {text}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    {/* <View style={{
                                                        justifyContent: 'flex-start'
                                                        , marginLeft: 10, marginTop: 5, flexDirection: 'row',
                                                    }}>
                                                        <View style={{
                                                            marginTop: 7,
                                                            height: 3, width: 10, borderRadius: 2
                                                            , backgroundColor:
                                                                text === 'On Time' ? colors.blue :
                                                                    text === 'Later' ? colors.red : colors.yellow, marginRight: 5
                                                        }}></View>
                                                        <Text>
                                                            {item.message}
                                                        </Text>
                                                    </View> */}
                                                </View>
                                            }) : null
                                    }
                                </View>
                            </View>
                        })
                        : null
                }
            </ScrollView>
            <PickerYearMonth onShowChange={onShowChange}
                isShow={isShow} date={getDate}
                isMonth={month}></PickerYearMonth>
        </View>
    )
}
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