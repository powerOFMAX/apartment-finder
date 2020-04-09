import styled from 'styled-components'

export const Wrapper = styled.nav`
  border-radius: 5px;
  box-shadow: 0 3px 7px 0 rgba(0,0,0,.03);
  background-color: #fff;
  border: .8px solid hsla(0,0%,77.3%,.56);
  padding: 15px 15px;

  h3 {
    display: inline-block;
    margin: 3px 0;
    font-size: 17px;
    padding: 10px 0px 5px;
  }
`
export const H2 = styled.h2`

`


export const ActualSelection = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
  h3 {
    font-weight: 400;
  }
`

export const Direction = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 15px 0;

  .search-wrapper {
    display: flex;
    align-items: center;
  }

  .search-button {
    border-color: transparent;
    min-width: 38px;
    height: 38px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 6px;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.15);
    background-color: #fff;
    &:active {
      color: #fff;
      background-color: #61c1e7;
    }
    &:hover {
      border: 1px solid #1ea7dd;
      box-shadow: 0 0 3px 0 rgba(0,0,0,.05);
    }
  }

  .search-input {
    outline: none;
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
      border-color: #2b9ddd;
    }
  }
`

export const OperationType = styled.div`
  .operation-title {

  }

  .operation-list {
    padding-left: 5px;
  }
`
