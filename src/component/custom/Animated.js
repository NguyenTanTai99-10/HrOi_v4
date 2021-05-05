import React, {Component} from 'react';
import {Text, View, Animated, Platform} from 'react-native';

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 6000,
    }).start(() => this.props.offAnimatedState());
  }
  render() {
    const marginTop = this.state.animated.interpolate({
      inputRange: [0, 0.1, 0.5, 0.7, 1],
      outputRange: [-200, (Platform.OS==='ios' ? 20 : 0 ), (Platform.OS==='ios' ? 20 : 0 ),(Platform.OS==='ios' ? 20 : 0 ), -200],
    });

    return (
      <View
        style={{
          alignItems: 'center',
        
          zIndex: 2,
          position: 'absolute',
          width: '100%',
        }}>
        <View
          style={{
            alignItems: 'center',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'white',
            width: '80%',
          }}>
          <Animated.View
            style={{
              borderRadius: 10,
              paddingHorizontal: 10,
              height: 40,

              marginTop: marginTop,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{this.props.titlte}</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}
