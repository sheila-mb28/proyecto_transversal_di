import '../styles/Sidebar.css';
import AppBtn from './AppBtn.tsx';

interface Props {
  cambiarSeccion: (seccion: string) => void;
}

function Sidebar({cambiarSeccion}: Props) {
  return(
    <div className="sidebar">
      <AppBtn title="Personal" alPulsar={() => cambiarSeccion('Personal')}/>
      <AppBtn title="Inventario" alPulsar={() => cambiarSeccion('Inventario')}/>
      <AppBtn title="Incidencias" alPulsar={() => cambiarSeccion('Incidencias')}/>
    </div>
  );
}

export default Sidebar;