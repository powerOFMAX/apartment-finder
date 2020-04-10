import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   > div {
    display: flex;
    justify-content: space-between;
  }

  .operation-list {
    padding-left: 5px;
    padding-top: 10px;
    overflow: hidden;
    transition: all 0.3s ease;

    ${(props) => !props.accordion && css`
      max-height: 0;
      padding-top: 0;
    `}
  }
`
