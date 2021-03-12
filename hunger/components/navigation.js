import styles from './navigation.module.css'

export default function Navigation({ children }) {
  var x = []
  for(var i = 0; i < 10; i++) {
    x.push(i)
  }

  return <div className={styles.nav_container}>
    <span className={styles.container}>{x}</span>
  </div>
}
