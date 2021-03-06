import './index.scss';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { DDS_LIGHTBOX_MEDIA_VIEWER } from '../../../internal/FeatureFlags';
import LightboxMediaViewer from '../LightboxMediaViewer';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';

if (DDS_LIGHTBOX_MEDIA_VIEWER) {
  storiesOf('Components|LightboxMediaViewer', module)
    .addDecorator(withKnobs)
    .addParameters({
      readme: {
        sidebar: readme,
      },
    })
    .add('Default', () => {
      const images = {
        '512 x 512 (1:1)':
          'https://dummyimage.com/512x512/ee5396/161616&text=1:1',
        '1024 x 512 (2:1)':
          'https://dummyimage.com/1024x512/ee5396/161616&text=2:1',
        '1280 x 720 (16:9)':
          'https://dummyimage.com/1280x720/ee5396/161616&text=16:9',
        '3000 x 1200 (16:9)':
          'https://dummyimage.com/3000x1200/ee5396/161616&text=16:9',
        '200 x 750 (15:4)':
          'https://dummyimage.com/200x750/ee5396/161616&text=15:4',
        '600 x 550 (12:11)':
          'https://dummyimage.com/600x550/ee5396/161616&text=12:11',
      };

      const media = {
        src: select('Image', images, images['1280 x 720 (16:9)']),
        alt: 'Image alt text',
        title: text(
          'title (required)',
          'Curabitur malesuada varius mi eu posuere'
        ),
        description: text(
          'description (required)',
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est.Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Here are some common categories:`
        ),
        type: 'image',
        active: false,
        srcThumb: () => this.src,
      };

      return <LightboxMediaViewer media={media} open={boolean('open', true)} />;
    })
    .add('Embedded Video Player', () => {
      const media = {
        src: '0_uka1msg4',
        alt: 'Image alt text',
        title: text(
          'title (required)',
          'Curabitur malesuada varius mi eu posuere'
        ),
        description: text(
          'description (required)',
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est.Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Here are some common categories:`
        ),
        type: 'video',
        active: false,
        srcThumb: '',
      };

      return <LightboxMediaViewer media={media} open={boolean('open', true)} />;
    });
}
