import React from 'react';
import Heading from "../../Component/Heading/Heading";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {TextField} from "@mui/material";
import {ErrorMessage} from "@hookform/error-message";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";
import Description from "../../Component/TitleContainer/Description/Description";
import {Link, useNavigate} from "react-router-dom";
import Title from "../../Component/TitleContainer/Title/Title";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../FireBase/firebase";
import {login} from "../../reduxSlice/userSlice";
import Header from "../../Header/Header";

function SignUpScreen() {
  const [passwordShown, setPasswordShown] = useState(false)
  const {register, handleSubmit, setValue, formState: {errors}} = useForm()
  const emailRef = register('email', {required: 'Enter an email.'})
  const passwordRef = register('password', {required: 'Enter an password.'})
  const yNameRef = register('yName', {required: 'Enter an your name.'})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = ({yName, email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          updateProfile(userCredential.user,{
            displayName: yName,
          })
          .then(() => {
            dispatch(login({
              id: nanoid(), name: yName, email: email, password: password,
            }))
            navigate('/')
          })
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (<div className='lg:mx-auto max-w-screen-lg'>
    <Heading title='Sign up' path='/account/sign-in'/>
    <Header/>
    <div className="lg:w-3/4 lg:mx-auto">
      <h2 className="pt-32 ml-5 mb-5 text-4xl">Sign Up</h2>
      <form className='w-auto mx-5 mt-24 lg:mb-7 lg:mt-0' onSubmit={handleSubmit(onSubmit)}>

        <div className="w-full relative mt-5">
          <TextField
            name='yName'
            label='Your Name'
            type='text'
            variant='standard'
            sx={{width: '100%'}}
            InputLabelProps={{
              style: {color: "rgba(0,0,0,.56)"},
            }}
            InputProps={{style: {fontWeight: "800"}}}
            onChange={e => setValue('yName', e.target.value)}
            inputRef={yNameRef.ref}
          />
          <ErrorMessage errors={errors} name="yName"
                        render={({message}) => (<div className='text-error mt-2 text-sm'>{message}</div>)}/>
        </div>

        <div className="w-full relative mt-5">
          <TextField
            name='email'
            label='Email Address'
            type='email'
            variant='standard'
            sx={{width: '100%'}}
            InputLabelProps={{
              style: {color: "rgba(0,0,0,.56)"},
            }}
            InputProps={{style: {fontWeight: "800"}}}
            onChange={e => setValue('email', e.target.value)}
            inputRef={emailRef.ref}
          />
          <ErrorMessage errors={errors} name="email"
                        render={({message}) => (<div className='text-error mt-2 text-sm'>{message}</div>)}/>
        </div>

        <div className="w-full relative mt-5">
          <TextField
            name='password'
            label='Password'
            type={passwordShown ? 'text' : 'password'}
            variant='standard'
            sx={{width: '100%'}}
            InputLabelProps={{
              style: {color: "rgba(0,0,0,.56)"},
            }}
            InputProps={{style: {fontWeight: "800"}}}
            onChange={e => setValue('password', e.target.value)}
            inputRef={passwordRef.ref}
          />
          {passwordShown ? (<VisibilityOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='absolute right-10 top-5'
          />) : (<VisibilityOffOutlinedIcon
            onClick={() => setPasswordShown(!passwordShown)}
            className='absolute right-10 top-5'
          />)}
          <ErrorMessage errors={errors} name="password"
                        render={({message}) => (<div className='text-error mt-2 text-sm'>{message}</div>)}/>
        </div>

        <div className='py-2'>
          <SubmitButton name='Create account' type='submit'/>
        </div>
        <div className="flex justify-center mt-7 w-11/12 mx-auto">
          <Description element="Already have account?" className='text-sm'/>
          <Link to='/account/sign-in'>
            <Title element='Sign In.' className='text-sm ml-2 '/>
          </Link>
        </div>
      </form>
    </div>
  </div>);
}

export default SignUpScreen;