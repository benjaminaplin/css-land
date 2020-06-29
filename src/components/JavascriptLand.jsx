import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
// const Headshot = React.lazy(() => import('./Headshot'))
const Headshot = React.lazy(
  () =>
    new Promise(resolve =>
      setTimeout(
        () => resolve({ default: () => <div>fake ben head</div> }),
        1000
      )
    )
)

const JavascriptLand = () => {
  return (
    <ErrorBoundary fallback="Ben's head ain't loading">
      <Suspense fallback="Loading Ben's Head">
        <Headshot />
      </Suspense>
    </ErrorBoundary>
  )
}

export default JavascriptLand
