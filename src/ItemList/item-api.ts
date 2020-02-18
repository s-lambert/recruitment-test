import { randomPick } from './utils';

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

const fetchJson = (url: string) => fetch(url).then(response => response.json());

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const fetchPosts = () => fetchJson(baseUrl + 'posts') as Promise<Post[]>;
const fetchAlbums = () => fetchJson(baseUrl + 'albums') as Promise<Album[]>;
const fetchUsers = () => fetchJson(baseUrl + 'users') as Promise<User[]>;

export async function fetchItems(limit: number): Promise<Item[]> {
  const [posts, albums, users] = await Promise.all([
    fetchPosts(),
    fetchAlbums(),
    fetchUsers()
  ]);
  const randomPosts = randomPick(posts, limit);
  const randomAlbums = randomPick(albums, limit);
  const randomUsers = randomPick(users, limit);

  const items: Item[] = [];
  for (let i = 0; i < limit; i++) {
    items.push({
      post: randomPosts[i],
      album: randomAlbums[i],
      user: randomUsers[i]
    });
  }
  return items;
}
