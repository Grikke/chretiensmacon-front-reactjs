import { atom } from 'jotai'

//Default Layout
export const parish = atom<string | null>(null)

export const loading = atom<boolean>(false)