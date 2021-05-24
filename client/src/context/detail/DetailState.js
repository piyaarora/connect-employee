import React, { useReducer } from "react";
import axios from 'axios'
import DetailContext from './detailContext'
import detailReducer from './detailReducer'
import {
    GET_DETAILS,
    ADD_DETAIL,
    DELETE_DETAIL,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_DETAIL,
    FILTER_DETAILS,
    CLEAR_DETAILS,
    CLEAR_FILTER,
    DETAIL_ERROR
} from '../types';

//create initial state
const DetailState = props => {
    const initialState = {
        details: null,
        current: null,
        filtered: null,
        error: null
    };


    const [state, dispatch] = useReducer(detailReducer, initialState);
    //get details
    const getDetails = async () => {

        try {
            const res = await axios.get('/api/details');
            dispatch({
                type: GET_DETAILS,
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type: DETAIL_ERROR,
                payload: err.response.msg
            })
        }
    }


    //add detail
    const addDetail = async detail => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/details', detail, config);
            dispatch({
                type: ADD_DETAIL,
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type: DETAIL_ERROR,
                payload: err.response.msg
            })
        }
    }


    //Delete detail
    const deleteDetail = async _id => {
        try {
            await axios.delete(`/api/details/${_id}`);
            dispatch({
                type: DELETE_DETAIL,
                payload: _id
            })

        } catch (err) {
            dispatch({
                type: DETAIL_ERROR,
                payload: err.response.msg
            })
        }

    }

    //Update Detail
    const updateDetail = async detail => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/details/${detail._id}`, detail, config);
            dispatch({
                type: UPDATE_DETAIL,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: DETAIL_ERROR,
                payload: err.response.msg
            })
        }

    }


    //clear details
    const clearDetails = () => {
        dispatch({ type: CLEAR_DETAILS })
    }

    //Set Current Detail
    const setCurrent = detail => {
        dispatch({ type: SET_CURRENT, payload: detail });
    }

    //Clear Current detail
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }


    //Filter Details
    const filterDetails = text => {
        dispatch({ type: FILTER_DETAILS, payload: text });
    }

    //clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }


    return (
        <DetailContext.Provider
            value={{
                details: state.details,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addDetail,
                deleteDetail,
                setCurrent,
                clearCurrent,
                updateDetail,
                filterDetails,
                clearFilter,
                getDetails,
                clearDetails
            }}>
            {
                props.children
            }
        </DetailContext.Provider>
    );
};

export default DetailState

