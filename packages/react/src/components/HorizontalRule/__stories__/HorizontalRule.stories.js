import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import '@ibmdotcom/styles/scss/components/horizontalrule/_horizontalrule.scss';

import HorizontalRule from '../HorizontalRule';

storiesOf('HorizontalRule', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const styles = {
      solid: '',
      dashed: 'dashed',
    };

    const sizes = {
      small: 'small',
      medium: 'medium',
      large: 'large',
      fluid: '',
    };

    const contrasts = {
      'low-contrast': 'low-contrast',
      'medium-contrast': '',
      'high-contrast': 'high-contrast',
    };

    const weights = {
      thin: '',
      thick: 'thick',
    };

    const words = text(
      'text',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    );

    return (
      <div>
        <div className="bx-grid">
          <h1>
            <b>Grid with no Gutter</b>
          </h1>
          <div className="bx--row bx--no-gutter">
            <div className="bx--col">
              <HorizontalRule
                style={select('style', styles, '')}
                size={select('size', sizes, '')}
                contrast={select('contrast', contrasts, '')}
                weight={select('weight', weights, '')}
              />
            </div>
          </div>
        </div>

        <div className="bx--grid bx--grid--full-width">
          <h1>
            <b>Grid with Gutter</b>
          </h1>
          <div className="bx--row">
            <div className="bx--col">
              <h3>{words}</h3>
              <HorizontalRule
                style={select('style', styles, '')}
                size={select('size', sizes, '')}
                contrast={select('contrast', contrasts, '')}
                weight={select('weight', weights, '')}
              />
              <h3>{words}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  });