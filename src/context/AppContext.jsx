import {createContext, useContext, useReducer} from 'react'
import { defaultState } from "../data";
const AppContext=createContext();
const AppDispatchContext=createContext();

const initSate={
    items:defaultState
}

function reducer(state,action){
    switch (action.type){
        case 'addItem':
            return {...state,items: [...state.items,action.payload]}
        case 'removeItem':
            return {...state,items:[...state.items.filter(item=>item.id!==action.payload)]}
        case 'toggleItem':
            return {...state,items: [...state.items.map(x=>x.id!==action.payload.id?x:{...x,packed:!x.packed})]}
        case 'allDoneItem':
            return {...state,items: [...state.items.map(x=>({...x,packed:true}))]}
        default:throw Error('this is impossible')
    }
}
export const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initSate);
    return <AppContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>{children} </AppDispatchContext.Provider>
    </AppContext.Provider>
}
export const useAppContext=()=>{
    const context=useContext(AppContext);
    if(!context) throw Error('context not found');
    return context;
}
export const useAppDispatch=()=>{
    const context=useContext(AppDispatchContext);
    if(!context) throw Error('dispatch not found');
    return context;
}
export const useAddItem=()=>{
    const dispatch=useAppDispatch();
    function addItem(val){
        if(val.length<1) return;
        dispatch({type:'addItem',payload:val})
    }
    return {addItem}
}

export const useRemoveItem=()=>{
    const dispatch=useAppDispatch();
    function removeItem(id){
        dispatch({type:'removeItem',payload:id})
    }
    return {removeItem}
}
export const useToggleItem=()=>{
    const dispatch=useAppDispatch();
    function toggleItem(item){
       dispatch({type:'toggleItem',payload:item})
    }
    return {toggleItem}
}
export const useAllDoneItem=()=>{
    const dispatch=useAppDispatch();
    function allDone(){
       dispatch({type:'allDoneItem'})
    }
    return {allDone}
}

export const useFilterItem=()=>{
    const state=useAppContext();
    const {items}=state;
    let newItems=[...items];
    function filterItems(title){
        if(title==='Unpacked Items'){
            newItems=newItems.filter(item=>!item.packed)
        }
        else  newItems=newItems.filter(item=>item.packed)
        return newItems
    }
    return {filterItems}
}


export default AppContext;