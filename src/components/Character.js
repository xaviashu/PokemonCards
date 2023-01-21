import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core'
import Card from './Card';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Character = ({ pokes }) => {

  const getAllData = () => {

return pokes.map((card) => (
      <Grid item lg={3} md={4} sm={6} xs={12} key={card.name}>
        <Card card={card} />
      </Grid>
    )
    )
  }

  if (!pokes.length) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress
      size={150}
      thickness={1}
    /></div>
  }

  return (
    <div className='characters'>
      <Grid container spacing={2}>
          {getAllData()}
      </Grid>
    </div>
  )
}

export default Character