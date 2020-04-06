import { GET_ERRORS, CLEAR_ERRORS } from './types';

// Return errors
export const returnERRORS = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

// Clear errors
export const clearERRORS = () => {
    return {
        type: CLEAR_ERRORS
    };
};