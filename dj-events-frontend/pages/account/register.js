import React, { useState, useEffect, useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import Link from 'next/link'
import Layout from '@/components/Layout'
import 'react-toastify/dist/ReactToastify.css'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function RegisterPage() {
  const [ username, setUsername] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')
  const { register, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = e => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      toast.error('Passwords do not match!')
      return
    }
    register({ username, email, password })
  }

  return (
    <Layout title="User Registration">
      <div className={ styles.auth }>
        <h1>
          <FaUser/>
          Register
        </h1>
        <ToastContainer/>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                id="username"
                onChange={ e => setUsername(e.target.value) }
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email Address
              <input
                type="email"
                name="email"
                id="email"
                onChange={ e => setEmail(e.target.value) }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                onChange={ e => setPassword(e.target.value) }
              />
            </label>
          </div>
          <div>
            <label htmlFor="passwordConfirm">
              Confirm Password
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                onChange={ e => setPasswordConfirm(e.target.value) }
              />
            </label>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn"
          />
        </form>
        <p>Already have an account?</p>
        <Link href="/account/login">Login</Link>
      </div>
    </Layout>
  )
}
