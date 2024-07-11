import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        // navigate after signIN
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (

    <div>
      <Navbar />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <h3 className="text-3xl text-center">Please Login!</h3>

          <div className="card bg-base-100 w-full p-12 shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p>Do not have an accout? please <Link className='text-blue-600' to='/register'>Register</Link></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;