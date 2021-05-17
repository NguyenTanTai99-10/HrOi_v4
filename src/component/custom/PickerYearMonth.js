import React from 'react';
import { Image, View, Text, TouchableOpacity,FlatList } from 'react-native';
import { colors } from '../../res/style/theme';

// import { FlatList } from 'react-native-gesture-handler';


export default PickerYearMonth = ({ isShow, onShowChange, isMonth ,date}) => {
    const [month, setMonth] = React.useState([
        'Jan', 'Feb', "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ])
    const [year, setYear] = React.useState(new Date().getFullYear());
    const onYearPrev = () => {
        setYear(year - 1 === 2010 ? new Date().getFullYear() : year - 1);
    }
    const onYearNext = () => {
        setYear(year + 1 > new Date().getFullYear() ? new Date().getFullYear() : year + 1);
    }
    return (
        isShow ?
            <View style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ height: '100%', width: '100%', opacity: 0.0, backgroundColor: colors.black, position: 'absolute' }}
                    activeOpacity={150}
                    onPress={onShowChange}>

                </TouchableOpacity>
                <View style={{
                    height: 300, width: 300, backgroundColor: colors.white
                    , marginTop: -20, borderWidth: 1, borderColor: colors.red, borderRadius: 10
                }}>
                    <View style={{
                        width: '100%', height: 40, borderBottomWidth: 1
                        , borderBottomColor: colors.line
                        , justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            onPress={onYearPrev}
                            style={{ width: 30, height: 30 }}>
                            <Image style={{ width: '100%', height: '100%' }}
                                source={require('../../icon/icon_prev.png')}>

                            </Image>
                        </TouchableOpacity>
                        <Text>
                            {year}
                        </Text>
                        <TouchableOpacity
                            onPress={onYearNext}
                            style={{ width: 30, height: 30 }}>
                            <Image style={{
                                width: '100%', height: '100%'
                                , tintColor: colors.black
                            }}
                                source={require('../../icon/icon_next.png')}>

                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <FlatList
                            data={month}
                            keyExtractor={item => item}
                            numColumns={4}
                            renderItem={({ item, index }) => {
                                return <TouchableOpacity
                                    onPress={()=>{
                                        setYear(year)
                                        date(index,year);
                                    }}>
                                    <View style={{
                                        margin: 15, padding: 10
                                        , borderWidth: isMonth === index ? 1 : 0
                                        , borderBottomColor: isMonth === index ? colors.red : colors.transparent
                                    }}>
                                        <Text>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            }}>
                        </FlatList>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={onShowChange}
                    style={{
                        height: 40, width: 300, justifyContent: 'center', alignItems: 'center',
                        backgroundColor: colors.white
                        , marginTop: 10, borderWidth: 1, borderColor: colors.red, borderRadius: 10
                    }}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View> : null
    )
}