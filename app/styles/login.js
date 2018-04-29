module.exports = {
  container: ({ theme }) => ({
    padding: theme.space[3]
  }),
  fields: ({ theme }) => ({
    ...theme.typography.label,
    minHeight: theme.space[6],
    justifyContent: 'space-around',
    width: '75%',
    margin: 'auto'
  }),
  button: () => ({
    width: '75%',
  }),
  completion: ({ theme }) => ({
    padding: theme.space[3],
    textAlign: 'center'
  })
}
