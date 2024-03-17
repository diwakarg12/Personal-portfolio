import styles from '../contact/Contact.module.css';

const ContactForm = () => {
    return (
        <form id="fcf-form-id" class="fcf-form-class" method="post" >
            <div className={styles.formGroup}>
                <label for="Name" className={styles.label}>Your name</label>
                <div className={styles.inputGroup}>
                    <input type="text" id="Name" name="Name" className={styles.formControl} required />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label for="Email" className={styles.label}>Your email address</label>
                <div className={styles.inputGroup}>
                    <input type="email" id="Email" name="Email" className={styles.formControl} required />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label for="Message" className={styles.label}>Your message</label>
                <div className={styles.inputGroup}>
                    <textarea id="Message" name="Message" className={styles.formControl} rows={6} maxlength="3000" required></textarea>
                </div>
            </div>

            <div className={styles.formGroup}>
                <button type="submit" id="fcf-button" class={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnBlock}`}>Send Message</button>
            </div>

        </form>
    )
}

export default ContactForm