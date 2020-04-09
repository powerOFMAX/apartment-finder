import styled from 'styled-components'

export const Title = styled.h2`
  display: inline-block;
  width: 100%;
  line-height: 20px;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.acadia};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.acadia};
  }
`
export const FavoriteButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,.3);
  transition: box-shadow .4s,background-color .4s;
  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0 3px 8px 0 rgba(0,0,0,.5);
  }

  span {
    height: 23px;
    width: 17px;
    display: inline-block;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(https://img10.naventcdn.com/listado/RPLISv4.3.0-RC1/icon-fav-off.f379d4.svg);
    vertical-align: top;

    &:active {
      background-image: url(https://img10.naventcdn.com/listado/RPLISv4.3.0-RC1/icon-fav-on.a5b569.svg);
    }
  }
`

export const GalleryWrapper = styled.div`
  width: 275px;
  flex-shrink: 0;

  div > img {
    width: 100%;
  }

  .image-wrapper {
    height: 165px;
    position: relative;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 59px;
  position: relative;
  padding: 8px 14px;
  box-sizing: border-box;

  .first-price {
    font-size: 23px;
    color: ${(props) => props.theme.colors.nightRider};
    padding: 5px 0;
    display: block;
  }

  .second-price {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.charcoal};
    margin-top: 4px;
    margin-left: 2px;
  }

  :after {
    position: absolute;
    top: 50%;
    right: 0;
    content: "";
    display: inline-block;
    width: 1px;
    height: 70%;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.colors.wheatfield};
  }
`

export const Location = styled.span`
  display: inline-block;
  font-size: 13px;
  color: ${(props) => props.theme.colors.nightRider};
  line-height: 20px;
  margin-bottom: 10px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
`

export const InfoWrapper = styled.div`
  padding: 14px 18px 10px 14px;
  box-sizing: border-box;
  height: 165px;
  
  p {
    font-size: 13px;
    line-height: 1.38;
    color: ${(props) => props.theme.colors.grey};
    overflow: hidden;
    height: 50px;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 59px;
  padding: 6px 14px 8px;
  box-sizing: border-box;

  .post-date {
    flex-grow: 1;
    flex-shrink: 1;
    display: inline-block;
    padding-right: 20px;
    font-size: 13px;
    color: #333;
  }

  .contact {
    button {
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: .5px;
      background-color: #fc7b27;
      line-height: 35px;
      color: #fff;
      padding: 0 14px;
      border-radius: 5px;
      transition: background-color .3s;
    }
  }
`
