export const COLLECTION_TYPES = {
  GAMES: "games",
  FILMS: "films",
  SERIALS: "serials",
};

export const SEARCH_TYPE = {
  GAMES: "GAMES",
  FILMS: "FILMS",
};

export const NUMBER_OF_SEARCH_ITEMS = {
  FILMS: 10,
};

export const INSCRIPTIONS_KEYS = {
  TITLE_CARDS: {
    DURATION: {
      FILMS: "Время:",
      GAMES: "Наиграно",
    },
  },
  STATISTIC_PAGE: {
    COLLECTION_NAMES: {
      GAMES: "Игры",
      FILMS: "Фильмы",
      SERIALS: "Сериалы",
    },
    TOTAL_TIME: "Всего потрачено времени",
    HEADER_SORT_TILES: {
      BY_TITLE: "Сортировать по названию",
      BY_TIME: "Сортировать по времени",
    },
  },
  SEARCH_BOX: {
    GAMES: "Search the game",
    FILMS: "Search the movie",
  }
};

export const ROUTES = {
  PAGE: {
    MY_GAMES: "/",
    MY_FILMS: "/films",
    STATISTIC: "/stats",
    SEARCH_RESULTS: "/results",
  },
  CARDS: {
    FILM: "/movie",
    GAME: "/game",
  },
};

export const GAMES_IPORTANT_FIELDS = [
  "api_detail_url",
  "expected_release_year",
  "id",
  "image",
  "name",
  "original_release_date",
  "platforms",
  "resource_type",
];

export const FILMS_IMPORTANT_FIELDS = [
  "name",
  "enName",
  "alternativeName",
  "countries",
  "description",
  "shortDescription",
  "id",
  "logo",
  "poster",
  "rating",
  "year",
  "type",
  "genres",
  "isSeries",
  "votes",
];

export const COLLECTION_FIELDS = [
  "api_detail_url",
  "deck",
  "expected_release_year",
  "image",
  "name",
  "original_release_date",
  "themes",
  "id",
  "developers",
];

export const LOCAL_STORAGE = {
  GAME_HISTORY_KEY: "gamesSearchHistory",
  FILMS_HISTORY_KEY: "filmsSearchHistory",
}

export const VIEW_TYPES = {
  VARIANTS: ["x2", "x4", "list"],
  get DEFAULT () {
    return this.VARIANTS[1]
  }
}