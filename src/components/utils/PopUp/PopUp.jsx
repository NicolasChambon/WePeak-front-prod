import { useSelector } from 'react-redux';

import './PopUp.scss';

const PopUp = () => {
  const message = useSelector((state) => state.global.popUpMessage.message);
  const status = useSelector((state) => state.global.popUpMessage.status);
  return <div className={`PopUp ${status}`}>{message}</div>;
};

export default PopUp;
