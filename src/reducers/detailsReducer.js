import { GAMES, FILMS } from "../constants/ActionTypes/AtcionTypes";

const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GAMES.ADD_DETAILS: {
      return action.payload;
    }

    case FILMS.ADD_DETAILS: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default detailsReducer;
