import { React } from './deps.ts'

interface colors {
  colors: string[]
}

function AppComponent({ colors }: colors) {
  return (
    <>
      <h2>
        El color Ingresado es: <span style={{ color: colors[colors.length - 1] }}>{colors[colors.length - 1]}</span>
      </h2>
      <ul>
        {colors.reverse().map((color, idx) => {
          return (
            <li key={idx} style={{ color: colors[idx] }}>
              {color}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AppComponent
