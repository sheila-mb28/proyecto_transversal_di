import { useState } from 'react';
import AppBtn from '../component/AppBtn.tsx';
import IncidentCard from '../component/IncidentCard.tsx';
import '../styles/Views.css';

interface Incidencia {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencias() {

  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [cargando, setCargando] = useState(false);

  const cargarIncidencias = async () => {
    setCargando(true);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');

      if (!res.ok) {
        throw new Error('Error al consultar la API');
      }

      const datos = await res.json();
      const lista: Incidencia[] = datos.map((t: any) => ({
        id: t.id,
        title: t.title,
        completed: t.completed,
      }));

      setIncidencias(lista);

    } catch (e) {
      console.log(`Error en el fetch: ${e}`);
      setIncidencias([]);
    }

    setCargando(false);
  };

  return (
    <div>
      <h1 className="titulo-vista">Incidencias</h1>

      {incidencias.length === 0 && !cargando && (
        <AppBtn title="Cargar incidencias" alPulsar={() => cargarIncidencias()} />
      )}

      {cargando && <p>Cargando datos del servidor…</p>}

      <div className="lista-tarjetas">
        {incidencias.map((inc) => (
          <IncidentCard
            key={inc.id}
            title={inc.title}
            completed={inc.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default Incidencias;