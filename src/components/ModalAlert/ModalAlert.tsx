import LayoutContext from '@/context/Layout/LayoutContext';
import './ModalAlert.scss';
import { useContext } from 'react';
import { setErrorMessage } from '@/context/Layout/LayoutAction';

const ModalAlert  = () => {
  const {state, dispatch} = useContext(LayoutContext);

  const fnCloseModal = () => {
    dispatch(setErrorMessage(state, null));
  };

  if (!state.errorMessage) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Erro</h2>
        <p className="modal-message">{state.errorMessage}</p>
        <button className="modal-button" onClick={fnCloseModal}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ModalAlert;