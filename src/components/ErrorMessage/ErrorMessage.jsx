import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        Темная сторона силы победила.<br />
        Мы не можем отобразить данные.<br />
        Возвращайтесь, когда мы все исправим.
      </p>
    </>
  )
}

export default ErrorMessage;