import { render } from 'preact'

// Your top level component
import App from './App'

if (location.origin === "http://incu.ncuos.com") {
  location.protocol = "https:";
}

render(
  <App />,
  document.getElementById('root')
)
