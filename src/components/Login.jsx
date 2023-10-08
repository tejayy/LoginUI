import Input from "./Input";

const Login = () => {
    return (
        <form className="form">
            <Input
            type='text'
            placeholder='username' 
            />
            <Input
            type='password'
            placeholder='password'  
            />
          
          
          <button type="submit">LOGIN</button>
        </form>
    );
}
 
export default Login;