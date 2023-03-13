import * as Yup from "yup";
import moment from "moment";
export const userFormSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  dob: Yup.string()
    .test("DOB", "Age must be equal or greater than 18", (value) => {
      return moment().diff(moment(value), "years") >= 18;
    })
    .required("Please enter your Date of birth"),
  mobile: Yup.string().min(10).max(10).required("Please enter your Mobile no."),
});
