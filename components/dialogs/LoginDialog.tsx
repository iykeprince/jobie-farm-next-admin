import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../../contexts/auth.context";
import DialogModal from "../DialogModal";

interface LoginDialogProp {
  show: boolean;
  handleClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProp> = ({
  show,
  handleClose,
}: LoginDialogProp) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('')
  const { signInWithCustomEmailAndPassword } = useAuth()
  const router = useRouter()

  const handleLogin = async () => {
    console.log("call login api");
    setLoading(true);
    if(email === "" || password === "") {
      setError("Some fields are required ")
      setLoading(false)
     return;
    }
    setError("")
   try{
    await signInWithCustomEmailAndPassword(email, password);
    handleClose();
    setLoading(false)
    router.push("/")
   }catch(error: any) {
    window.alert(error.message)
   }finally{
    setLoading(false)
    setError("")
   }
  };

  return (
    <DialogModal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In into your account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form>
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
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="text-white bg-orange-500 hover:bg-orange-700 outline-none cursor-pointer " onClick={handleLogin}>
          {loading ? "Please wait..." : "Login"}
        </Button>
      </Modal.Footer>
    </DialogModal>
  );
};

export default LoginDialog;
