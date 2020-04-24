import axios from 'axios';

export const callApiCovid = () => dispatch => {
  axios.get('/list',)
  .then( res => {
    const patientData = res.data.data;
    dispatch({ type: 'CALL_API_COVID_TAKE_ALL_PATIENT', payload: { patientData } });
  })
  .catch(err => {
    console.log(err);
  });
};

export const setCurrentPatient = (patient) => dispatch => {
  dispatch({ type: 'TAKE_CURRENT_PATIENT', payload: { patient } });
}

export const sortPatientByDate = (patientArray, sort) => dispatch => {
  let newPatientData = '';
  if(sort){
    newPatientData = patientArray.sort((a, b) => {
      const DateStringA = Date.parse(a.verifyDate);
      const DateStringB = Date.parse(b.verifyDate);
      
      return DateStringA - DateStringB 
    });
  }
  else {
    newPatientData = patientArray.sort((a, b) => {
      const DateStringA = Date.parse(a.verifyDate);
      const DateStringB = Date.parse(b.verifyDate);
      
      return DateStringB - DateStringA
    });
  }
  dispatch({ type: 'SORT_PATIENT_BY_DATE', payload: { newPatientData } });
}