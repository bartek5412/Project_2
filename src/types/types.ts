export interface Task {
  title: string;
  done: boolean;
  categories?: Category;
}

export enum Category {
  GENERAL = "general",
  WORK = "work",
  LIFE = "life",
}
