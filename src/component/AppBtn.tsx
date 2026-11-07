import '../styles/AppBtn.css';

interface Props {
  title: string;
  alPulsar: () => void;
  activo?: boolean;
}

function NavBtn({title, alPulsar, activo}: Props){
  return(
    <button className={activo ? 'app-btn activo' : 'app-btn'} onClick={alPulsar}>{title}</button>
  )
}

export default NavBtn;