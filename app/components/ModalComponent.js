import React from 'react';
import {StyleSheet, Text, View, Image, Modal, ScrollView} from 'react-native';
import UserComments from './UserComments';
//import Modal from "react-native-modal";

const ModalComponent = ({modalVisible, modalImage, id, handleVisible}) => {
  return (
    <Modal
      style={styles.modal}
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      propagateSwipe={true}
      scrollTo={() => {}}
      scrollOffset={1}
      onRequestClose={() => {
        handleVisible(!modalVisible);
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.modal}>
          <Text style={styles.text} onPress={() => handleVisible(false)}>
            Close
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: modalImage,
            }}
          />
        </View>
        <UserComments id={id} />
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    //flex: 1,
    padding: 40,
    //minHeight: 600,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  imageContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    width: null,
    height: 800,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end',
    borderColor: '#fff',
  },
  comment: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff',
    flex: 1,
  },
});
export default ModalComponent;
