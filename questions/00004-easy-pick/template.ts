type MyPick<T, K extends keyof T = keyof T> = {
  [key in K]: T[key]
}
