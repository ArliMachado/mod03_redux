const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

const addFavoriteFailure = error => ({
  type: 'ADD_FAVORITE_FAILURE',
  payload: { error },
});

export { addFavoriteRequest, addFavoriteSuccess, addFavoriteFailure };
