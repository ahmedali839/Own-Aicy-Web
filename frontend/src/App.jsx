import { useState } from 'react'
import './App.css'
import Header, { LoadingProvider } from './pages/Header/Header'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import SignupPage from './pages/signup/signupPage'
import LoginPage from './pages/login/LoginPage'
import Profile from './pages/protecteddWrapper/Profile'
import UserProtectedWrapper from './pages/protecteddWrapper/UserProtecteddWrapper'
import UserContext from './stores/userContext.jsx'


function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col'>

        <LoadingProvider>
          <Header />

          <div className='flex-grow'>
            <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<About />} path='/about' />
              <Route element={<Projects />} path='/projects' />
              <Route element={<Contact />} path='/contact' />
              <Route element={<LoginPage />} path='/login' />
              <Route element={<SignupPage />} path='/signup' />

              <Route element={
                <UserProtectedWrapper>
                  <Profile />
                </UserProtectedWrapper>
              } path={'/profile'} />

            </Routes>
          </div>
          <Footer />
        </LoadingProvider >
      </div>
    </>
  )
}

export default App
