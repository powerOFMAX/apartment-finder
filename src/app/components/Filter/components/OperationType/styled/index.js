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

  .chevron {
    width: 20px;
    height: 20px;
    transform: ${(props) => (!props.accordion ? 'rotate(90deg)' : 'rotate(180deg)')};
    transition: all 0.3s ease;
    width: 15px;
    margin-top: 16px;
    height: 15px;
    background-color: #575757;
    mask-image: url('https://image.flaticon.com/icons/svg/271/271220.svg');
    display: inline-block;
  }
`
