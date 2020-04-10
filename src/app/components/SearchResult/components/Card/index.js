import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import {
  GalleryWrapper,
  Price,
  Description,
  Location,
  Title,
  ContactWrapper,
  InfoWrapper,
  FavoriteButton
} from './styled'

import { changeFavorite } from '../../../../actions/results'
import { getDateDifference } from '../../../../utils'

/**
 * I'm going to supose that we just manage ARS and USD
 */
const Card = ({ id, picture, title, price, slug, location, description, publishDate }) => {
  const favorite = useSelector((state) => state.data.favoriteItem.includes(id))
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <GalleryWrapper>
        <div className='image-wrapper'>
          <div>
            <FavoriteButton isActive={favorite} className='favorite-button'>
              <span
                className='favorite-icon'
                onClick={() => dispatch(changeFavorite(favorite, id))}
              />
            </FavoriteButton>
          </div>
          <img height='165' src={picture} alt={title} />
        </div>

        <Price>
          <div className='posting-price'>
            <span className='first-price'>
              <strong>
                {`${price.price.currency === 'ARS' ? '$' : 'USD'} ${price.price.amount}`}
              </strong>
            </span>
            <span className='second-price'>
              {price.expenses
                && `+ ${price.expenses.currency === 'ARS' ? '$' : 'USD'} ${price.expenses.amount} Expensas`}
            </span>
          </div>
        </Price>
      </GalleryWrapper>

      <Description>
        <InfoWrapper>
          <Title><a href={slug}>{title}</a></Title>
          <Location>{`${location.address}, ${location.zone}, ${location.city}`}</Location>
          <p>{description}</p>
        </InfoWrapper>

        <ContactWrapper>
          <div className='post-date'>
            {`Publicado hace ${getDateDifference(publishDate)} días`}
          </div>
          <div className='contact'>
            <button type='button'>Contactar</button>
          </div>
        </ContactWrapper>
      </Description>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.object,
  slug: PropTypes.string,
  location: PropTypes.object,
  description: PropTypes.string,
  publishDate: PropTypes.string
}

export default Card
