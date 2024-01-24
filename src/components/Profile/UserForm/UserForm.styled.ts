import styled from '@emotion/styled';
import { palette } from '../../../styles/theme';

//ProfilePage style
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media screen and (min-width: 1441px) {
    flex-direction: row-reverse;
    gap: 48px;
  }
`;

const WrapForm = styled.div`
  @media screen and (min-width: 1441px) {
    border-right: 1px solid ${palette.colors.white30};
    padding: 0 54px 0;
  }
`;

export { Wrap, WrapForm };
