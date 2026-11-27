export type Skill = {
  name: string
  iconUrl: string
}

export type Project = {
  name: string
  period?: string
  description?: string
  tech?: string[]
  link?: string
}

export type DetailEntry = {
  title: string
  meta: string
  description: string
}

export type ContactItem = {
  label: string
  value: string
  href?: string
  external?: boolean
}
