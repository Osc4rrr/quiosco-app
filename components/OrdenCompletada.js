import { formatearDinero } from '@/helpers';
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';

const OrdenCompletada = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;
  return (
    <div className='border p-10 space-y-5'>
      <h3 className='text-2xl font-bold'>Orden: {id}</h3>
      <p className='text-lg my-10 font-bold'>Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => (
          <div
            className='py-3 flex border-b last-of-type:border-0 items-center'
            key={platillo.id}
          >
            <div className='w-32'>
              <Image
                width={400}
                height={400}
                src={`/assets/img/${platillo.imagen}.jpg`}
                alt={`Platillo ${platillo.nombre}`}
              />
            </div>

            <div className='p-5 space-y-2'>
              <h4 className='text-xl font-bold text-amber-500'>
                {platillo.nombre}
              </h4>

              <p className='text-lg font-bold'>Cantidad: {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='md:flex md:items-center md:justify-center my-10'>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          Total pagado: {formatearDinero(total)}
        </p>
      </div>
    </div>
  );
};

export default OrdenCompletada;
