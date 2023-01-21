import React, { createContext, useContext, useEffect, useReducer } from "react";
import LikeReducer, { initialState } from "./LikeReducer";

export const Likes = createContext(initialState);

export function Context({children}) {

    const [state, dispatch] = useReducer(LikeReducer, initialState);

    const likedMe = (data) => {
      const updatedLiked = [...state.likes, data];
      localStorage.setItem('likes', JSON.stringify(updatedLiked));
      dispatch({
        type: 'LIKED',
        payload: updatedLiked
      })
    }

    const dislikedMe = (data) => {
      const updatedLiked = state.likes.filter(d => d.name !== data.name);
      localStorage.setItem('likes', JSON.stringify(updatedLiked));
      dispatch({
        type: 'DISLIKED',
        payload: updatedLiked
      })
    }

    const getData = (data) => {
      dispatch({
        type: 'GET_DATA',
        payload: data
      })
    }

    function getAll() {
      return fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => res.json())
        .then(data => data.results)
        .then(async (dt) => {
          let values = [];
          for (let a of dt) {
           let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${a.name}`)
            .then(r => r.json())
            .then((jsonData) => {
              return jsonData;
            });
            values.push(data);
          }
          return values;
        })
        .then(val => getData(val))
        .catch((err) => console.log(err));
    }
  
    useEffect(() => {
      getAll();
    }, []);

    const value = {
      pokes: state.pokes,
      likes: state.likes,
      likedMe,
      dislikedMe,
      getData 
    }

    return (
        <Likes.Provider value={value}>
          {children}
        </Likes.Provider>
    );
}

// export default Context;

export const LikeState = () => {
  const context =  useContext(Likes);
  if (context === undefined) {
    throw new Error('useLikes must be used within like context');
  }
  return context;
}