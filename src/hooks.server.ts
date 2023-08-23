export const handle = async ({ resolve, event }) => {
  const response = await resolve(event, {
    preload: ({ path }) => path.match(/latin-(400|700|wght).*\.woff2$/) !== null
  })

  return response
}
