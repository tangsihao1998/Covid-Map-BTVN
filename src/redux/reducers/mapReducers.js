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
    case 'GET_CURRENT_ALL_PATIENT_DATA':
      return {
        ...state,
        currentPatientData: {
          ...payload.currentPatientData
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
    case 'GET_SELECT_DATE':
      return {
        ...state,
        dateSelect: payload.dateSelect,
      }
    default:
      return state;
  }
};
