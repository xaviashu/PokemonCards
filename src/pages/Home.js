import React, { useState, Suspense } from 'react'
import { CircularProgress, CssBaseline, Typography } from '@material-ui/core';
import { LikeState } from '../Context';
import SearchForm from '../components/SearchForm';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorBoundary';

const Character = React.lazy(() => import('../components/Character'));

const Home = () => {

  const { pokes } = LikeState();
  const [icon, setIcon] = useState(true);
  const [text, setText] = useState('');

  const filteredData = text && pokes.filter((poke) => (poke.name.toLowerCase().includes(text)));

  const handleClick = (text) => {
    console.log(text);
    if (text === 'cancel') {
      setText('');
      setIcon(true);
    } else {
      setIcon(false);
    }
  }

  const handleChange = ({ target: { value } }) => {
    setText(value);
  }

  return (
    <>
      <CssBaseline />
      <div className='body_container'>
        <SearchForm text={text} handleClick={handleClick} icon={icon} handleChange={handleChange} />

        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress
            size={150}
            thickness={1}
          /></div>}>
            {
              !filteredData.length && text ? <Typography variant='h2' className='empty_list'>
                No Match Found!!
              </Typography> :
                <Character pokes={filteredData || pokes} />
            }
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}
export default Home;