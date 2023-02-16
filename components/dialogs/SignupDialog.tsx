import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import useFirebaseAuth from '../../hooks/useFirebaseAuth'
import DialogModal from '../DialogModal'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/auth.context'

interface SignupDialogProp {
  show: boolean
  handleClose: () => void
}

const SignupDialog: React.FC<SignupDialogProp> = ({
  show,
  handleClose,
}: SignupDialogProp) => {
  const {
    createNewUserWithEmailAndPassword,
    signInWithCustomEmailAndPassword,
    updateUsername,
  } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const router = useRouter()

  const handleSignUp = async () => {
    if(password !== confirmPassword) {
      setError("Password mismatch")
      return;
    }
    console.log('call signup api')
    
    try {
      setLoading(true)
      const user = await createNewUserWithEmailAndPassword(email, password)
      if (user != null) {
        await updateUsername(user, name)
      }
      await signInWithCustomEmailAndPassword(email, password)
      setLoading(false)
      handleClose()
      router.push('/')
    } catch (error) {
      console.log(`Something went wrong: ${error}`)
    }
  }

  return (
    <DialogModal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up with us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className='alert alert-danger'>{error}</div>}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSignUp}>
          {loading ? 'Please wait...' : 'signup'}
        </Button>
      </Modal.Footer>
    </DialogModal>
  )
}
export default SignupDialog
