import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { Cancel } from '@material-ui/icons';


const SearchForm = ({handleChange, handleClick, icon, text}) => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitting form');
  }
    
  return (
    <form onSubmit={(e) => submitHandler(e)} className='search_form'>
      <div className={icon ? 'search' : 'search_input'}>
        {icon ? null : (
          <input
            id="task"
            name="text"
            type="text"
            value={text}
            className="character_search"
            placeholder="Search here"
            onChange={(e) => handleChange(e)}
            autoFocus
          />
        )}

        {icon ? (
          <Fab
            color="primary"
            aria-label="add"
            component="button"
            onClick={() => handleClick('search')}
            size="large"
            className="add_button"
          >
            <SearchIcon className="add_icon" />
          </Fab>
        ) : (
          <Fab
            color="secondary"
            aria-label="add"
            component="button"
            onClick={() => handleClick('cancel')}
            size="large"
            className="cancel_button"
          >
            <Cancel className="cancel_icon" />
          </Fab>
        )}
      </div>
    </form>
  )
}

export default SearchForm