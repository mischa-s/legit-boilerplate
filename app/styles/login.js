module.exports = {
  container: ({ theme }) => ({
    padding: theme.space[3]
  }),
  // (mw) a form can't do flexbox
  form: () => ({}),
  fields: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.space[3],
  }),
  submitButton: ({ theme }) => ({
    width: '75%'
  }),
  completion: ({ theme }) => ({
    padding: theme.space[3],
    textAlign: 'center'
  })
}
