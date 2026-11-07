import { useState } from 'react';
import './styles/App.css';
import Header from './component/Header.tsx';
import Sidebar from './component/Sidebar.tsx';
import Personal from './views/Personal.tsx';
import Inventario from './views/Inventario.tsx';
import Incidencias from './views/Incidencias.tsx';

function App() {
  
  const [seccion, setSeccion] = useState('Personal');

  return (
    <div className="pagina-entera">
      <Header />
      <div className="main-area">
        <Sidebar cambiarSeccion={setSeccion} seccionActual={seccion}/>
        <main id="panel_central">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main>
      </div>
    </div>
  )
}

export default App