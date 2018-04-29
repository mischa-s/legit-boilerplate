const h = require('react-hyperscript')
const { compose } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const Typography = require('material-ui/Typography').default
const Button = require('material-ui/Button').default
const Paper = require('material-ui/Paper').default

const LandingForm = require('./login')
const styles = require('../styles/landing')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'doUpdateUrl',
    'selectOnboardingUser'
  ])
)(Landing)

function Landing (props) {
  const {
    styles,
    updateUrl,
    onboardingUser: user
  } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h(Paper, {
        className: styles.header
      }, [
        h('div', [
          user
            ? h('p', 'Email sent!')
            : h('p', 'Login via email'),
          h('img', { src: 'yip_is_a_platform.png' }),
        ]),
        h(LandingForm)
      ])
    ])
  )
}
