export const selectSearchResult = (state) => state.searchResult.currentSearch;
export const selectSearchResultType = (state) => state.searchResult.type;
export const selectTopGames = (state) => state.searchResult.topGames.list;
export const selectTopGamesPage = (state) => state.searchResult.topGames.page;
export const selectLoadingStatus = (state) => state.status.loading;
export const selectDetails = (state) => state.details;
// export const selectGamesSearchHistory = (state) => state.searchResult.games;
// export const selectFilmsSearchHistory = (state) => state.searchResult.films;
export const selectGamesCollection = (state) => state.collection.games;
export const selectFilmsCollection = (state) => state.collection.films;
export const selectSearchType = (state) => state.seacrhType;
export const selectCurrentUser = (state) => state.auth.user;
export const selectLoginStatus = (state) => state.auth.isLoggedIn;
export const selectAuthError = (state) => state.auth.error;
export const selectisRegisterSucccess = (state) => state.auth.registerSuccess;
