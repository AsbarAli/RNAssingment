export const updatePostList = (payload) => {
  const formattedUserList = {};

  payload.userList.forEach((element) => {
    formattedUserList[element.id] = element;
  });

  const postList = payload.postList.map((post) => {
    let postObject = {};
    const currentUserId = post.userId;
    postObject = post;
    postObject.userDetail = formattedUserList[currentUserId.toString()];

    return postObject;
  });

  return postList;
};

export const updateAlbumList = (payload) => {
  const albumListForCurrentUser = payload.albumList.filter((album) => album.userId == payload.userId);
  const firstAlbum = albumListForCurrentUser[0];
  const photoList = payload.photoList.filter((photo) => photo.albumId == firstAlbum.id);

  return photoList;
};
