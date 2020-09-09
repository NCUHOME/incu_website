import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { Router } from '@reach/router'
import { GeistProvider } from '@geist-ui/react'
import LoadingScreen from 'components/LoadingScreen'
import './app.styl'

const App: React.FC = () => {

  return (
    <Root>
      <GeistProvider>
        <div className="content">
          <Head>
            <title>南大家园</title>
          </Head>
          <React.Suspense fallback={ <LoadingScreen />}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </GeistProvider>
    </Root>
  )
}

export default App
