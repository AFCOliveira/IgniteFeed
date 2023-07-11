import styles from "./App.module.css";
import { Header } from "./component/Header";
import { Post } from "./component/Post";
import { Sidebar } from "./component/Sidebar";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
