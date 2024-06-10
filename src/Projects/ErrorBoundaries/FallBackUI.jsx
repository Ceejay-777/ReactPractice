import React from 'react'

const FallBackUI = ({error, resetErrorBoundary, def}) => {
  return (
    <div className='w-screen h-screen bg-blue-950 flex justify-center items-center flex-col'>
      <p className='text-3xl text-white text-center'>Something went wrong, Pls try again.</p>
      {def || <p className='text-3xl text-center text-red-600'>{error.message}</p>}
      <button className='px-3 py-1 my-4 text-lg border rounded-full border-white text-white hover:scale-105' onClick={resetErrorBoundary}>Try Again</button>
    </div>
  )
}

// function ErrorFallback({ error }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre style={{ color: "red" }}>{error.message}</pre>
//     </div>
//   );
// }

export default FallBackUI
