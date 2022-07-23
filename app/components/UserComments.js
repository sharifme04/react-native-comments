import React, {useState, useRef} from 'react';
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
import {addComment, deleteComment, updateComment} from '../actions/comment';

const UserComments = ({id}) => {
 // const InputRef = useRef();
  const dispatch = useDispatch();

  const [Comments, setComments] = useState([]);
  const [commentValue, setCommentValue] = useState('');
  const [commentObj, setCommentObj] = useState({});
  const [showComment, setShowComment] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const addedcomments = useSelector(state => state.commentsReducer?.comments);
  //console.log('addedcomments', addedcomments);

  const AddToComments = () => {
    let temp = {
      commentId: GenerateUniqueID(),
      comment: commentValue,
      imageId: id,
    };
    setComments([...Comments, temp]); // Adds comment to Array
    //InputRef.current.clear(); // This clears the TextInput Field
    setCommentValue('');
    // console.log('temp line 19', temp);
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
  //console.log('commentValue 60', commentValue);
  //console.log('commentObj',commentObj);
  return (
    <View style={styles.container}>
      <Icon name="comment" size={30} color="#900" />

      <View style={styles.comment_container}>
        <TextInput
          style={styles.input_txt}
          onChangeText={text => setCommentValue(text)}
          placeholder="Comment here ..."
          value={commentValue}
          //ref={InputRef}
        />
        <Button
          title={isUpdate ? 'Update' : 'Post'}
          onPress={() => (isUpdate ? updateToComment() : AddToComments())}
        />
      </View>

      {addedcomments
        ?.filter(c => c.imageId === id)
        .map(c => {
         // console.log('c.comment', c.comment);
          return (
            <View style={styles.showComment_container} key={c.commentId}>
              <Icon
                name="edit"
                size={15}
                color="#000"
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
                <Text style={styles.text} >{c.comment}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default UserComments;

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
    marginLeft: Platform.OS === 'ios' ? 9 : null,
    // marginBottom: 40,
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
    width: '60%',
  //  minHeight: 30,
  //paddingHorizontal: 20,
  paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#B0C4DE',
    justifyContent: 'center',
    marginTop: 10,
  },
  text:{
    paddingLeft: 10,
  }
});
