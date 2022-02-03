import { React, createApp, emoji, ReactDOMServer } from './deps.ts'
import AppComponent from './AppComponent.tsx'

const port = 5000
const app = createApp()

const colors: string[] = []

app.handle('/', async (req) => {
  const data = req.query.get('color')
  if (data) {
    colors.push(data)
  }

  await req.respond({
    status: 200,
    headers: new Headers({
      'content-type': 'text/html; charset=UTF-8',
    }),
    body: ReactDOMServer.renderToString(
      <>
        <h1>Ingresa un color por parametro.</h1>
        <h3>http://localhost:5000/?color=red</h3>
        <h3>Si es un color válido, se le aplica el estilo.</h3>
        <ul>
          Ejemplos
          <li>Nombre: red</li>
          <li>Hexa: 5d58d7</li>
          <li>RGB: rgb(255,177,0)</li>
        </ul>
        <AppComponent colors={colors} />
      </>
    ),
  })
})

app.listen({ port })

console.log(emoji.get('fire'), `Server on ${port}`)
