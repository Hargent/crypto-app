export const initialState={
    shelf:[],
    user:null,
    format:''
};
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_TO_SHELF' :
            return{
                ...state,
                shelf:[...state.shelf,action.item]
            };
        case 'REMOVE_FROM_SHELF' :
            const index = state.shelf.findIndex(
                (shelfItem) => shelfItem.id === action.id);
            let newShelf = [...state.s];
            if (index >= 0){
                newShelf.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product (id ${action.id}) as its not in SHELF!`)
            }
            return {
                ...state,
                shelf: newShelf
            }
            case 'FORMAT_TYPE' :
            return{
                ...state,
                format:action.item
            };
        default:
            return state
}}

export default reducer;