import '../styles/AppBtn.css';

interface Props {
  title: string;
  alPulsar: () => void;
}

function NavBtn({title, alPulsar}: Props){
  return(
    <button className="app-btn" onClick={alPulsar}>{title}</button>
  )
}

export default NavBtn;