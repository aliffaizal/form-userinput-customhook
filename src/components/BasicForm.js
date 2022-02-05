import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: secNameValue,
    isValid: secNameValid,
    hasError: secNameError,
    valueChangeHandler: secNameChangeHandler,
    inputBlurHandler: secNameBlurHandler,
    reset: resetSecName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formValid = false;

  if (firstNameValid && secNameValid && emailValid) {
    formValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    console.log("Submitted");
    console.log(firstNameValue, secNameValue, emailValue);

    resetFirstName();
    resetSecName();
    resetEmail();
  };

  const firstNameClasses = firstNameError
    ? "form-control invalid"
    : "form-control";
  const secNameClasses = secNameError ? "form-control invalid" : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && <p>Please enter first name.</p>}
        </div>
        <div className={secNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={secNameValue}
            onChange={secNameChangeHandler}
            onBlur={secNameBlurHandler}
          />
          {secNameError && <p>Please enter second name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p>Please enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
