import React, {useState} from 'react';
import {
  StyleSheet,
  Platform,
  View,
  TextInput,
  Button,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from "prop-types";
import {addComment, deleteComment, updateComment} from '../actions/comment';

const UserComments = ({id}) => {
  const dispatch = useDispatch();

  const [Comments, setComments] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [commentObj, setCommentObj] = useState({});
  const [showComment, setShowComment] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const addedcomments = useSelector(state => state.commentsReducer?.comments);

  const AddToComments = () => {
    let temp = {
      commentId: GenerateUniqueID(),
      comment: commentValue,
      imageId: id,
    };
    setComments([...Comments, temp]); // Adds comment to Array
    setCommentValue('');
    dispatch(addComment(temp));
    setIsUpdate(false);
  };

  const deletToComment = commentId => {
    dispatch(deleteComment(commentId));
    setIsUpdate(false);
  };

  const GenerateUniqueID = () => {
    return Math.floor(Math.random() * Date.now()).toString();
  };

  const updateToComment = () => {
    // console.log('edit clicked');
    let temp = {
      commentId: commentObj.commentId,
      comment: commentValue,
      imageId: commentObj.imageId,
      id: commentObj.id,
    };
    dispatch(updateComment(temp));
    setCommentValue('');
    setIsUpdate(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.comment_container}>
        <TextInput
          style={styles.input_txt}
          onChangeText={text => setCommentValue(text)}
          placeholder="Comment here ..."
          value={commentValue}
        />
        <Button
          title={isUpdate ? 'Update' : 'Post'}
          onPress={() => (isUpdate ? updateToComment() : AddToComments())}
        />
      </View>

      {addedcomments
        ?.filter(c => c.imageId === id)
        .map(c => {
          return (
            <View style={styles.showComment_container} key={c.commentId}>
              <Icon name="comment" size={15} color="#900"style={styles.commentIcon} />
              <Text style={styles.text}>{c.comment}</Text>
              <View style={styles.custom}>
              <Icon
                name="edit"
                size={15}
                color="#000"
                style={styles.text}
                onPress={() => {
                  setCommentValue(c.comment.toString());
                  setCommentObj(c);
                  setIsUpdate(true);
                }}
              />
              <Icon
                name="trash"
                size={15}
                style={styles.text}
                color="#000"
                onPress={() => deletToComment(c.id)}
              />
              </View>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comment_container: {
    minHeight: 40,
    flexDirection: 'row',
    marginTop: -60,
    marginLeft: Platform.OS === 'ios' ? 9 : null
  },
  input_txt: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 0,
  },
  showComment_container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: 10,
    paddingLeft: 5,
  },
  text: {
    padding: 5
  },
  custom: {
    flexDirection: 'row',
    marginLeft: 'auto',
    padding: 5,
  },
  commentIcon: {
    padding: 15
  }
});


UserComments.propTypes = {
  id: PropTypes.any
};

export default UserComments;