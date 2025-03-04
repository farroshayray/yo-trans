import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar1 from '@/components/ui/navbar';
import Link from 'next/link';
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

function BasicExample() {
    const router = useRouter();
  return (
    <div className='bg-blue-950 pb-5'>
    <Navbar1 />
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 p-2 bg-transparent"
    >
      <ArrowLeft size={20} color='white'/>
    </button>
    <div className='rounded-lg shadow-md mt-20 mx-auto w-full max-w-lg p-5 md:w-3/4 lg:w-1/2 bg-white'>
        <h3 className='text-center mb-5'>Please Login to Your Account</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email addressss</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <p className='mt-5'>
              Don't have an account yet?{" "}
              <Link href="/register" className=''>
                  Register
                </Link>
            </p>
        </Form>
    </div>
    </div>
    
  );
}

export default BasicExample;