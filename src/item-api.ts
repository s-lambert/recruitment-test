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

export async function fetchItems(limit: number): Promise<Item[]> {
  return Promise.resolve([]);
}
