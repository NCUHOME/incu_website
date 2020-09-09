import React from 'react'
import { Root, Routes, Head } from 'react-static'
import { Router } from '@reach/router'
import { GeistProvider } from '@geist-ui/react'
// import { Transition, animated } from 'react-spring/web.cjs'
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
          <React.Suspense fallback={
            <LoadingScreen/>
          }>
            <Router>
              <Routes
                path="*"
                // render={({ routePath, getComponentForPath }) => {
                //   const element = getComponentForPath(routePath);
                //   return (
                //     <Transition
                //       native
                //       items={routePath}
                //       from={{ transform: 'translateY(-100px)', opacity: 0 }}
                //       enter={{ transform: 'translateY(0px)', opacity: 1 }}
                //       leave={{ transform: 'translateY(-100px)', opacity: 0 }}
                //     >
                //       {() => (props: any) => {
                //         return <animated.div style={props}>{element}</animated.div>
                //       }}
                //     </Transition>
                //   )
                // }}
              />
            </Router>
          </React.Suspense>
        </div>
      </GeistProvider>
    </Root>
  )
}

export default App
