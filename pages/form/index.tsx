import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css'; 

export default function Home() {
  const { handleSubmit, register } = useForm();

  const onSubmit = useCallback((values) => {
    console.table(values)
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="url"
          ref={register()}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
