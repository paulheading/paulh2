
interface contactForm {
  from: string
  message: string
  subject: string
  index: string
}

interface contactData extends contactForm {
  "form-name": string
  [key: string]: string
}

interface contactError {
  type: string
}

export type {
  contactForm,
  contactData,
  contactError
}