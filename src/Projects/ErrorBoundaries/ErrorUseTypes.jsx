import React from 'react'
import ExampleApplication from './ExampleApplication'
import { ErrorBoundary } from 'react-error-boundary'
import FallBackUI from './FallBackUI'

"use client";

const ErrorUseTypes = () => {
  return (
    <div>
        <ErrorBoundaryComp />
        {/* <ErrorBoundRenderProp /> */}
        {/* <ErrorBoundFallbackCompProp /> */}
    </div>
  )
}

const ErrorBoundaryComp = () => {
  return (
    <ErrorBoundary fallback={<FallBackUI def={true}/>}>
        <ExampleApplication />
    </ErrorBoundary>
  )
}


const ErrorBoundRenderProp = () => {
    return (
        <ErrorBoundary fallbackRender={<FallBackUI />}>
            <ExampleApplication /> 
        </ErrorBoundary>
    )
}

const ErrorBoundFallbackCompProp = () => {
    return (
        <ErrorBoundary FallbackComponent={FallBackUI}>
            <ExampleApplication /> 
        </ErrorBoundary>
    )
}

export default ErrorUseTypes
