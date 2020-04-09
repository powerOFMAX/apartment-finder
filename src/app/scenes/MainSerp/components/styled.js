import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 1180px;
  padding: 20px 20px;
  box-sizing: border-box;
  margin: auto;

  .left-container {
    width: 302px;
  }

  .right-container {
    width: calc(100% - 302px);
    padding-left: 10px;
    box-sizing: border-box;
  }
`
