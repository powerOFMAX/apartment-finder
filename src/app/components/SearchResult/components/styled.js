import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.33);

  .container {
    display: flex;
  }

  :before {
    content: "";
    background-color: ${(props) => props.theme.colors.plan[props.publicationPlan]};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 3px;
  }
`
