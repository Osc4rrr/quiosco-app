import useSWR from 'swr';
import AdminLayout from '@/layout/AdminLayout';
import axios from 'axios';
import Orden from '@/components/Orden';
import OrdenCompletada from '@/components/OrdenCompletada';
import { formatearDinero } from '@/helpers';
import { useEffect } from 'react';

export default function Completadas() {
  const fetcher = () => axios('/api/completadas').then((datos) => datos.data);
  const { data } = useSWR('/api/completadas', fetcher, {
    refreshInterval: 100,
  });

  const sumWithInitial = data?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );

  return (
    <AdminLayout pagina={'Admin - Ordenes Completadas'}>
      <h1 className='text-4xl font-black'>Panel de administración</h1>
      <p className='text-2xl my-10'>Ordenes ya completadas</p>

      <h1 className='text-4xl font-black font-bold flex justify-between my-10'>
        Total Recaudado{' '}
        <span className='text-4xl text-amber-500'>
          {formatearDinero(sumWithInitial)}
        </span>
      </h1>

      {data && data.length ? (
        data.map((orden) => <OrdenCompletada key={orden.id} orden={orden} />)
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </AdminLayout>
  );
}
