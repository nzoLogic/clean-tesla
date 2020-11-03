export const API_REQUEST = 'API_REQUEST';

export const apiRequest = ({ meta, payload }) => ({
  type: `${meta.entity} API_REQUEST`,
  payload,
  meta,
})