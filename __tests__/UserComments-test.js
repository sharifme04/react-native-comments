import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import UserComments from '../app/components/UserComments';

const mockStore = configureMockStore();
const store = mockStore({});

test('UserComments ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <UserComments />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('UserComments empty images ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <UserComments id={null} />,
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('UserComments with images ', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <UserComments id={54674} />,
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
