import React, { useState } from 'react'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { Fab, Typography } from '@material-ui/core';
import { LikeState } from '../Context';


const Card = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  const { likedMe, dislikedMe, likes } = LikeState();

  const handleClick = () => {
    setFlipped(prev => !prev);
  }

  const checkLiked = (card) => likes.some(a => a.name === card.name);

  const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

  const handleLike = (e, card) => {
    e.stopPropagation();
    if (checkLiked(card)) {
      console.log('disliking')
      dislikedMe(card);
    } else {
      likedMe(card);
    }
  }

  return (
    <div className={`card ${flipped ? 'active' : ''}`} onClick={handleClick}>
      <div className='card_side front_side'>
        <div style={{ padding: '1.5rem' }}>
          <img src={card.sprites.other.dream_world.front_default} alt={card.name} />
        </div>
        <Fab className='like_icon' color='primary' size='small' onClick={(e) => handleLike(e, card)}>
          <ThumbUpOutlinedIcon className={checkLiked(card) === true ? 'liked' : ''} />
        </Fab>
      </div>
      <div className='card_side back_side'>
        <Typography variant="h6"  color='primary' component="p">Rank {card.order}</Typography>
        <Typography variant="h5" component="h5" className='text_md' color='primary'>{capitalize(card.name)}</Typography>
      </div>
    </div>
  )
}

export default Card;