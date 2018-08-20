export const js = [
  {
    fileName: 'operations.js',
    code: `
export const getUser = ({ http }, id) =>
  http.get(\`/users/\${id}\`)

export const trim = (_, value) =>
  value.trim()
  `,
  },
  {
    fileName: 'actions.js',
    code: `
export const doThis = action =>
  action()
    .map(operations.trim)
    .map(operations.getUser)
  `,
  },
]

export const ts = [
  {
    fileName: 'operations.ts',
    code: `
export const getUser: Map<string, Promise<User>> =
  ({ http }, id) => http.get(\`/users/\${id}\`)

export const trim: Map<string, string> =
  (_, value) => value.trim()
  `,
  },
  {
    fileName: 'actions.ts',
    code: `
export const doThis: Action<string> = action =>
  action<string>()
    .map(operations.trim)
    .map(operations.getUser)
  `,
  },
]
