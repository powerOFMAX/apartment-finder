import styled from 'styled-components'

export const Wrapper = styled.div`
  .radio-group {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 7px 0px;
    display: flex;
    align-items: center;
  }

  .radio__text {
    font-size: 15px;
  }

  .radio__input:checked + .radio__visual-input::before {
    background-color: ${(props) => props.primaryColor};
    border-color: ${(props) => props.primaryColor};
  }

  .radio__input:checked + .radio__visual-input::after {
    opacity: 1;
  }

  .radio__input {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
    margin: 0;
  }

  .radio__visual-input {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 10px;

    &::before {
      content: "";
      position: relative;
      margin-right: 8px;
      display: inline-block;
      height: 18px;
      width: 18px;
      background-color: #FFF;
      border: 1px solid #BABABA;
      border-radius: 50%;
      transition: background-color .25s ease-out, border-color .25s ease-out;
    }
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      left: 0;
      right: 0;
      margin: auto;
      width: 8px;
      height: 8px;
      background-color: ${(props) => props.secondaryColor};
      border-radius: 50%;
      opacity: 0;
      box-shadow: 0 1px 2px rgba(0,0,0,.5);
      transition: opacity .2s ease-out;
    }
  }
`
