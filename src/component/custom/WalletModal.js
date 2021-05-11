import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors, fonts } from '../../res/style/theme';
// import { colors, fonts } from '../../../res/style/theme';
import Modals from './Modals';
// import Modals from '../../custom/Modals';
import TextInputAnimated from './TextInputAnimated';
// import TextInputAnimated from '../../custom/TextInputAnimated';




const WalletModal = forwardRef((props, ref) => {
   // console.log('props.cardName',props.cardName);
   // console.log('props.money',props.money);
   const modalRef = useRef();
   const [cardName, setCardName] = useState('');
   const [money, setMoney] = useState('');
   const [NgNhan, setNgNhan] = useState('');

   const onCancel = () => {
      onClose();
   };
   const onClose = () => {
      setCardName(props.cardName);
      setMoney(String(props.money));
      modalRef.current.close();
   };
   useImperativeHandle(ref, () => ({
      open: () => modalRef.current.open(),
      close: () => onClose(),
   }));
   const onSubmit = () => {
      if (cardName === '' || money === '') {
         Alert.alert('Lưu ý', 'Bạn phải nhập đầy đủ thông tin ');
      } else {
         props.onSubmit(cardName, parseInt(money));
         // modalRef.current.close();
      }
   };
   return (
      <Modals ref={modalRef}>
         <View style={styles.edit}>
            <Text style={styles.titleEdit}>{props.modalTitle}</Text>
            <TextInputAnimated
               style={styles.input}
               label="Thời gian"
               value={cardName}
               onChangeText={(text) => setCardName(text)}
               onPressClear={() => setCardName('')}
            />
            <TextInputAnimated
               keyboardType="number-pad"
               style={styles.input}
               label="Lý do"
               value={money}
               onChangeText={(text) => setMoney(text)}
               onPressClear={() => setMoney('')}
            />
            <TextInputAnimated
               keyboardType="number-pad"
               style={styles.input}
               label="Người nhận"
               value={NgNhan}
               onChangeText={(text) => setNgNhan(text)}
               onPressClear={() => setNgNhan('')}
            />
            <View style={styles.viewBtn}>
               {/* //submit */}
               <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                  <Text style={styles.txtBtn}>{props.textSubmit}</Text>
               </TouchableOpacity>
               {/* //cancel */}
               <TouchableOpacity onPress={onCancel} style={[styles.btn, { backgroundColor: colors.red1 }]}>
                  <Text style={styles.txtBtn}>Hủy</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modals>
   );
});
export default WalletModal;

WalletModal.defaultProps = {
   cardName: '',
   money: '',
   onSubmit: () => {},
};

const styles = StyleSheet.create({
   edit: {
      backgroundColor: colors.white,
      width: '80%',
      borderRadius: 10,
      paddingVertical: 24,
   },
   titleEdit: {
      fontSize: 20,
      textAlign: 'center',
      color: colors.black,
      fontFamily: fonts.bold,
   },
   input: {
      marginTop: 20,
   },
   viewBtn: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 20,
   },
   btn: {
      backgroundColor: colors.green,
      borderRadius: 8,
      padding: 12,
      width: '40%',
   },
   txtBtn: {
      fontSize: 18,
      fontFamily: fonts.bold,
      color: colors.white,
      textAlign: 'center',
   },
   action: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 8,
      right: 8,
   },
});
