import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import styles from 'styles/components/contact.module.scss'
import { Alert } from 'components'
import gsap from 'gsap'
import type { contactError, contactData, contactForm } from 'types/components'

function printError({ type }:contactError):string {
  switch (type) {
    case "pattern" : return "This email address isn't valid"
    case "required" : return "Please fill in your email address"
    default: return ""
  }
}

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<contactForm>();
  const [formSuccess, setFormSuccess] = useState(false);
  const encode = (data:contactData) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
  const fromInput = { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ };
  const refs = {
    success: useRef<HTMLDivElement>(null),
    button: useRef<HTMLButtonElement>(null),
    form: useRef<HTMLFormElement>(null)
  }

  function onSubmit(form:contactForm) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }) 
    })
    .then(() => setFormSuccess(true))
    .catch(error => alert(error));
  }

  useEffect(() => {
    if (!formSuccess || !refs.success) return;
    gsap.to(refs.success.current, {
      onStart: () => {
        if (refs.form.current !== null) refs.form.current.reset();
        if (refs.button.current !== null) refs.button.current.blur();
      },
      delay: 3, 
      opacity: 0, 
      onComplete: () => setFormSuccess(false)
    });
  },[formSuccess,refs.button,refs.form,refs.success]);

  const values = {
    form: {
      onSubmit: handleSubmit(onSubmit),
      className: styles.form,
      'data-netlify': true,
      name: 'contact', 
      method: 'post',
      ref: refs.form
    },
    subject: {
      type: 'text', 
      name: 'subject',
      id: 'subject',
      placeholder: 'Hey there!'
    },
    from: {
      type: 'email', 
      name: 'from',
      id: 'from',
      placeholder: 'friendly@visitor.org'
    },
    message: {
      className: styles.textarea, 
      name: 'message',
      id: 'message',
      placeholder: 'Message'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.topbar}>
          <button className={styles.close_icon}>close</button>
          <button className={styles.minimise_icon}>minimise</button>
        </div>
        <form {...values.form}>
          { formSuccess && <div ref={refs.success} className={styles.success}>
            <div>
              <span className={styles.confetti}>🎉</span>
              <h1 className={styles.success_title}>Success!</h1>
              <p className={styles.success_tagline}>I&apos;ll be in touch soon</p>
            </div>
          </div> }
          <div className={styles.wrap_form}>
            <div className={styles.tag_row}>
              <div className={styles.label}>To</div>
              <div className={styles.tag}>hello@paulh.biz</div>
            </div>
            <div className={styles.row}>
              <label htmlFor="subject">Subject</label>
              <input {...register("subject")} {...values.subject} />
            </div>
            <div className={styles.row}>
              <label htmlFor="from">From</label>
              <input {...register("from", fromInput)} {...values.from} />
              { errors.from && <Alert className={styles.alert}>{ printError(errors.from) }</Alert> }
            </div>
            <div className={styles.wrap_textarea}>
              <textarea {...register("message")} {...values.message} />
            </div>
            <div className="text-align-right">
              <button ref={refs.button} className={styles.submit} type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Contact }