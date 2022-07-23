import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import ImageElement from '../../components/ImageElement';
import styles from './ImageGalleryStyle';

const ImageGalleryScreen = ({images, handleVisible, handleImage}) => {
  //console.log('ImageGalleryScreen  11', images);
  const imagesList = images?.map(e => (
    <ImageElement
      key={e.id}
      imageUrl={e?.src?.large2x}
      id={e.id}
      handleVisible={handleVisible}
      handleImage={handleImage}
    />
  ));

  return (
    <View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {imagesList}
      </ScrollView>
    </View>
  );
};

export default ImageGalleryScreen;
