export interface Post {
  title: string
  text: string
  id?: number
}

export type SearchKey = 'title' | 'text';
