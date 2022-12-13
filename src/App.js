import logo from './logo.svg';
import './App.css';
import * as Yup from 'yup';
import {Form, useFormik} from 'formik'
function App() {
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 5) {
      errors.name = 'Must be 15 characters or less';
    }
    if(!values.channel){
      errors.channel='Required'
    }
  
  
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };
const validationSchema=()=>Yup.object({
  name: Yup.string()
    .max(5, 'Must be 15 characters or less')
    .required('Required!!!'),
  
  email: Yup.string().email('Invalid email address !!!').required('Required !!!'),
  channel:Yup.string().required('Required!!!')
})
  const Formik =useFormik({
    initialValues:{
      name:"",
      email:"",
      channel:""
    },
    onSubmit:values=>{
      console.log("Data",values)
    },
    validate,
    validationSchema
  })
  console.log("Visited",Formik.touched)
  return (
     <div>
  <form onSubmit={Formik.handleSubmit}>
    <label>Name</label>
    <input type="text" id='name' name="name" {...Formik.getFieldProps("name")} value={Formik.values.name}/>
    {Formik.errors.name&&Formik.touched.name ? <div>{Formik.errors.name}</div> : null}
    <label>Mail</label>
    <input type="email" id='name' name="email" {...Formik.getFieldProps("email")}/>
    {Formik.errors.email && Formik.touched.email? <div>{Formik.errors.email}</div> : null}
    <label>Channel</label>
    <input type="text" id='name' name="channel" onChange={Formik.handleChange} value={Formik.values.channel}/>
    {Formik.errors.channel && Formik.touched.channel? <div>{Formik.errors.email}</div> : null}

<button>Submit</button>
  </form>
  </div>
  
  );
}

export default App;
