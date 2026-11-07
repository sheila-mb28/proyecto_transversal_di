import { useState } from 'react';
import AppBtn from '../component/AppBtn.tsx';
import ProductCard from '../component/ProductCard.tsx';
import '../styles/Views.css';

interface Producto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}


function Inventario() {

  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(false);

  const cargarProductos = async () => {
    setCargando(true);

    try {
      const res = await fetch('https://fakestoreapi.com/products?limit=6');

      if (!res.ok) {
        throw new Error('Error al consultar la API');
      }

      const datos = await res.json();
      const lista: Producto[] = datos.map((p: any) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        category: p.category,
      }));

      setProductos(lista);

    } catch (e) {
      console.log(`Error en el fetch: ${e}`);
      setProductos([]);
    }

    setCargando(false);
  };

  return (
    <div>
      <h1 className="titulo-vista">Inventario</h1>

      {productos.length === 0 && !cargando && (
        <AppBtn title="Cargar inventario" alPulsar={() => cargarProductos()} />
      )}

      {cargando && <p>Cargando datos del servidor…</p>}

      <div className="lista-tarjetas">
        {productos.map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            category={prod.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Inventario;