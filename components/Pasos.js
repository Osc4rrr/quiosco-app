import { useRouter } from 'next/router';

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y total', url: '/total' },
];

const Pasos = () => {
  const router = useRouter();

  const calcularProgeso = () => {
    let valor;
    if (router.pathname === '/') {
      valor = 25;
    } else if (router.pathname === '/resumen') {
      valor = 50;
    } else {
      valor = 100;
    }
    return valor;
  };
  return (
    <>
      <div className='flex justify-between mb-5 gap-4'>
        {pasos.map((paso) => (
          <button
            className='text-2xl font-bold'
            key={paso.paso}
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className='bg-gray-100 mb-100 mb-5'>
        <div
          className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white'
          style={{ width: `${calcularProgeso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
