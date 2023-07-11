import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/AFCOliveira.png" />
          <div className={styles.authorInfo}>
            <strong>André Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="11 de julho de 2023 às 09:08h"
          dateTime="2023-07-11 09:08:30"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz
          com ReactJS, atraves do curso da Rocketseat. O nome do projeto é
          PageIgnite 🚀{" "}
        </p>
        <p>
          👉{"  "}{" "}
          <a href="https://github.com/AFCOliveira">github.com/AFCOliveira </a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          {"  "}
          <a href="">#ReactJs </a>
          {"  "}
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
