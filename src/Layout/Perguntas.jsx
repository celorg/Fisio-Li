import styles from './Perguntas.module.css';

export default function Perguntas(){
    return(
        <article className={styles.containerPerguntas}>
            <h4>Perguntas Frequentes</h4>
            <details className={styles.details}>
                <summary>Pergunta n1</summary>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt eligendi natus, perferendis quo voluptatem nam ipsum quam vel quia ipsa suscipit expedita voluptate corrupti totam! Nesciunt veniam ipsam amet.</p>
            </details>
            <details className={styles.details}>
                <summary>Pergunta n2</summary>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt eligendi natus, perferendis quo voluptatem nam ipsum quam vel quia ipsa suscipit expedita voluptate corrupti totam! Nesciunt veniam ipsam amet.</p>
            </details>
            <details className={styles.details}>
                <summary>Pergunta n3</summary>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt eligendi natus, perferendis quo voluptatem nam ipsum quam vel quia ipsa suscipit expedita voluptate corrupti totam! Nesciunt veniam ipsam amet.</p>
            </details>
            <details className={styles.details}>
                <summary>Pergunta n4</summary>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt eligendi natus, perferendis quo voluptatem nam ipsum quam vel quia ipsa suscipit expedita voluptate corrupti totam! Nesciunt veniam ipsam amet.</p>
            </details>
            <details className={styles.details}>
                <summary>Pergunta n5</summary>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, deserunt eligendi natus, perferendis quo voluptatem nam ipsum quam vel quia ipsa suscipit expedita voluptate corrupti totam! Nesciunt veniam ipsam amet.</p>
            </details>
        </article>
    )
}