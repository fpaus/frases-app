import { FC } from 'react';
import './FrasesList.css';

type ViewFraseProp = {
  texto: string;
};

const ViewFrase: FC<ViewFraseProp> = ({ texto }) => {
  return (
    <div className="frase-view">
      <span>{texto}</span>
    </div>
  );
};

export default ViewFrase;
