import { Home } from './views/Home';
import styles from './App.css';

export default function App() {
  return (
    <div className="bg-red-500">
      <p className={styles.hello}>hello hello</p>
      <Home />
    </div>
  );
}
