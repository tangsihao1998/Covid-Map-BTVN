export default initialState => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CALL_API_COVID_TAKE_ALL_PATIENT':
      return {
        ...state,
        patientData: {
          ...payload.patientData
        },
      };
    case 'TAKE_CURRENT_PATIENT':
      return {
        ...state,
        currentPatient: {
          ...payload.patient
        }
      }
    case 'SORT_PATIENT_BY_DATE':
      return {
        ...state,
        patientData: {
          ...payload.newPatientData
        },
      }
    default:
      return state;
  }
};
