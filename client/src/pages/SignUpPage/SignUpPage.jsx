import AuthForm from "../../features/auth/ui/AuthForm/AuthForm";

function SignUpPage({ setUser }) {

  return <>
  <AuthForm type="signup" setUser={setUser} />
  </>;
}

export default SignUpPage;
