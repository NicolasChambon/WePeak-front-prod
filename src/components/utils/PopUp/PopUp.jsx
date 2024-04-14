import { useSelector } from 'react-redux';

import './PopUp.scss';

const PopUp = () => {
  const message = useSelector((state) => state.global.popUpMessage);
  return <div className="PopUp">{message}</div>;
};

export default PopUp;
