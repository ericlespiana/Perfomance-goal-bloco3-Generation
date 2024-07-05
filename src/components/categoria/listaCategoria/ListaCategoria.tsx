import {useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import CardCategoria from '../cardCategoria/CardCategoria';
import Categoria from '../../../models/Categoria';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  async function buscarCategorias() {
      await buscar('/categorias', setCategoria);
  }

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardCategoria key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;