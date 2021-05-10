
import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native'
import DateSelector from './custom/DateSelector';
import TextInputAnimated from './custom/TextInputAnimated';


class Late extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListDate: [],
            DateStart: ''
        }
    }

    onChangeDateStart = (text) => {
        this.setState({ DateStart: text });
    };

    onClearDateStart = () => {
        this.setState({ DateStart: '' });
    };

    render() {
        return (
            <View>
                <View
                    style={{
                        marginHorizontal: 20,
                        marginTop: 20,
                        // marginVertical: 20,
                    }}>
                    <DateSelector
                        getAll={(date) => {
                            console.warn(date);
                            this.setState({ ListDate: date });
                        }}></DateSelector>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '700',
                            marginTop: 10,
                            marginLeft: 20,
                        }}>
                        {this.props.t('Thời gian')} *
                  </Text>
                    <View
                        style={{
                            borderColor: '#BFBFBF',
                            marginTop: 10,
                        }}>
                        <TextInputAnimated
                            //  isPassword
                            //  style={{height:50}}
                            label={this.props.t('Thời gian (giờ,phút)')}
                            value={this.state.DateStart}
                            onChangeText={this.onChangeDateStart}
                            onPressClear={this.onClearDateStart}
                        />
                    </View>
                </View>


            </View>



        )
    }
}
export default withTranslation()(Late);

