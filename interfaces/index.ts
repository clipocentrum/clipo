export type Specialist = {
  slug: string,
  fullName: string,
  title?: string,
  specialisation: string,
  bio: string,
  photoPath: string,
  certificate?: string
}

export type Question = {
  question: string,
  answer: string
}

export type fullService = {
  service: string,
  specialisation?: string,
  price: string
}

export type Service = {
  service: string,
  isDL: boolean
}
