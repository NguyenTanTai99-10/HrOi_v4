import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native'
import DateSelector from './custom/DateSelector';


class UnpaidRequiest extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ListDate:[]
        }
    }
    
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
                        this.setState({ListDate: date});
                      }}></DateSelector>
                  </View>

                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 10,
                      borderWidth: 1,
                      height: 40,
                      backgroundColor: '#FFFFFF',

                      borderColor: '#BFBFBF',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      
                    }}>
                      
                      
                    {this.state.ListDate !== '' && (
                      <ScrollView horizontal={true}>
                        {this.state.ListDate.map((item) => {
                          return (
                            <View
                              style={{
                                marginLeft: 5,
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <View
                                style={{
                                  borderRadius: 7,
                                  padding: 5,
                                  backgroundColor: '#e8eff7',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text
                                  style={{
                                    fontWeight: 'bold',
                                    textAlignVertical: 'center',
                                    textAlign: 'center',
                                  }}>
                                  {item.year +
                                    '-' +
                                    (item.month + 1) +
                                    '-' +
                                    item.day}
                                </Text>
                              </View>
                            </View>
                          );
                        })}
                      </ScrollView>
                    )}
                  </View>
                  <View
                    style={{
                      marginHorizontal: 20,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        textAlignVertical: 'center',
                        textAlign: 'right',
                        fontWeight: 'bold',
                        fontSize: 16,
                        marginTop: 10,
                      }}>
                      {`${this.props.t('Số ngày')} : ` +
                        ((this.state.ListDate.length + '').length < 2
                          ? '0' + this.state.ListDate.length
                          : this.state.ListDate.length)}
                    </Text>
                  </View>
                </View>
              

            
        )
    }
}
export default withTranslation()(UnpaidRequiest);
