'use client';
import styles from '../contact/Contact.module.css';
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the form data to the server
    console.log(form);
    setForm({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <form
      id='fcf-form-id'
      class='fcf-form-class'
      className='w-full'
      method='post'
      onSubmit={handleSubmit}
    >
      <div className={styles.formGroup}>
        <label for='Name' className={styles.label}>
          Your name
        </label>
        <div className={styles.inputGroup}>
          <input
            type='text'
            id='Name'
            name='name'
            value={form.name}
            onChange={handleChange}
            className={styles.formControl}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label for='Email' className={styles.label}>
          Your email address
        </label>
        <div className={styles.inputGroup}>
          <input
            type='email'
            id='Email'
            value={form.email}
            onChange={handleChange}
            name='email'
            className={styles.formControl}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label for='Message' className={styles.label}>
          Your message
        </label>
        <div className={styles.inputGroup}>
          <textarea
            id='Message'
            name='message'
            value={form.message}
            onChange={handleChange}
            className={styles.formControl}
            rows={6}
            maxlength='3000'
            required
          ></textarea>
        </div>
      </div>

      <div className={styles.formGroup}>
        <button
          type='submit'
          id='fcf-button'
          class={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnBlock}`}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
