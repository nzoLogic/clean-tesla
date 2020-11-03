const NAME = '[INSTANCE]:';
export const ADD_INSTANCE = `${NAME} ADD_INSTANCE`;
export const ADD_INSTANCE_SUCCESS = `${NAME} ADD_INSTANCE_SUCCESS`;
export const LOAD_INSTANCES = `${NAME} LOAD_INSTANCES`;


export const addInstance = () => {
  return {
    type: ADD_INSTANCE,
    payload: {
      id: 8,
      approvalStatus: 'initialized',
      startDay: 'Saturday',
      endDay: 'Sunday',
      startHour: '08:00',
      endHour: '10:00',
    }
  }
}

export const addInstanceSuccess = (instance) => ({
  type: ADD_INSTANCE_SUCCESS,
  payload: {
    ...instance,
  }
})