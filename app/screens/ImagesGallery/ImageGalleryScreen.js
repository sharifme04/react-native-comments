import React from 'react';
import PropTypes from "prop-types";
import {ScrollView, View} from 'react-native';
import ImageElement from '../../components/ImageElement';
import styles from './ImageGalleryStyle';

const ImageGalleryScreen = ({images, handleVisible,totalComments, handleImage}) => {
  const imagesList = images?.map(e => (
    <ImageElement
      key={e.id}
      imageUrl={e?.src?.large2x}
      id={e.id}
      handleVisible={handleVisible}
      handleImage={handleImage}
      totalComments={totalComments}
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

ImageGalleryScreen.propTypes = {
  images: PropTypes.array,
  handleImage: PropTypes.func,
  handleVisible:PropTypes.func,
  totalComments: PropTypes.array
};

export default ImageGalleryScreen;
