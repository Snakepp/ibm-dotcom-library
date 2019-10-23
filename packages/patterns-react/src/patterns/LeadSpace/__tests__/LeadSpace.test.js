import React from 'react';
import { mount } from 'enzyme';
import LeadSpace from '../LeadSpace';

require('../../../internal/FeatureFlags');

jest.mock('../../../internal/FeatureFlags.js', () => ({
  LEADSPACE: true,
}));

describe('<LeadSpace />', () => {
  it('renders pattern with required title', () => {
    const leadspace = mount(<LeadSpace title="testing" />);
    expect(leadspace.find('.bx--leadspace')).toHaveLength(1);
  });

  it('renders pattern with gradient', () => {
    const leadspace = mount(<LeadSpace title="testing" gradient={true} />);
    expect(leadspace.find('.bx--leadspace--gradient')).toHaveLength(1);
  });
});
