import styled from 'styled-components'

export const Wrapper = styled.div`
  .next-button, .prev-button {
    background: transparent !important;
    background-repeat: no-repeat !important;
    outline: none;
    height: 35px !important;
    padding: 0 14px !important;
  }

  .next-button {
    background-image: url('https://img10.naventcdn.com/listado/RPLISv4.3.0-RC1/gallery-arrow-r.82d4e1.svg') !important;
    margin-right: 3px;
  }
  .prev-button {
    background-image: url('https://img10.naventcdn.com/listado/RPLISv4.3.0-RC1/gallery-arrow-l.8dceac.svg') !important;
    margin-left: 5px;
  }
`

export const ImageCounter = styled.span`
  position: absolute;
  right: 6px;
  bottom: 10px;
  display: inline-block;
  color: #fff;
  padding: 0 5px 1px;
  line-height: 21px;
  border-radius: 5px;
  margin-left: 8px;
  background-color: rgba(0,0,0,.6);
  > div {
    display: flex;
    align-items: center;
  }
  .number {
    font-size: 10px;
    margin-right: 2px;
  }
`

export const CameraIcon = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  mask-size: contain;
  background-color: white;
  margin-right: 5px;
  mask-image: url('https://image.flaticon.com/icons/svg/2089/2089052.svg');
`
