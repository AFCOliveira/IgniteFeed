/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import styles from "./App.module.css";
import { Header } from "./component/Header";
import { Post } from "./component/Post";
import { Sidebar } from "./component/Sidebar";
import "./global.css";

// eslint-disable-next-line no-unused-vars
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AFCOliveira.png",
      name: "André Oliveira",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz com ReactJS, atraves do curso da Rocketseat. O nome do projeto é PageIgnite 🚀",
      },
      { type: "link", content: "github.com/AFCOliveira" },
    ],
    publishedAt: new Date("2023-07-10 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz com ReactJS, atraves do curso da Rocketseat. O nome do projeto é PageIgnite 🚀",
      },
      { type: "link", content: "github.com/AFCOliveira" },
    ],
    publishedAt: new Date("2023-07-11 16:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
