const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});

export { addFavoriteRequest, addFavoriteSuccess };
