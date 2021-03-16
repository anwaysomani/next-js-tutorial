import styles from './diffy.module.css'
import Image from 'next/image'


export default function Diffy({ obj }) {
  return <div className={['position-relative h-50 w-80 left-10 top-20', styles.border_block].join(' ')}>
    <div className={['w-35 padding-top-13', (obj.toLeft ? 'pull-right' : 'pull-left')].join(" ")}>
      <div className={'text-upper text-center font-xx-large text-serif'}>{obj.title}</div>
      <hr className={['w-10', styles.hr_separator_title].join(' ')}/>
      <div className={'text-center'}>
        <span>{obj.subDescription}</span>
      </div>
      <div className={'text-cursive padding-top-3'}>
        <span>{obj.description}</span>
      </div>
    </div>
    <div className={['w-35', (obj.toLeft ? 'pull-left' : 'pull-right')].join(" ")}>
      <div className={styles.shadow_display}>
        <Image
          src="/display/bird-image.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  </div>
}
