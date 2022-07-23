import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImageElement from '../app/components/ImageElement';

test('ImageElement ', () => {
  const tree = renderer.create(<ImageElement />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ImageElement empty images ', () => {
  const tree = renderer.create(<ImageElement imageUrl={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ImageElement with images ', () => {
  const tree = renderer
    .create(
      <ImageElement
        handleVisible={() => {}}
        handleImage={() => {}}
        key={4343}
        imageUrl={
          'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg'
        }
        id={37823}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
