import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 15px 0;

  > div {
    display: flex;
    justify-content: space-between;
  }

  .search-wrapper {
    display: flex;
    overflow: hidden;
    transition: all 0.3s ease;
    align-items: center;
    ${(props) => !props.accordion && css`
      max-height: 0;
      padding-top: 0;
    `}
  }

  .search-button {
    border-color: transparent;
    min-width: 38px;
    height: 38px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 2px;
    margin-left: 6px;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.15);
    background-color: #fff;

    &:active {
      color: #fff;
      background-color: ${(props) => props.theme.colors.malibu};
    }
    &:hover {
      border: 1px solid ${(props) => props.theme.colors.acadia};
      box-shadow: 0 0 3px 0 rgba(0,0,0,.05);
    }
  }

  .search-input {
    outline: none;
    margin: 10px 0;
    height: 40px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid #ddd;
    line-height: 36px;
    padding: 0 15px;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.03);
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 0 4px 0 rgba(3,3,3,.25);
    }
    &:focus {
      border-color: ${(props) => props.theme.colors.summerSky};
    }
  }
`
