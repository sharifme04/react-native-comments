/**
 * Soniq React Native App @ sharif hossain
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import ImageGalleryScreen from './app/screens/ImagesGallery/ImageGalleryScreen';
import {getImages} from './app/actions/image';
import {getComments} from './app/actions/comment';
import ModalComponent from './app/components/ModalComponent';

const App = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageId, setModalImageId] = useState(null);
  const images = useSelector(state => state.imagesReducer?.images);
  const commentsReducer = useSelector(state => state.commentsReducer);

  //console.log('comments' ,commentsReducer?.comments); 

  useEffect(() => {
    dispatch(getImages());
    dispatch(getComments())
  }, []);

  const handleVisible = visible => setModalVisible(visible);
  const handleImage = (image, id) => {
    setModalImage(image);
    setModalImageId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ModalComponent
        handleVisible={handleVisible}
        modalImage={modalImage}
        modalVisible={modalVisible}
        id={modalImageId}
      />
      <ImageGalleryScreen
        images={images?.photos}
        handleVisible={handleVisible}
        handleImage={handleImage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
