import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Text
} from 'react-native';
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageElement = ({imageUrl, handleVisible, id,totalComments, handleImage}) => {
  const commentLength = id &&  totalComments && totalComments?.filter(c => c.imageId === id)?.length;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        handleVisible(true);
        handleImage(imageUrl, id);
      }}>
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.thumbnailComment} >
        <Icon name="comment" size={15} color="#900" />
        {commentLength ? <Text>{commentLength}</Text>: null}
        </View>
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
    borderWidth: 1,
    borderColor: 'thistle',
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  thumbnailComment: {
    flexDirection: 'row',
  }
});

ImageElement.propTypes = {
  imageUrl: PropTypes.string,
  handleVisible:PropTypes.func,
  id: PropTypes.any,
  totalComments: PropTypes.array,
  handleImage: PropTypes.func
};

export default ImageElement;
