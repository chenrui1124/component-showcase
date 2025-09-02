export const enum Framework {
  Vue = 'Vue',
  React = 'React',
}

export interface StoryMeta {
  name: string
  framework: Framework
}
