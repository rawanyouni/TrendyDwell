// import React from "react";
// import { useFormik } from "formik";
// import "./AuthComponent.css";
// import { AuthInput, SocialAuth } from "../index";
// import { validationSchema } from "../../schemas/index";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// import { FaFacebookF } from "react-icons/fa6";
// import { FaGooglePlusG } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import logo from "../../assets/logo.png";
// const AuthComponent = (props) => {
//   const onSubmit = async (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // hay btntr senye abl ma tfadiyn
//     actions.resetForm();
//     console.log("submitted");
//   };
//   const {
//     values,
//     isSubmitting,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit,
//   });
//   console.log(errors);
//   return (
//     <Formik
//       initialValues={{ name: "", email: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {() => (
//         <Form>
//           <div>
//             <div className={`form-container ${props.className}`}>
//               {/* <form action="#" onSubmit={handleSubmit}> */}
//               {/* <div className="logoDiv">
//             <img className="logoImg" src={logo} alt="logo" />
//           </div> */}
//               <h1>{props.formTitle}</h1>
//               <div className="social-container">
//                 <SocialAuth href="#" socialIcon={<FaFacebookF />} />
//                 <SocialAuth href="#" socialIcon={<FaGooglePlusG />} />
//                 <SocialAuth href="#" socialIcon={<FaLinkedinIn />} />
//               </div>
//               {props.formTitle === "Create Account" ? (
//                 <span>or use your email for registration</span>
//               ) : (
//                 <span>or use your account</span>
//               )}
//               {props.formTitle === "Create Account" && (
//                 <>
//                   {/* <AuthInput
//               type="text"
//               placeholder="Name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="name"
//               className={errors.name && touched.name ? "input-error" : ""}
//             />
//             {errors.name && touched.name && (
//               <p className="error-field">{errors.name}</p>
//             )} */}
//                   <Field name="name" type="text" className="textFieldForm" />
//                   <ErrorMessage name="name" />
//                 </>
//               )}
//               {/* <AuthInput
//               type="email"
//               placeholder="Email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="email"
//               className={errors.email && touched.email ? "input-error" : ""}
//             />
//             {errors.email && touched.email && (
//               <p className="error-field">{errors.email}</p>
//             )} */}
//               <Field name="email" type="email" className="textFieldForm " />
//               <ErrorMessage name="email" />
//               {/* <AuthInput
//               type="password"
//               placeholder="Password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="password"
//               className={
//                 errors.password && touched.password ? "input-error" : ""
//               }
//             />
//             {errors.password && touched.password && (
//               <p className="error-field">{errors.password}</p>
//             )} */}
//               <Field
//                 name="password"
//                 type="password"
//                 className="textFieldForm "
//               />
//               <ErrorMessage name="password" />
//               {props.formTitle === "Sign In" && (
//                 <a href="#">Forgot your password?</a>
//               )}
//               <button
//                 type="submit"
//                 onClick={props.onClickButton}
//                 disabled={props.formTitle === "Create Account" && isSubmitting}
//               >
//                 {props.authAction}
//               </button>
//               <p className="authMessageClassName">{props.authMessage}</p>
//               {/* </form> */}
//               {/* <span className="animatedWebsiteName">Trendy Dwell</span> */}
//             </div>
//             //{" "}
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default AuthComponent;

// import React from "react";
// import { useFormik } from "formik";
// import "./AuthComponent.css";
// import { AuthInput, SocialAuth } from "../index";
// import { validationSchema } from "../../schemas/index";

// import { FaFacebookF } from "react-icons/fa6";
// import { FaGooglePlusG } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import logo from "../../assets/logo.png";
// const AuthComponent = (props) => {
//   const onSubmit = async (values, actions) => {
//     console.log(values);
//     console.log(actions);
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // hay btntr senye abl ma tfadiyn
//     actions.resetForm();
//     console.log("submitted");
//   };
//   const {
//     values,
//     isSubmitting,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit,
//   });
//   console.log(errors);
//   return (
//     // <div>
//     <div className={`form-container ${props.className}`}>
//       <form action="#" onSubmit={handleSubmit}>
//         {/* <div className="logoDiv">
//             <img className="logoImg" src={logo} alt="logo" />
//           </div> */}
//         <h1>{props.formTitle}</h1>
//         <div className="social-container">
//           <SocialAuth href="#" socialIcon={<FaFacebookF />} />
//           <SocialAuth href="#" socialIcon={<FaGooglePlusG />} />
//           <SocialAuth href="#" socialIcon={<FaLinkedinIn />} />
//         </div>
//         {props.formTitle === "Create Account" ? (
//           <span>or use your email for registration</span>
//         ) : (
//           <span>or use your account</span>
//         )}
//         {props.formTitle === "Create Account" && (
//           <>
//             <AuthInput
//               type="text"
//               placeholder="Name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="name"
//               className={errors.name && touched.name ? "input-error" : ""}
//             />
//             {errors.name && touched.name && (
//               <p className="error-field">{errors.name}</p>
//             )}
//           </>
//         )}
//         <AuthInput
//           type="email"
//           placeholder="Email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           name="email"
//           className={errors.email && touched.email ? "input-error" : ""}
//         />
//         {errors.email && touched.email && (
//           <p className="error-field">{errors.email}</p>
//         )}
//         <AuthInput
//           type="password"
//           placeholder="Password"
//           value={values.password}
//           onChange={handleChange}
//           onBlur={handleBlur}
//           name="password"
//           className={errors.password && touched.password ? "input-error" : ""}
//         />
//         {errors.password && touched.password && (
//           <p className="error-field">{errors.password}</p>
//         )}
//         {props.formTitle === "Sign In" && <a href="#">Forgot your password?</a>}
//         <button
//           type="submit"
//           onClick={props.onClickButton}
//           disabled={props.formTitle === "Create Account" && isSubmitting}
//         >
//           {props.authAction}
//         </button>
//         <p className="authMessageClassName">{props.authMessage}</p>
//       </form>
//       {/* <span className="animatedWebsiteName">Trendy Dwell</span> */}
//     </div>
//     // </div>
//   );
// };

// export default AuthComponent;
import React, { useEffect, useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getValidationSchema } from "../../schemas/index";
import { AuthInput, SocialAuth } from "../index";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./AuthComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { autheticateUser } from "../../api/UserApi";
import { setToken, resetToken } from "../../redux/slices/tokenSlice";
import { purgePersistedState } from "../../redux/store";
import { GlobalVariablesContext } from "../../GlobalVariables";
import { UpAndDownLoadingAnimation } from "../index";
//npm install redux-persist
const AuthComponent = (props) => {
  const { loading, setLoading, hideError, setHideError } = useContext(
    GlobalVariablesContext
  );
  useEffect(() => {
    const handleClick = () => {
      console.log("hello sign in");
      if (hideError == false) {
        setHideError(true);
        console.log(hideError);
      }
    };

    const signInButton = document.querySelector("#signIn");
    if (signInButton) {
      signInButton.addEventListener("click", handleClick);
      // setHideError(false);
    }

    // Cleanup event listener on unmount
    return () => {
      if (signInButton) {
        signInButton.removeEventListener("click", handleClick);
      }
    };
  }, [hideError, setHideError]);

  useEffect(() => {
    console.log("Updated hideError:", hideError);
  }, [hideError]);

  // useEffect(() => {
  //   if (hideError) {
  //     setErrorsForm({
  //       nameError: "",
  //       emailError: "",
  //       passwordError: "",
  //       usedEmailError: "",
  //     });
  //     setHideError(false);
  //   }
  // }, [hideError]);
  // console.log(loading);
  const handleFlip = () => {
    document
      .querySelector(".container-of-two-forms")
      .classList.toggle("flipped");
    setErrorsForm({
      nameError: "",
      emailError: "",
      passwordError: "",
      usedEmailError: "",
    });
  };
  const validationSchema = getValidationSchema(props.formTitle);
  const baserUrl = useSelector((state) => state.apiConfig.baseUrl || "");
  const token = useSelector((state) => state.token.token || "");
  const container = document.querySelector(".container");

  const [errorsForm, setErrorsForm] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    usedEmailError: "",
  });

  // console.log(baserUrl);
  let updateError = (field, errorMessage) => {
    setErrorsForm((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      // Temporarily skip validation
      onSubmit={async (values, actions) => {
        setErrorsForm({
          nameError: "",
          emailError: "",
          passwordError: "",
          usedEmailError: "",
        });
        if (props.formTitle === "Create Account") {
          const result = await autheticateUser(
            `${baserUrl}/signup`,
            values,
            loading,
            setLoading
          );
          // console.log(result);
          if (typeof result === "object") {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if ("invalidPassword" in result) {
              updateError("passwordError", result.invalidPassword);
            }
            if ("invalidEmail" in result) {
              updateError("emailError", result.invalidEmail);
            }
            if ("invalidName" in result) {
              updateError("nameError", result.invalidName);
            }
            if ("usedEmail" in result) {
              updateError("usedEmailError", result.usedEmail);
            }
          } else {
            const container = document.querySelector(".container");
            console.log(container);
            if (
              container &&
              container.classList.contains("right-panel-active")
            ) {
              container.classList.remove("right-panel-active");
            }
            actions.resetForm();
            // container.classList.remove("right-panel-active");
            handleFlip();
            setIsSignupSuccessful(true);
            console.log("submitted");
          }
        }

        if (props.formTitle === "Sign In") {
          console.log("hello");
          const result = await autheticateUser(
            `${baserUrl}/login`,
            values,
            loading,
            setLoading
          );
          console.log(result);
          if (result && result[0].token) {
            // container.classList.add("right-panel-active");
            // purgePersistedState();
            setToken(result[0]);
            console.log("hello");
          }
          if (result === "password isn't correct") {
            updateError("passwordError", result);
          }
          if (result === "password isn't correct") {
            updateError("passwordError", result);
          }
          if (result === "email not found") {
            updateError("emailError", result);
          }
        }
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <div className={`form-container ${props.className}`}>
          <Form>
            <h1>{props.formTitle}</h1>
            <div className="social-container">
              <SocialAuth href="#" socialIcon={<FaFacebookF />} />
              <SocialAuth href="#" socialIcon={<FaGooglePlusG />} />
              <SocialAuth href="#" socialIcon={<FaLinkedinIn />} />
            </div>
            {props.formTitle === "Create Account" ? (
              <span>or use your email for registration</span>
            ) : (
              <span>or use your account</span>
            )}
            {props.formTitle === "Create Account" && (
              <>
                <Field
                  name="name"
                  as={AuthInput}
                  type="text"
                  placeholder="Name"
                  className={({ field, form: { touched, errors } }) =>
                    touched[field.name] && errors[field.name]
                      ? "input-error"
                      : ""
                  }
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="error-field"
                />
                {errorsForm.nameError && (
                  <div className="error-field">{errorsForm.nameError}</div>
                )}
              </>
            )}
            <Field
              name="email"
              as={AuthInput}
              type="email"
              placeholder="Email"
              className={({ field, form: { touched, errors } }) =>
                touched[field.name] && errors[field.name] ? "input-error" : ""
              }
            />
            <ErrorMessage name="email" component="p" className="error-field" />
            {errorsForm.emailError && hideError && (
              <div className="error-field">{errorsForm.emailError}</div>
            )}
            {errorsForm.usedEmailError && (
              <div className="error-field">{errorsForm.usedEmailError}</div>
            )}
            <Field
              name="password"
              as={AuthInput}
              type="password"
              placeholder="Password"
              className={({ field, form: { touched, errors } }) =>
                touched[field.name] && errors[field.name] ? "input-error" : ""
              }
            />
            (
            <ErrorMessage
              name="password"
              component="p"
              className="error-field"
            />
            )
            {errorsForm.passwordError && (
              <div className="error-field">{errorsForm.passwordError}</div>
            )}
            {props.formTitle === "Sign In" && (
              <a href="#">Forgot your password?</a>
            )}
            <button
              type="submit"
              onClick={props.onClickButton}
              disabled={props.formTitle === "Create Account" && isSubmitting}
            >
              {props.authAction}
            </button>
            {/* <p className="authMessageClassName">{props.authMessage}</p> */}
            <p className="authMessageClassName">
              {props.formTitle === "Create Account" ? (
                <>
                  Already have an account?
                  {/* <span onClick={handleFlip} className="authActionSignIn"> */}
                  <span
                    onClick={() => {
                      resetForm();
                      handleFlip();
                    }}
                    className="authActionSpan"
                  >
                    Sign In
                  </span>
                </>
              ) : (
                <>
                  {" "}
                  Don't have an account?
                  {/* <span onClick={handleFlip} className="authActionSignUp"> */}
                  <span
                    onClick={() => {
                      resetForm();
                      handleFlip();
                    }}
                    className="authActionSpan"
                  >
                    Sign Up
                  </span>
                </>
              )}
            </p>
            {/* <p style={{ backgroundColor: "red" }}>hello</p> */}
            {loading && (
              <div className="up-down-loading-animation">
                <UpAndDownLoadingAnimation />
              </div>
            )}
            {/* {isSignupSuccessful && (
              <p className="successfull-account">
                Your account has been successfully created!
              </p>
            )} */}
            {/* <p style={{ backgroundColor: "red" }}>hello</p> */}
            {/* )} */}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AuthComponent;
