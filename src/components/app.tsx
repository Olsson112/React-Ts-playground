import { BrowserRouter } from 'react-router-dom'
import { FC } from 'react'
import Layout from './layout'
import ErrorBoundary from './errorBoundary'


const App: FC = () => {
  
  return (
    <BrowserRouter>
      <ErrorBoundary ErrorMessage='The whole page is wacked!'>
        <Layout/>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App