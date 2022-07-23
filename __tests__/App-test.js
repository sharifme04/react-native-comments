/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockStore = configureMockStore();
const store = mockStore({});

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});


test('renderer snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
