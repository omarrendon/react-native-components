import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {themeStyles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={themeStyles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Open modal" onPress={() => setIsOpen(true)} />
      <Modal animationType="fade" visible={isOpen} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <Text>Modal Text</Text>
            <Button title="Close modal" onPress={() => setIsOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalBody: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
});
