import styled from 'styled-components'
import { maxWidth } from '../../../config/theme'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1180px;
  padding: 20px 20px;
  box-sizing: border-box;
  margin: auto;

  .left-container {
    width: 302px;
    ${maxWidth.medium`
      width: auto;
      padding-bottom: 20px;
    `};
  }

  .right-container {
    width: calc(100% - 302px);
    padding-left: 10px;
    box-sizing: border-box;
    ${maxWidth.medium`
      width: auto;
      padding: 0;
    `};
  }

  ${maxWidth.medium`
    flex-direction: column;
  `};
`
