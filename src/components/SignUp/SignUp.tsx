import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import SignUpSchema from './SignUpSchema';
import { InputPrimary } from '../InputPrimary';

import { registerUser } from '..//..//redux/auth/SignUp/operations';
import { AppDispatch } from '../../redux';


import imgForWelcomePage from '..//..//assets/images/ImgForWelcomePage/imgForWelcomePage.jpg';
import {
  BlockSignUp,
  ContainerSignUp,
  FormContainer,
  ImgSignUp,
  ParagraphSignUp,
  TitleSignUp,
  BtnSignUp,
  WidthInput,
} from './SignUp.styled';


const SignUpForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const setToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (
      values: { name: string; email: string; password: string },
      { resetForm }
    ) => {
      try {
        const response = await dispatch(registerUser(values));
        resetForm();
        const token = (response.payload as { data?: { token: string } })?.data
          ?.token;
        if (token) {
          setToken(token);
          return navigate('/profile');
        }
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
  });

  return (
    <ContainerSignUp>
      <BlockSignUp>
        <TitleSignUp>Sign up</TitleSignUp>
        <ParagraphSignUp>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </ParagraphSignUp>
        <FormContainer onSubmit={formik.handleSubmit}>
          <WidthInput>
            <InputPrimary
              bordercolor={
                formik.errors.name && formik.touched.name ? 'error' : 'default'
              }
              name="name"
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </WidthInput>
          {formik.errors.name && formik.touched.name && (
            <div>{formik.errors.name}</div>
          )}
          <WidthInput>
            <InputPrimary
              bordercolor={
                formik.errors.email && formik.touched.email
                  ? 'error'
                  : 'default'
              }
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </WidthInput>
          {formik.errors.email && formik.touched.email && (
            <div>{formik.errors.email}</div>
          )}
          <WidthInput>
            <InputPrimary
              bordercolor={
                formik.errors.password && formik.touched.password
                  ? 'error'
                  : 'default'
              }
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </WidthInput>
          {formik.errors.password && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}

          <BtnSignUp htmlType="submit" type="primary">
            Sign Up
          </BtnSignUp>
        </FormContainer>
      </BlockSignUp>
      <ImgSignUp
        src={imgForWelcomePage}
        alt="The girl shows an example of a forward leg kick"
      />
    </ContainerSignUp>
  );
};

export default SignUpForm;
