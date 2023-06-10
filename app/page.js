'use client'
import firebase from './firebase';
import firebase1 from 'firebase/app';
import 'firebase/app';
import React from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";


// export default function HomePage() {
export default class page extends React.Component {
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(
            {
                [name]: value,
            }
        );
    };
    configureCaptcha = () => {

        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log("recaptcha verified");
            },
            defaultCountry: "IN"
        }, auth);
    };
    onSubmitOtp = (e) => {
        e.preventDefault();
        const code = this.state.otp;
        console.log(code);
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user));
            console.log("Otp Verified");
            alert("User is Verified");
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });

    }

    onSignInSubmit = (e) => {
        e.preventDefault();
        this.configureCaptcha();

        const phoneNumber = "+91" + this.state.mobile;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("otp sent");
                // ...
            }).catch((error) => {
                console.log("otp not sent");
                // Error; SMS not sent
                // ...
            });
    };
    //   const sendVerificationCode = () => {
    //     const phoneNumber = "+1234567890"; // Enter the phone number you want to verify here

    //     const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container'); // Replace 'recaptcha-container' with the ID of your reCAPTCHA container element

    //     firebase.auth.signInWithPhoneNumber(phoneNumber,appVerifier)
    //       .then((confirmationResult) => {
    //         const verificationId = confirmationResult.verificationId;
    //         localStorage.setItem('verificationId', verificationId);
    //         // Proceed with the OTP verification
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }
    render() {
        return (
            <div>
                <h1>Welcome to my Next.js app</h1>
                <form onSubmit={this.onSignInSubmit}>
                    <div id='sign-in-button'></div>
                    <input type='number' name='mobile' placeholder='Enter Mobile Number' required onChange={this.handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
                <form onSubmit={this.onSubmitOtp}>
                    <input type='number' name='otp' placeholder='Enter otp Number' required onChange={this.handleChange}></input>
                    <button type='submit'>Verify</button>
                </form>
            </div>
        );
    }
}
