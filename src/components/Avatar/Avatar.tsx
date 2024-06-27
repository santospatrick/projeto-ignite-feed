import styles from './avatar.module.css'

type Props = {
    hasBorder?: boolean
    src: string
}

function Avatar({ hasBorder = true, src }: Props) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}

export default Avatar