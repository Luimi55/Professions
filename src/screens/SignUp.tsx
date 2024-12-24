import React,{ useRef, useState } from "react";
import { 
  makeStyles,
  Field, 
  Input,
  Title2,
  Button,
  Combobox,
  Option,
  Dropdown
 } from "@fluentui/react-components";
import Grid from '@mui/material/Grid2';
import FileUploader from "../components/FileUploader";
import countries from "../../data/Countries.json"
import { useFormik } from 'formik' 
import * as Yup from 'yup';
import UserModel from "../models/UserModel";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../redux/Store'

type Props = {};


const SignUp = (props: Props) => {
  const styles = useStyles();

  const getUserName = () => {
    const user: UserModel = useSelector((state: RootState) =>state.User)
    if(user){
      return user.name
    } else {
      return ""
    }
  }

  const handleFileChange = (event: any) =>{
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      console.log("FileUpload -> files", fileList);
    }
  }

  const formik = useFormik<UserModel>({
    initialValues:{
      name: getUserName(),
      country: '',
      jobTitle: '',
      company: '',
      degree: '',
      degreeFile: ''
    },
    validationSchema:Yup.object({
      name: Yup.string()
      .max(64, "Enter less than 64 characters")
      .required("This field is required"),
      country: Yup.string()
      .required("This field is required"),
      jobTitle: Yup.string()
      .max(64, "Enter less than 64 characters")
      .required("This field is required"),
      degree: Yup.string()
      .optional()
      .max(64, "Enter less than 64 characters"),
      degreeFile: Yup.string()
      .optional()
    }),
    onSubmit: values => {
      console.log(values)
    }
  })

  const setCountry = (value: any) => {
    formik.setFieldValue("country", value.optionValue)
  }
  return (
    <div className={styles.signUpScreen}>
      <Grid container spacing={3} className={styles.signUpForm}>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Title2>Registrate</Title2>
        </Grid>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="Nombre*"
            validationMessage={formik.errors.name}
          >
            <Input 
              value={formik.values.name}
              onChange={formik.handleChange('name')}
            />
          </Field>
        </Grid>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="País*"
            validationMessage={formik.errors.country}
          >
            <Combobox 
              onOptionSelect={(e, data)=>setCountry(data)}
            >
              {countries.map(country=>(
                <Option key={country.code} value={country.code}>
                    {country.name}
                </Option>
              ))}
            </Combobox>
          </Field>
        </Grid>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="Posición laboral*"
            validationMessage={formik.errors.jobTitle}
          >
            <Input
            value={formik.values.jobTitle}
            onChange={formik.handleChange('jobTitle')}
             />
          </Field>
        </Grid>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="Empresa para la que trabajas"
            validationMessage={formik.errors.company}
          >
            <Input
            value={formik.values.company}
            onChange={formik.handleChange('company')}
            />
          </Field>
        </Grid>
        <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="Título Universitario"
            validationMessage={formik.errors.degree}
          >
            <Input 
            value={formik.values.degree}
            onChange={formik.handleChange('degree')}
            />
          </Field>
        </Grid>
        {/* <Grid size={{xs: 12, sm: 5, md: 12}}>
          <Field
            label="Hashtags"
            validationState="success"
          >
            <Input />
          </Field>
        </Grid> */}
        <Grid size={{xs: 12, sm: 5, md: 12}}>
        <Field
            label="Subir título"
            validationState="success"
          >
            <FileUploader handleFileChange={handleFileChange}/>
          </Field>
        </Grid>
        <Button 
        appearance="primary" 
        className={styles.floatRight}
        onClick={()=>formik.handleSubmit()}
        >
            Siguiente
        </Button>
      </Grid>

    </div>
  );
};

const useStyles = makeStyles({
  signUpScreen: {
    backgroundColor: "#e6e3e3",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  signUpForm: {
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    padding: "20px",
    alignItems: 'center',
    width: '400px'
  },
  floatRight: {
    marginLeft: 'auto'
  }
});

export default SignUp;
