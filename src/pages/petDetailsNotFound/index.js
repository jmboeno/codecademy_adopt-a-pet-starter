import React from 'react';
import { useHistory } from 'react-router-dom';

const PetDetailsNotFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <p>
        Desculpe, mas os detalhes deste animal de estimação não foram enviados
        pelo abrigo ainda. Volte mais tarde!
      </p>
      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
