// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const SignIn = () => {
  // const { signIn, loading, google } = useContext(AuthContext);
  const { signIn, loading, google } = useAuth();
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then(() => {
        // console.log(result.user);
        navigate(location.state ? location.state : "/");
        return toast.success("your login successfull");
      })
      // .catch((error) => {
      //   console.log(error);
      // });
  };

  const handleGoogle = () => {
    google()
      .then(() => {
        // console.log(result);
        navigate(location?.state ? location.state : "/");
        return toast.success("google log in successfull");
      })
      .catch(() => {
        // console.error(error);
        return toast.error("google log in failed");
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
    <div className="py-10 flex items-center justify-center px-3 bg-[#f5f4f4] shadow-inner">
      <div className="w-[550px] bg-[#fa441218] shadow-xl  rounded-lg lg:px-10 px-3 py-8">
        <h1 className="text-center text-4xl font-bold text-[#FA4612]">
          Log In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <label>
            <span className="text-[#FA4612] font-medium text-xl py-2 block">
              {" "}
              Email*
            </span>
            <input
              type="email"
              placeholder="Please Enter Your Email"
              className="w-full border-2 outline-[#FA4612] rounded-md px-4 py-3"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700">This field is required</span>
            )}
          </label>

          <label className="block">
            <span className="text-[#FA4612] font-medium text-xl py-2 block">
              {" "}
              Password*
            </span>
            <input
              type="password"
              placeholder="Please Enter Your Password"
              className="w-full border-2 outline-[#FA4612] rounded-md px-4 py-3"
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
              className="w-full bg-[#FA4612] btn hover:bg-[#FA4612] text-white text-xl font-semibold outline-none"
            />
          </label>
        </form>

        <div className="flex justify-center items-center gap-6 mt-5">
          <button
            onClick={handleGoogle}
            className="bg-transparent btn hover:bg-transparent border border-[#FA4612]"
          >
            Google
          </button>
        </div>

        <div className="mt-2">
          <p className="text-center">
            New to this website ? Please ?
            <Link to="/signup" className="underline font-bold text-blue-400">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
