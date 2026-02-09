import "./index.css";


import { SignIn, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'
function App() {
 

  return (
    <>
      <h1 className='text-red-500'>Hello From clerk authentication</h1>
      <SignedOut>
        <button>Login</button>
        <SignIn />
      </SignedOut>

      <SignedIn>
        <h1>Welcome 🎉</h1>
        <SignOutButton />
      </SignedIn>
    </>
    
  )
}

export default App
