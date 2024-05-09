import { Link } from "react-router-dom";

const Login = () => {
    const { signIn, loading, google, github } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");
        return toast.success("your login successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    google()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        return toast.success("google log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("google log in failed");
      });
  };
  const handleGithub = () => {
    github()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        return toast.success("Github log in successfull");
      })
      .catch((error) => {
        console.error(error);
        return toast.error("Github log in failed");
      });
  };

  if (loading) {
    return (
      <div className="w-full h-[550px] flex justify-center items-center">
        <h1 className="text-5xl font-semibold">
          Loading <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </h1>
      </div>
    );
  }
  return (
    <div className="py-10 flex items-center justify-center px-3">
      <div className="w-[550px] border-2 border-[#e8604c] lg:px-10 px-3 py-8">
        <h1 className="text-center text-4xl font-bold text-[#e8604c]">
          Log In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <label>
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              {" "}
              Email*
            </span>
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </label>

          <label className="block">
            <span className="text-[#e8604c] font-medium text-xl py-2 block">
              {" "}
              Password*
            </span>
            <input
              type="password"
              placeholder="Please Enter Your Password"
              className="w-full border-2 border-[#e8604c] rounded-md px-4 py-3 outline-none"
              {...register("password", { required: true })}
            />

            <div className="flex justify-between">
              <p>
                {errors.password && (
                  <span className="text-red-700">This field is required</span>
                )}
              </p>
              <Link className="text-blue-900 underline">Forget Password ?</Link>
            </div>
          </label>

          <label className="mt-8 block">
            <input
              type="submit"
              value="Log In"
              className="w-full bg-[#e8604c] btn hover:bg-[#e8604c] text-white text-xl font-semibold outline-none"
            />
          </label>
        </form>

        <div className="flex justify-center items-center gap-6 mt-5">
          <button
            onClick={handleGoogle}
            className="bg-transparent btn hover:bg-transparent border border-[#e8604c]"
          >
            Google
          </button>
          <button
            onClick={handleGithub}
            className="bg-transparent btn hover:bg-transparent border border-[#e8604c]"
          >
            GitHub
          </button>
        </div>

        <div className="mt-2">
          <p className="text-center">
            New to this website ? Please ?
            <Link to="/register" className="underline font-bold text-blue-400">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;