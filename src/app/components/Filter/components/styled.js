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

export const ActualSelection = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
  h3 {
    font-weight: 400;
  }
`
export const Chevron = styled.span`
  width: 20px;
  height: 20px;
  transform: ${(props) => (!props.accordion ? 'rotate(90deg)' : 'rotate(180deg)')};
  transition: all 0.3s ease;
  width: 15px;
  margin-top: 16px;
  height: 15px;
  background-color: ${(props) => props.theme.colors.mortar};
  mask-image: url('https://image.flaticon.com/icons/svg/271/271220.svg');
  display: inline-block;
`
