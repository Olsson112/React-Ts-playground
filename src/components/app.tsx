import { BrowserRouter } from 'react-router-dom'
import { FC } from 'react'
import Layout from './layout'


const App: FC = () => {
  
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  )
}

export default App