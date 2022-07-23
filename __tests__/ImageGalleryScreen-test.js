import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ImageGalleryScreen from '../app/screens/ImagesGallery/ImageGalleryScreen';

const fakerimages = [
  {
    alt: 'Person Walking Between Green Forest Trees',
    avg_color: '#283419',
    height: 1667,
    id: 15286,
    liked: false,
    photographer: 'Luis del Río',
    photographer_id: 1081,
    photographer_url: 'https://www.pexels.com/@luisdelrio',
    src: {},
    url: 'https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/',
    width: 2500,
  },
  {
    alt: 'Scenic View Of Snow Capped Mountains During Night',
    avg_color: '#557088',
    height: 2255,
    id: 3408744,
    liked: false,
    photographer: 'stein egil liland',
    photographer_id: 144244,
    photographer_url: 'https://www.pexels.com/@therato',
    src: {},
    url: 'https://www.pexels.com/photo/scenic-view-of-snow-capped-mountains-during-night-3408744/',
    width: 3546,
  },
];

test('ImageGalleryScreen ', () => {
  const tree = renderer.create(<ImageGalleryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ImageGalleryScreen empty images ', () => {
  const tree = renderer.create(<ImageGalleryScreen images={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ImageGalleryScreen with images ', () => {
  const tree = renderer
    .create(
      <ImageGalleryScreen
        handleVisible={() => {}}
        handleImage={() => {}}
        images={fakerimages}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
