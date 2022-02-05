import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (enteredNameValid && enteredEmailValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [enteredNameValid, enteredEmailValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameValid && !enteredEmailValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue); --> VARIANT OF USING USEREF FOR INPUT DATA

    resetName();
    resetEmail();
  };

  // FOR MAKE CLASSNAME DYNAMIC
  const nameInputClasses = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
