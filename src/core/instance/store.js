import * as actions from './actions'

const initialState = createState();

export default function reducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case actions.SET_INSTANCE_LOADING: {
      return {
        ...state,
        ...payload
      }
    }
    case actions.ADD_INSTANCE_SUCCESS: {
      const { instances } = state;
      const updatedInstances = [ ...instances, action.payload];

      return {
        ...state,
        instances: [...updatedInstances]
      }  
    }
    default: 
      return state
  }
}


function createState() {
  return {
    instances: [
      {
        id: '1',
        approvalStatus: 'approved',
        startDay: 'Mon',
        endDay: 'Mon',
        startTime: '04:00',
        endTime: '10:00',
      },
      {
        id: '2',
        approvalStatus: 'pending',
        startDay: 'Tue',
        endDay: 'Tue',
        startTime: '04:00',
        endTime: '10:00',
      },
      {
        id: '3',
        approvalStatus: 'rejected',
        startDay: 'Wed',
        endDay: 'Wed',
        startTime: '04:00',
        endTime: '10:00',
      }
    ],
    initialized: false,
    isLoading: false,
    complete: false,
    failed: false,
    error: ''
  }
}