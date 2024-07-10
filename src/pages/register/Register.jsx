import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
const Register = () => {

  const { createUser } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);

    const email = form.get('email')
    const password = form.get('password')
    console.log(form.get('name'))
    console.log(form.get('photo'))
    console.log(email)
    console.log(password)

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
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
          <h3 className="text-3xl text-center">Please Register!</h3>

          <div className="card bg-base-100 w-full p-12 shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="URL" name="photo" className="input input-bordered" required />
              </div>
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

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <p>Already have an accout? please <Link className='text-blue-600' to='/login'>Login</Link></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;