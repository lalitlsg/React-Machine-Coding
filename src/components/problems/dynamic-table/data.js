export const POST = {
  COLUMNS: ['ID', 'User ID', 'Title', 'Body'],
  ROWS: ['id', 'userId', 'title', 'body'],
  API: 'posts',
};

export const COMMENT = {
  COLUMNS: ['ID', 'Post ID', 'Name', 'Email', 'Body'],
  ROWS: ['id', 'postId', 'name', 'email', 'body'],
  API: 'comments',
};

export const ALBUMS = {
  COLUMNS: ['ID', 'User ID', 'Title'],
  ROWS: ['id', 'userId', 'title'],
  API: 'albums',
};

export const PHOTOS = {
  COLUMNS: ['ID', 'Album ID', 'Title', 'URL', 'Thumbnail URL'],
  ROWS: ['id', 'albumId', 'title', 'url', 'thumbnailUrl'],
  API: 'photos',
};

export const TODOS = {
  COLUMNS: ['ID', 'User ID', 'Title', 'Completed'],
  ROWS: ['id', 'userId', 'title', 'completed'],
  API: 'todos',
};

export const USERS = {
  COLUMNS: ['ID', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company'],
  ROWS: ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'],
  API: 'users',
};
