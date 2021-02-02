import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const [currentTitle, setCurrentTitle] = useState('');
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listReducer);
  const title = useSelector((state) => state.titleReducer);

  const mudarTitulo = () => {
    if (currentTitle !== '') {
      dispatch({ type: 'MUDAR_TITULO', newTitle: currentTitle });
      setCurrentTitle('');
    }
  };

  const adicionarItem = () => {
    if (newItem !== '') {
      dispatch({ type: 'ADICIONAR_ITEM', newItem: newItem });
      setNewItem('');
    }
  };

  const firstLetterToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <div style={style1}>
        <h1>{title}</h1>

        <input
          type="text"
          onChange={(e) =>
            setCurrentTitle(firstLetterToUpperCase(e.target.value))
          }
          onKeyUp={(e) =>
            currentTitle !== '' && e.key === 'Enter' && mudarTitulo()
          }
          value={currentTitle}
        />

        <button onClick={mudarTitulo}>Mudar titulo</button>
      </div>

      <div style={style1}>
        <input
          type="text"
          onChange={(e) => setNewItem(firstLetterToUpperCase(e.target.value))}
          onKeyUp={(e) =>
            newItem !== '' && e.key === 'Enter' && adicionarItem()
          }
          value={newItem}
        />

        <button onClick={adicionarItem}>Adicionar</button>

        {list.map((item, index) => (
          <p key={index}>
            <button
              onClick={() => dispatch({ type: 'EXCLUIR_ITEM', index: index })}
            >
              Excluir
            </button>
            {'  '}
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

const style1 = {
  padding: '20px',
  margin: '20px',
  borderRadius: '20px',
  border: '0',
  background: 'rgba(0,0,0,0.4)',
};
