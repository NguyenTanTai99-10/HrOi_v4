import React, {Component} from 'react';
import {Text, View, Animated, Platform} from 'react-native';
import Sizes from '../../utils/Sizes';

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
        
          zIndex: Sizes.s4,
          position: 'absolute',
          width: '100%',
        }}>
        <View
          style={{
            alignItems: 'center',
            borderBottomLeftRadius: Sizes.s40,
            borderBottomRightRadius: Sizes.s400,
            backgroundColor: 'white',
            width: '80%',
          }}>
          <Animated.View
            style={{
              borderRadius: Sizes.s20,
              paddingHorizontal: Sizes.s20,
              height: Sizes.s80,

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
