import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
     .min(8, "Password must be at least 8 characters")
    // .matches(/^(?=.*[A-Z])(?=.*\W)(?=.*\d)[A-Za-z\d\W]{8,}$/, 'Password must contain at least one uppercase letter, one symbol, and be at least 8 characters long')
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log("sign in submit:" + values);
      }}
    >
      <Form>
        <div className="flex flex-col w-screen h-screen items-center bg-gray-200  justify-center">
          <div className="sm:w-screen lg:w-1/3 md:w-1/2 mx-auto flex flex-col bg-white rounded-lg  border p-5">
            <div className="pb-6 flex justify-between">
              <div className="">
                <p className="text-3xl font-bold">LogIn</p>
                <p className="my-4 flex">
                  <p>or &nbsp;</p>
                  <a className="text-orange-500 font-semibold cursor-pointer">
                    create an account
                  </a>
                </p>
              </div>
              <div>
                <img
                  className="w-24"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col w-full my-3">
              <label className="font-semibold pb-1" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                placeholder="Enter email"
                id="email"
                name="email"
                className="input input-bordered w-full focus:outline-none"
              />
              {/* // the render callback will only be called when the // field has
              been touched and an error exists and subsequent updates. */}
              {/* <ErrorMessage name="email">
                {(msg) => <div className="text-red-500 p-2 text-sm font-semibold">{msg}</div>}
              </ErrorMessage> */}
              <ErrorMessage component="div" className="text-red-500 p-2 text-sm font-semibold" name="email" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold pb-1" htmlFor="">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full focus:outline-none"
              />
               <ErrorMessage name="password">
                {(msg) => <div className="text-red-500 p-2 text-sm font-semibold">{msg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <button
                type="submit"
                className="p-4 w-full bg-orange-500 rounded-lg my-3 text-white text-lg hover:bg-orange-400"
              >
                LogIn
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignIn;
