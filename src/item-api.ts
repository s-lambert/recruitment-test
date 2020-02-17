interface Post {
  title: string;
}

interface Album {
  title: string;
}

interface User {
  username: string;
}

export interface Item {
  post: Post;
  album: Album;
  user: User;
}

