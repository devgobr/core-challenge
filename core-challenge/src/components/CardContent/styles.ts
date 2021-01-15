import styled from 'styled-components';
import { HeadingSmall as HS} from '../HeadingSmall';
import { SubtitleSmall as SS} from '../SubtitleSmall';
import { Paragraph as P} from '../Paragraph';
import tokens from '~tokens';

export const HeadingSmall = styled(HS)`
  margin-bottom: ${tokens.spacingStackXxxs};
  margin-top: ${tokens.spacingStackXxxs};
`;

export const SubtitleSmall = styled(SS)`
  margin-bottom: ${tokens.spacingStackXxs};
`;

export const Paragraph = styled(P)`
  margin-bottom: ${tokens.spacingStackSm};
`;

