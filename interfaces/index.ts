export interface Specialist {
  slug: string,
  fullName: string,
  title?: string,
  specialisation: string,
  bio: string,
  photoPath: string,
  certificate?: string
}

export interface Question {
  question: string,
  answer: string
}

export interface Price {
  service: string,
  specialisation?: string,
  price: string
}

export interface Service {
  service: string,
  isDL: boolean
}
