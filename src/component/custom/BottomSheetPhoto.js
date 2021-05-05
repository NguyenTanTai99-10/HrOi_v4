import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../../res/image';
import Sizes from '../../utils/Sizes';

const BottomSheetPhoto = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [selectItem, setSelectItem] = useState('');
  const time = 300;
  const modalHeight = props.modalHeight;
  const animation = new Animated.Value(modalHeight);

  useImperativeHandle(ref, () => ({
    open: () => {
      onShow();
    },
    close: () => {
      onHide();
    },
  }));
  const slideUp = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: time,
      useNativeDriver: true,
    }).start();
  };
  const slideDown = () => {
    Animated.timing(animation, {
      toValue: modalHeight,
      duration: time,
      useNativeDriver: true,
    }).start();
  };
  const onShow = () => {
    setShow(true);
  };
  const onHide = () => {
    slideDown();
    setTimeout(() => {
      setShow(false);
    }, time);
  };
  //   const renderItems = ({ item, index }) => (
  //       <View style={{justifyContent: 'center', alignItems: 'center', padding: Sizes.h16 }} >
  //            <TouchableOpacity onPress={() => { props.onPress(); setSelectItem(item);  }} style={{
  //       padding: Sizes.h16, borderWidth: 1,
  //       backgroundColor:'#bb64a1',
  //       width:150,
  //       borderRadius:6,
  //       borderColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  //     }}>
  //       <Text style={{color:'white'}}>{item.title}</Text>
  //       {/* {selectItem===item?<Image source={require("../../res/image/img/arrow-up.png")} style={{ width: Sizes.h16, height: Sizes.h16, resizeMode: 'contain' }} />:null} */}
  //     </TouchableOpacity>
  //       </View>

  //   )
  useEffect(() => {
    show ? slideUp() : onHide();
  }, [show]);

  return (
    <Modal visible={show} transparent statusBarTranslucent animationType="fade">
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.modal,
                {height: modalHeight, transform: [{translateY: animation}]},
              ]}>
              <View style={styles.title}>
                <Text style={{color: '#bb64a1', fontWeight: '700'}}>
                  {props.title}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: Sizes.h16,
                  marginVertical: Sizes.h16,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.onPressTakePhoto();
                    
                  }}
                  style={{
                    padding: Sizes.h16,
                    borderWidth: 1,
                    backgroundColor: '#bb64a1',
                    width: '70%',
                    borderRadius: 6,
                    borderColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Take Photo</Text>
                  {/* {selectItem===item?<Image source={require("../../res/image/img/arrow-up.png")} style={{ width: Sizes.h16, height: Sizes.h16, resizeMode: 'contain' }} />:null} */}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: Sizes.h16,
                  marginVertical: Sizes.h16,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.onPressLibraryPhoto();
                    
                  }}
                  style={{
                    padding: Sizes.h16,
                    borderWidth: 1,
                    backgroundColor: '#bb64a1',
                    width: '70%',
                    borderRadius: 6,
                    borderColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Choose From Library</Text>
                  {/* {selectItem===item?<Image source={require("../../res/image/img/arrow-up.png")} style={{ width: Sizes.h16, height: Sizes.h16, resizeMode: 'contain' }} />:null} */}
                </TouchableOpacity>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

export default BottomSheetPhoto;
BottomSheetPhoto.defaultProps = {
  modalHeight: Dimensions.get('window').height * 0.4,
  data: [],
  onPress: () => {},
  onPressTakePhoto: () => {},
  onPressLibraryPhoto: () => {},
  
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    height: Sizes.h65,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F5F5F5',
  },
});
