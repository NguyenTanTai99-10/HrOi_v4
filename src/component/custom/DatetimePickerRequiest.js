import React, { useState, useEffect } from 'react';
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
import { colors, screenWidth, screenHeight } from '../../res/style/theme';
import moment from 'moment';
import { useTranslation } from 'react-i18next';




const DatetimePickerRequiest = (props) => {
    useEffect(() => {
        console.log('====================================');
        console.log('props==', props);
        console.log('====================================');
        if (props.showdate === false) {
            setShow(false);

            setShow2(false);

        }
    }, [props])
    const { t, i18n } = useTranslation();
    const [disabled1, setDisabled1] = useState(false);
    const [date, setDate] = useState(new Date());
    const [minDate, setMinDate] = useState(new Date());

    const [DateStart, setDateStart] = useState(t('Ngày bắt đầu'));

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

    //==========================================================================
    const [date2, setDate2] = useState(new Date());
    const [TimeStart, seTimeStart] = useState(t('Thời gian bắt đầu'));
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
    
    return (
        <View>
            <View
                style={{

                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View style={{}}>
                    <Text style={{ fontSize: 15, fontWeight: '700' }}>{t('Chọn ngày bắt đầu')}* </Text>
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
                            borderWidth: 1
                        }}
                        onPress={() => { showDatepicker();setShow(!show) ;setShow2(false); props.OnDismiss() }}>
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
                
            </View>
            {show && (
                <DateTimePicker
                    minimumDate={new Date()}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

        </View>
    )
}

export default DatetimePickerRequiest
