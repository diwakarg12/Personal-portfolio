'use client';
import React, { useState } from 'react';
import styles from '../contact/Contact.module.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    emailjs
      .send(
        'service_f4t0ksf', // Replace with your EmailJS service ID
        'template_tuwgnrq', // Replace with your EmailJS template ID
        form,
        'tFPvfCVFVRY6iT3BI' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message Sent!');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        toast.error('Error while sending message!');
        console.error('FAILED...', error);
      });
  };

  return (
    <form
      id='fcf-form-id'
      className='w-full'
      method='post'
      onSubmit={handleSubmit}
    >
      <div className={styles.formGroup}>
        <label htmlFor='Name' className={styles.label}>
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
        <label htmlFor='Email' className={styles.label}>
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
        <label htmlFor='Message' className={styles.label}>
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
            maxLength='3000'
            required
          ></textarea>
        </div>
      </div>

      <div className={styles.formGroup}>
        <button
          type='submit'
          id='fcf-button'
          className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnBlock}`}
        >
          Send Message
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
