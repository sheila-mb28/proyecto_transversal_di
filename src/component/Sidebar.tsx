import '../styles/Sidebar.css';
import AppBtn from './AppBtn.tsx';

interface Props {
  cambiarSeccion: (seccion: string) => void;
  seccionActual: string;
}

function Sidebar({cambiarSeccion, seccionActual}: Props) {
  return(
    <div className="sidebar">
      <AppBtn title="Personal" activo={seccionActual === 'Personal'} alPulsar={() => cambiarSeccion('Personal')}/>
      <AppBtn title="Inventario" activo={seccionActual === 'Inventario'} alPulsar={() => cambiarSeccion('Inventario')}/>
      <AppBtn title="Incidencias" activo={seccionActual === 'Incidencias'} alPulsar={() => cambiarSeccion('Incidencias')}/>
    </div>
  );
}

export default Sidebar;