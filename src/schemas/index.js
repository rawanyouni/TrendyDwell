import * as yup from "yup";
const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{5,}$/;
export const validationSchema = yup.object().shape({
  // name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(regexPattern, {
      message: "Please create a stronger password",
    })
    .required("Required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password")], "Passwords must match")
  //     .required("Required"),
});
export const getValidationSchema = (formType) => {
  if (formType === "Create Account") {
    return validationSchema.shape({
      name: yup.string().required("Required"),
    });
  }
  return validationSchema;
};
