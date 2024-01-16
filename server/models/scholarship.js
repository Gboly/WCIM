import mongoose from "mongoose";

const schema = mongoose.Schema;

const scholarshipSchema = schema({
  firstName: { type: String, required: true, index: "text" },
  lastName: { type: String, required: true, index: "text" },
  middleName: { type: String, required: true, index: "text" },
  DOB: { type: String, required: true, index: "text" },
  phone: { type: String, required: true, index: "text" },
  email: { type: String, required: true, index: "text" },
  country: { type: String, required: true, index: "text" },
  city: { type: String, required: true, index: "text" },
  address: { type: String, required: true, index: "text" },
  postCode: { type: String, required: true, index: "text" },
  gender: { type: String, required: true, index: "text" },
  nationality: { type: String, required: true, index: "text" },
  guardianName: { type: String, required: true, index: "text" },
  guardianGender: { type: String, required: true, index: "text" },
  guardianPhone: { type: String, required: true, index: "text" },
  guardianAdress: { type: String, required: true, index: "text" },
  guardianEmail: { type: String, required: true, index: "text" },
  choiceSchool: { type: String, required: true, index: "text" },
  //If undergrad, transcript or evidence of result
  // If highschool grad, o'level result
  lastResult: { type: String, required: true, index: "text" },
  tuition: { type: String, required: true, index: "text" },
  courseDuration: { type: String, required: true, index: "text" },
  //Could be a fresher so, specify fresher
  currentYear: { type: String, required: true, index: "text" },
  otherSChoolExpensesCost: { type: String, required: true, index: "text" },
  essay: { type: String, required: true, index: "text" },
  createdAt: { type: Date, default: new Date() },
});

//on portal, calculate totalCost by multiplying tuition by number of years left (courseDuration - currentYear)

const Scholarship = mongoose.model("scholarhsip", scholarshipSchema);
export default Scholarship;
