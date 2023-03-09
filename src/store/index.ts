import {createStore , combineReducers } from 'redux'

interface Action {
    totalbill?: number;
    tip?: number | string;
    npeople?: number;
    tipbyperson?: number;
    totalbyperson?: number;
    type?: string;
}

const INITIAL_STATE = [
    {
        totalbill: 0,
        tip: 0,
        npeople: 1,
        tipbyperson: 0,
        totalbyperson: 0,
    }
]

export function reducerTotalBill (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TOTAL_BILL'){ return [ ...state, action.totalbill ] } return state   }
export function reducerTip (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TIP'){ return [ ...state, action.tip ] } return state   }
export function reducerNPeople (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'N_PEOPLE'){ return [ ...state, action.npeople ] } return state   }
export function reducerTipByPerson (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TIP_BY_PERSON'){ return [ ...state, action.tipbyperson ] } return state   }
export function reducerTotalByPerson (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TOTAL_BY_PERSON'){ return [ ...state, action.totalbyperson ] } return state   }

export const atualizaBill = (totalbill: Action) => {  return { type: 'TOTAL_BILL', totalbill  }  }
export const atualizaTip = (tip: Action) => {  return { type: 'TIP', tip  }  }
export const atualizaNPeople = (npeople: Action) => {  return { type: 'N_PEOPLE', npeople  }  }
export const atualizaTipByPerson = (tipbyperson: Action) => {  return { type: 'TIP_BY_PERSON', tipbyperson  }  }
export const atualizaTotalByPerson = (totalbyperson: Action) => {  return { type: 'TOTAL_BY_PERSON', totalbyperson  }  }

const rootReducer = combineReducers({
    totalbill: reducerTotalBill,
    tip: reducerTip,
    npeople: reducerNPeople,
    tipbyperson: reducerTipByPerson,
    totalbyperson: reducerTotalByPerson,
})
export default createStore( rootReducer)