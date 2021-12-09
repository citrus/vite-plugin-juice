const juicePlugin = require('./dist').default

test('it can inline CSS', () => {
  const name = 'John'
  const plugin = juicePlugin()
  return expect(plugin.transformIndexHtml.transform('<style>p{color: red;}</style><p>Hello</p>', {})).toEqual('<p style="color: red;">Hello</p>')
})

test('it adds extra css from options', () => {
  const name = 'John'
  const plugin = juicePlugin({ juiceOptions: { extraCss: 'p{font-weight: bold;}' }})
  return expect(plugin.transformIndexHtml.transform('<style>p{color: red;}</style><p>Hello</p>', {})).toEqual('<p style="color: red; font-weight: bold;">Hello</p>')
})
