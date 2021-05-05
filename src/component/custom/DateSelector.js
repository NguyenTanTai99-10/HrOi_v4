import React from 'react';
import { View, Text, TouchableOpacity, Image,FlatList } from 'react-native';
// // import { colors } from '../colors';



const DateSelector  = ({ style, calendarStyle, getAll, oldTime }) => {
    const [mapDate, setMapDate] = React.useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    const [mapMonth, setMapMonth] = React.useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
    const [date, setDate] = React.useState([]);
    const [isloadDate, setIsLoadDate] = React.useState(true);
    const [monthNow, setMonthNow] = React.useState(new Date().getMonth());
    const [yearNow, setYearNow] = React.useState(new Date().getFullYear());
    const [timeSelected, setTimeSelected] = React.useState([]);
    const [loadOldTime,setLoadOldTime] = React.useState(true);
    if(loadOldTime && oldTime !== undefined){
        setTimeSelected(oldTime);
        setLoadOldTime(false);
    }
    const setTime = (dateNow) => {
        if (timeSelected.length > 0) {
            let position = -1;
            let is_checked = false;
            let newArray = [];
            for (let i = 0; i < timeSelected.length; i++) {
                let ob = timeSelected[i];
                if (ob.year === yearNow && ob.month === monthNow
                    && ob.day === dateNow) {
                    is_checked = false;
                    position = i;
                    break;
                } else {
                    is_checked = true;
                }
            }
            // console.log("selected", dateNow, is_checked, position);

            if (is_checked) {
                let a = timeSelected.concat({
                    month: monthNow,
                    year: yearNow,
                    day: dateNow
                });
                setTimeSelected(a)
                getAll(a)
            } else {
                for (let i = 0; i < timeSelected.length; i++) {
                    if (i === position) {

                    } else {
                        newArray.push(timeSelected[i]);
                    }
                }
                setTimeSelected(newArray);
                getAll(newArray)
            }
        } else {
            let a = timeSelected.concat({
                month: monthNow,
                year: yearNow,
                day: dateNow
            });
            setTimeSelected(a)
            getAll(a)
        }
    }
    const monthPrev = () => {
        setMonthNow(monthNow > 0 ? monthNow - 1 : monthNow);
    }
    const monthNext = () => {
        setMonthNow(monthNow < 11 ? monthNow + 1 : monthNow);
    }
    const yearUp = () => {
        setYearNow(yearNow + 1)
    }
    const yearDown = () => {
        setYearNow(yearNow === 2019 ? yearNow : yearNow - 1)
    }
    return (
        <View style={[{
            
            borderWidth: 1, padding: 5, borderColor: "#c3ccd5",
            justifyContent: 'center', borderRadius: 10
            , backgroundColor: "white", alignItems: 'center', width: '100%'
        }, style]}>
            <View style={{
                borderBottomWidth: 1,
                borderBottomColor: "#c3ccd5",
                paddingBottom: 5,
                paddingLeft: 20, paddingRight: 20,
                height: 40, width: '100%', flexDirection: 'row'
                , justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, fontWeight: 'bold', fontSize: 15 }}>{mapMonth[monthNow]}</Text>
                    <Text style={{ fontSize: 16 }}>{yearNow}</Text>
                    <View style={{ marginLeft: 10 ,}}>
                        <TouchableOpacity
                            onPress={yearUp}
                            style={{ height: 20, width: 20 }}>
                            <Image source={require("../../res/image/img/arrow-up.png")}
                                style={{ height: '100%', width: '100%' , position:'absolute' }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={yearDown}
                            style={{ height: 20, width: 20 }}>
                            <Image source={require("../../res/image/img/arrow-down.png")}
                                style={{ height: '100%', width: '100%',position:'absolute' }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={monthPrev}
                        style={{
                            padding: 5,
                            height: 25, width: 25, borderRadius: 15
                            , justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Image source={require('../../res/image/img/arrow-left.png')}
                            style={{ width: 20, height: 20,position:'absolute' }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={monthNext}
                        style={{
                            padding: 5,
                            marginLeft: 2, height: 25, width: 25, borderRadius: 15
                            , justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Image source={require('../../res/image/img/arrow-right.png')}
                            style={{ width: 20, height: 20,position:'absolute' }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <LoadRowDate currentDate={new Date(yearNow, monthNow, 0).getDate()}
                days={new Date(yearNow, monthNow).getDay()}
                dates={mapDate}
                style={[{ width: 40, height: 40, margin: 2, borderRadius: 40 / 2 }, calendarStyle]}
                setDate={setTime}
                selected={timeSelected}
                month={monthNow}
                year={yearNow}></LoadRowDate>
        </View>
    )
}

const LoadRowDate = ({ currentDate, days, dates, style, setDate, selected, month, year }) => {
    let date = 1;
    let view = [];
    for (let i = 0; i < 7; i++) {
        let child = [];
        for (let j = 0; j < 7; j++) {
            let nowDate = date;
            if (i === 0) {
                child.push(<View style={[{
                    justifyContent: 'center', alignItems: 'center'
                }, style]}>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 15 }}>{dates[j]}</Text>
                </View>
                )
            } else if (i === 1 && j < days) {
                child.push(<View style={[{
                    justifyContent: 'center', alignItems: 'center'
                }, style]}>
                    <Text>{" "}</Text>
                </View>
                )
            } else if (date > currentDate) {
                break;
            } else {
                child.push(
                    <View style={[{
                        justifyContent: 'center'
                        , alignItems: 'center'
                    },
                    selected.map(item => {
                        if (item.month === month && item.year === year && item.day === date) {
                            return {
                                borderRadius: 10, backgroundColor: "#82ca9c"
                            }
                        } else {
                            return {}
                        }
                    }), style]}>
                        <TouchableOpacity
                            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', margin: 5 }}
                            onPress={() => {
                                setDate(nowDate)
                            }}>
                            <Text style={[{
                                textAlign: 'center'
                                , textAlignVertical: 'center'
                            }, selected.map(item => {
                                // if (item.month === month && item.year === year && item.day === date) {
                                //     return {
                                //         color: "#ffffff"
                                //     }
                                // } else {
                                //     return {color: "black"}
                                // }
                            })]}>{nowDate}</Text>
                        </TouchableOpacity>
                    </View >
                )
                date++
            }
        }
        view.push(
            <View style={{ flexDirection: 'row' }}>
                {child}
            </View>
        )
    }
    return <View>
        {view}
    </View>;
}


export default DateSelector

