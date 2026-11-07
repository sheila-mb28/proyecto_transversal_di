import { useState } from 'react';
import EmployeeCard from '../component/EmployeeCard.tsx';
import AppBtn from '../component/AppBtn.tsx';
import '../styles/Views.css';


interface Empleado {
  id: number;
  name: string;
  email: string;
  city: string;
}

function Personal() {

  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [cargando, setCargando] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const empleadosFiltrados = empleados.filter((emp) =>
    emp.name.toLowerCase().includes(busqueda.toLowerCase())
  );


  const cargarEmpleados = async () => {
        
    setCargando(true);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!res.ok) {
        throw new Error('Error al consultar la API');
      }

      const datos = await res.json();
      const lista: Empleado[] = datos.map((u: any) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        city: u.address.city,
      }));

      setEmpleados(lista);

    } catch (e) {
      console.log(`Error en el fetch: ${e}`);
      setEmpleados([]);
    }

    setCargando(false);
  };


  return (
    <div>
      <h2>Personal</h2>
      {empleados.length === 0 && !cargando && (
        <AppBtn title="Cargar personal" alPulsar={() => cargarEmpleados()}/>
      )}
            

      {cargando && <p>Cargando datos del servidor…</p>}

      {empleados.length !== 0 &&(<input
        className="buscador"
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />)}

      <div className="lista-tarjetas">
        {empleadosFiltrados.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            email={emp.email}
            city={emp.city}
          />
        ))}
      </div>
    </div>
  );
}

export default Personal;