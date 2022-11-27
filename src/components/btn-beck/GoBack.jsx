import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  const goBack = useNavigate();

  return (
    <>
      <button className="btn-goback" onClick={() => goBack(-1)}>
        НАЗАД
      </button>
    </>
  );
};

export default GoBack;
