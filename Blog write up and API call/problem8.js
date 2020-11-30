var securityQuestions = [
  {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter",
  },
  {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985",
  },
  {
    question: "What city were you born in?",
    expectedAnswer: "NYC",
  },
];
function chksecurityQuestions(securityQuestions, question, ans) {
  let flag = false;
  securityQuestions.forEach((current) => {
    if (current.question === question) {
      if (current.expectedAnswer === ans) {
        flag = true;
      } else flag = false;
    }
  });
  return flag;
}
//Test case1:
var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true

//Test case2:
ques = "What was your first pet’s name?";
ans = "DufferNutter";
status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase
