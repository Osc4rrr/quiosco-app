import useQuiosco from '@/hooks/useQuiosco';
import React from 'react';

const EnlacesAdmin = ({ enlace }) => {
  const { handleClickEnlaceAdmin, enlaceActualAdmin } = useQuiosco();
  const { id, nombre } = enlace;
  return (
    <div
      className={`${
        enlaceActualAdmin?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 hover hover:bg-amber-400`}
    >
      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => {
          handleClickEnlaceAdmin(id);
        }}
      >
        {nombre}
      </button>
    </div>
  );
};

export default EnlacesAdmin;
