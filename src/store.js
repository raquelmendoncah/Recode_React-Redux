import { createStore, combineReducers } from 'redux';

const initialTitle = 'Titulo inicial';

const initialList = ['Banana', 'Pera', 'Melancia'];

function titleReducer(state = initialTitle, action) {
  switch (action.type) {
    case 'MUDAR_TITULO':
      return action.newTitle;
    default:
      return state;
  }
}

function listReducer(state = initialList, action) {
  switch (action.type) {
    case 'ADICIONAR_ITEM':
      return [...state, action.newItem];
    case 'EXCLUIR_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}

export default createStore(
  combineReducers({
    titleReducer,
    listReducer,
  })
);
