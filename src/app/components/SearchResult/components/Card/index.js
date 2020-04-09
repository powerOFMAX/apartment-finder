import React from 'react'
import moment from 'moment'
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

const getDate = (oldDate) => {
  const now = moment()
  const date = moment(oldDate, 'DD-MM-YYYY')
  const duration = parseInt(moment.duration(now.diff(date)).asDays())
  return duration
}

/**
 * I'm going to supose that we just manage ARS and USD
 */
const Card = ({ picture, title, price, slug, location, description, publishDate }) => (
  <div className="container">
    <GalleryWrapper>
      <div className="image-wrapper">
        <div>
          <FavoriteButton className='favorite-button'>
            <span className='favorite-icon'/>
          </FavoriteButton>
        </div>
        <img height="165" src={picture} alt={title} />
      </div>

      <Price>
        <div className="posting-price">
          <span className="first-price">
            <strong>
              {`${price.price.currency === 'ARS' ? '$' : 'USD'} ${price.price.amount}`}
            </strong>
          </span>
          <span className="second-price">
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
        <div className="post-date">
          {`Publicado hace ${getDate(publishDate)} días`}
        </div>
        <div className="contact">
          <button>Contactar</button>
        </div>
      </ContactWrapper>
    </Description>
  </div>
)

export default Card
