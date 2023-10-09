import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-[100vh]">
      {/* Sign in */}
      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left md:w-1/2">
              <h1 className="text-2xl lg:text-5xl font-bold">
                Sign in to connect with us.
              </h1>
              <p className="py-6">
                Welcome back to DreamCraft Events! Our Sign-In page is your key
                to accessing your personalized account and managing your event
                planning needs with ease. Whether you are a returning client or a
                first-time visitor, this is where you can securely log in to
                explore our services, view your event details, and make any
                necessary updates.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-xl px-5 w-full py-2.5 text-center mr-2 mb-2"
                  >
                    Sign in
                  </button>
                </div>
                <div>
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link to="/signup">
                      <button
                        type="button"
                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"
                      >
                        Sign up
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Sign in */}
    </div>
  );
};

export default SignIn;
