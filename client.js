const choo = require('choo')
const html = require('choo/html')
const sf = require('sheetify')
sf('./main.css', {global: true})

const app = choo()


app.model(require('./dnd/dndModel'))

app.model({
  namespace: 'client',
  state: {
    title: 'hello'
  }
})

const mainView = (state, prev, send) => html`
    <main>
      <h1>${state.client.title}</h1>
      <div>${state.dnd.fileContent}</div>
    </main>`

app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
