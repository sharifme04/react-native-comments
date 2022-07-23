import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const ImageElement = ({imageUrl, handleVisible,id, handleImage}) => {
  //console.log('imageUrl', imageUrl);
  //console.log(' 15 id',id);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleVisible(true);
        handleImage(imageUrl,id);
      }}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    margin: 2,
    padding: 2,
    height: Dimensions.get('window').height / 4 - 8,
    width: Dimensions.get('window').width / 2 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
});

export default ImageElement;
