import { CssBaseline, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import Character from '../components/Character';
import { LikeState } from '../Context';

const Like = () => {
  const {likes} = LikeState();
  
  useEffect(() => {
    console.log('Likes updated');
  }, [likes]);


  return (
    <>
      <CssBaseline />
      <div className = 'body_container'>
        {
          likes.length ? <Character pokes={likes}/> : <Typography variant='h2' className='empty_list'>
            No characters liked !!
          </Typography>
        }
      </div>
    </> 
  )
}

export default Like;
