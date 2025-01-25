import { GAMES } from "../constants/ActionTypes/AtcionTypes";

const gameDetails = (state = {}, action) => {
  switch (action.type) {
    case GAMES.ADD_DETAILS: {
      console.log( action.payload)
        return action.payload;
    }
    default:
      return state;
  }
}

export default gameDetails;
