import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ModalComponent from '../app/components/ModalComponent';

const mockStore = configureMockStore();
const store = mockStore({});

test('ModalComponent ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ModalComponent />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('ModalComponent empty images ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ModalComponent modalImage={''} handleVisible={() => {}} id={null} />,
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('ModalComponent with images ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ModalComponent
          handleVisible={() => {}}
          modalImage={
            'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg'
          }
          modalVisible={true}
          id={1234}
        />
        ,
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
