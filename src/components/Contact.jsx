import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessMessage from "./SuccessMessage";

function Contact({onSuccess}) { // Accepts the prop onSuccess
    const {register, handleSubmit, formState: { errors }, reset} = useForm(); // register — connects input fields to react-hook-form. formState.errors — contains any validation errors detected by react-hook-form.

    const onSubmit = data => {
      console.log("Form data:", data);
      onSuccess(true);
      reset();
    };
    
    return (
        <main className="contact">
          <div className="contact__container">
            <h1>Contact Us</h1>

              <form onSubmit={handleSubmit(onSubmit)} className="contact__form" id="contact-form"> {/* handleSubmit(onSubmit) validates the form. */}
                
                <div className="contact__wrapper">
                  <div className="contact__form-input">
                    <label htmlFor="firstName">First Name <span aria-hidden="true">*</span></label>
                    <input 
                      type="text" 
                      name="firstName" 
                      id="firstName" 
                      className="contact__input"
                      {...register("firstName", {required: "This field is required"})} // connects this input to react-hook-form under the name "firstName".
                    />
                    {errors.firstName && (
                      <p className="contact__error">{errors.firstName.message}</p> // If it's empty, the error message "This field is required" will be stored in errors.firstName.
                    )}
                  </div>
                  
                  <div className="contact__form-input">
                    <label htmlFor="lastName">Last Name <span aria-hidden="true">*</span></label>
                    <input 
                      type="text" 
                      name="lastName" 
                      id="lastName" 
                      className="contact__input" 
                      {...register("lastName", {required: "This field is required"})}
                    />
                    {errors.lastName && (
                      <p className="contact__error">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="contact__form-input">
                  <label htmlFor="emailAdress">Email Address <span aria-hidden="true">*</span></label>
                  <input 
                    type="email" 
                    name="emailAddress" 
                    id="emailAddress" 
                    className="contact__input" 
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Please enter a valid email address",
                        }
                    })}
                  />
                  {errors.email &&
                   <p className="contact__error">{errors.email.message}</p>}
                </div>

                <div className="contact__form-input">
                  <div role="radiogroup" aria-labelledby="queryTypeLabel">
                    <p className="query-texts" id="queryTypeLabel">Query Type <span aria-hidden="true">*</span></p>
                    <div className="contact__wrapper">
                      <div className="contact__query">
                        <label htmlFor="queryType">
                          <input 
                            type="radio" 
                            name="queryType" 
                            id="queryType" 
                            className="contact__radio"
                            {...register("queryType", {required: "Please select a query type"})}
                          />
                          <span className="contact__query-text">General Enquiry</span>
                        </label>
                      </div>
                      
                      <div className="contact__query">
                        <label htmlFor="queryType">
                          <input 
                            type="radio"
                            name="queryType" 
                            id="queryType" 
                            className="contact__radio"
                            {...register("queryType", {required: "Please select a query type"})}
                          />
                          <span className="contact__query-text">Support Request</span>
                        </label>
                      </div>
                    </div>
                    {errors.queryType &&
                    <p className="contact__error">{errors.queryType.message}</p>}
                  </div>
                </div>

                <div className="contact__form-input">
                  <div className="contact__textarea-input"> 
                    <label htmlFor="textarea">Message <span aria-hidden="true">*</span></label>
                    <textarea 
                      name="textarea" 
                      id="textarea"
                      className="contact__input contact__textarea"
                      {...register("message", {required: ("This field is required")})}
                    />
                    {errors.message && 
                    <p className="contact__error">{errors.message.message}</p>}
                  </div>
                </div>

                <div className="contact__term">
                  <label htmlFor="checkBox">
                    <div className="contact__checkbox-wrapper">
                      <input 
                      type="checkbox" 
                      name="checkBox" 
                      {...register("consent", {required: "To submit this form, please consent to being contacted"})}
                      />

                      <div className="contact__checkbox-details">
                        I consent to being contacted by the team <span aria-hidden="true">*</span>
                      </div>
                    </div>
                    {errors.consent && 
                    <p className="contact__error">{errors.consent.message}</p>}
                  </label>
                </div>

                <input type="submit" value="Submit" id="submitBtn" className="contact__submit"/>

              </form>
          </div>
        </main>
    )
}

export default Contact;