import styles from './navigation.module.css'

export default function Navigation({ children }) {
  var nav_items = [
    {
      title: 'Home'
    },
    {
      title: 'About'
    },
    {
      title: 'Team'
    },
    {
      title: 'Booking'
    },
    {
      title: 'Menu'
    },
    {
      title: 'Galerie'
    },
    {
      title: 'Events'
    },
    {
      title: 'Contact'
    }
  ];

  var entity = [];
  for(var i=0; i<nav_items.length; i++) {
    entity.push(
      <div className={[styles.font_12, styles.nav_item, styles.m_0, styles.pull_left, styles.f_w_900].join(" ")}>
        <span>{nav_items[i].title}</span>
      </div>
    )
  }


  return <div className={styles.nav_container} >
    <div className={styles.container}>{entity}</div>
  </div>
}
