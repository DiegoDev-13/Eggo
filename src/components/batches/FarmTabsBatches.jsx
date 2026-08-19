import * as Tabs from '@radix-ui/react-tabs';
import { TableData } from '../shared/TableData';
import { TableProduction } from './TableProduction';
import { TableHealth } from './TableHealth';
import { ProgressBar } from '../shared/ProgressBar';
import { BsForkKnife } from "react-icons/bs";
import { IoFlaskOutline, IoTrendingUp } from "react-icons/io5";
import {Separator} from '../shared/Separator'
import { Dona } from '../shared/chart/Dona';
import { Barras } from '../shared/chart/Barras';
import { useEffect, useState } from 'react';
import { SpinnerLoading } from '../shared/SpinnerLoading';

const tableHeader = ['fecha y hora', 'acción', 'usuario', 'descripción']
const tableProduction = ['fecha', '	huevos recolectados', 'huevos rotos', 'huevos sucios', 'tasa de producción (%)']
const tableHealth = ['vacuna', 'fecha', 'estado',]
// const tableFinance = ['Total Revenueg (Egg Sales)', '$4,560.00',]


export const FarmTabsBatches = ({batcheIdDetails, batcheData, isLoading}) => {

  const [isDark, setIsDark] = useState(false);
      
  useEffect(() => {
    // Función para revisar si la etiqueta <html> tiene la clase 'dark'
    const checkDarkMode = () => {
      const isDarkModeActive = document.documentElement.classList.contains('dark');
      setIsDark(isDarkModeActive);
    };

    // Revisamos el estado al montar el componente
    checkDarkMode();

    // Creamos un observador para detectar cambios en las clases del <html> en tiempo real
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect(); // Limpiamos el observador
  }, []);

  const dataProduction = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], 
    datasets: [
      {
        label: 'Huevos diarios',
        data: [1102, 1089, 1040, 1101, 1098, 1112, 1105],
        backgroundColor: isDark ? 'rgba(17, 189, 60, 0.788)' : 'rgba(10, 110, 35, 0.788)',
        color: isDark ? '#ffffff' : '#000000', 
      },
    ],
  };

  const dataFeeding = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], 
    datasets: [
      {
        label: 'Consumo (kg)',
        data: [26, 22, 23, 28, 25, 22, 29],
        backgroundColor: isDark ? 'rgba(231, 132, 18, 0.788)' : 'rgba(165, 95, 14, 0.788)',
      },
    ],
  };

  if (isLoading) return <SpinnerLoading />

  return (
    <Tabs.Root defaultValue="general" className="w-full">
      {/* Lista de Navegación */}
      <Tabs.List className="flex border-b border-gray-400 space-x-8 ">
        <Tabs.Trigger 
          value="general" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Información general
        </Tabs.Trigger>
        
        <Tabs.Trigger 
          value="production" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Producción
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="health" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Salud
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="feeding" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Alimentación
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="finance" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Finanzas
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="history" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Historia
        </Tabs.Trigger>
      </Tabs.List>

      {/* Paneles de Contenido */}
      <Tabs.Content value="general" className="pt-4 flex flex-col space-y-8 ">
        <div className='flex justify-between'>
            <div className='w-[55%] flex flex-col space-y-8'>

                <div className='w-full border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
                    <div className='p-3 px-6 bg-slate-200 dark:bg-theme-primary-dark rounded-t-lg'>
                        <h3 className='font-medium dark:text-white'>Información de Lote</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Nombre del lote</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.name_batche}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Código de lote</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.genetic_line}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Cantidad</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.current_quantity}</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Código de lote</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.id}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Granja / Ubicación</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.farm_location}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Proveedor</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.supplier}</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
                    <div className='p-3 px-6 bg-slate-200 dark:bg-theme-primary-dark rounded-t-lg'>
                        <h3 className='font-medium dark:text-white'>Cronograma y estado</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Fecha de llegada</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.birthDate}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Proyección de fin de ciclo</h4>
                                <span className='text-base font-medium dark:text-white'>Dec 2024</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Edad actua</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.current_age}</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Líder de lote</h4>
                                <span className='text-base font-medium dark:text-white'>{batcheData.batch_lead}</span>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='w-[40%] h-40 rounded-lg'>
              <img 
                src={batcheData?.image_batche ? batcheData.image_batche : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRz6bqdqzVD1CbOA8xkIMXzNQvVzllA4PYq19qlSGhr2Uogvc6EppPZcD9&s=10'} 
                alt="Imagen del lote" 
                className='h-112 w-full rounded-lg object-cover' 
              />
            </div>
        </div>
      </Tabs.Content>

        {/* Contenido de producción */}
      <Tabs.Content value="production" className="pt-4 flex flex-col justify-center space-y-8">

        <div className='flex justify-between'>

          <div className='w-[48%] p-4 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
            <h2 className='mb-3 dark:text-white'>Distribución de la calidad del huevo</h2>
            <div className='w-full flex justify-center'>
              <Dona isDark={isDark} />
            </div>
          </div>

          <div className='w-[48%] p-4 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
            <h2 className='mb-23 dark:text-white'>Tendencia de productividad</h2>
            <div className='w-full flex justify-center items-center'>
              <Barras data={dataProduction} text='Estabilidad de colocación' />
            </div>
            <div className='flex justify-between px-8'>
              <span className='text-xs font-medium dark:text-white'>HACE 7 DÍAS</span>
              <span className='text-xs font-medium dark:text-white'>HOY</span>
            </div> 
          </div>
        </div>

        <div className='w-full border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
            <div className='flex justify-between p-3 px-6 rounded-t-lg'>
                <h3 className='font-medium dark:text-white'>Registro de producción de 7 días</h3>
                <span className='text-green-700 dark:text-green-500 text-sm font-bold' >Tasa de producción promedio: 92,3%</span>
            </div>

            <TableProduction tableHeader={tableProduction} />
        </div>

        
      </Tabs.Content>

      {/* Contenido de health */}
      <Tabs.Content value="health" className="pt-4 flex flex-col space-y-7">
        <div className='flex flex-wrap justify-center items-center space-x-5'>
          <div className='bg-white dark:bg-theme-third-dark flex flex-col space-y-1 border border-gray-400 dark:border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium dark:text-gray-400'>aves sanas</span>
            <h3 className='text-2xl font-bold dark:text-white'>1,221</h3>
          </div>

          <div className='bg-white dark:bg-theme-third-dark flex flex-col space-y-1 border border-gray-400 dark:border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium dark:text-gray-400'>aves enfermas</span>
            <h3 className='text-2xl font-bold text-red-500'>2</h3>
          </div>

          <div className='bg-white dark:bg-theme-third-dark flex flex-col space-y-1 border border-gray-400 dark:border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium dark:text-gray-400'>vacunado</span>
            <h3 className='text-2xl font-bold text-green-700'>100%</h3>
          </div>
        </div>

        <div className='flex justify-around'>

          <div className='w-[45%] border border-gray-400 dark:border-gray-600 rounded-lg'>
            <div className='bg-slate-200 dark:bg-theme-primary-dark py-3 px-4 border-b border-b-gray-600 rounded-t-lg'>
              <h3 className='text-base font-semibold dark:text-white'>Calendario de vacunación</h3>
            </div>
            <TableHealth tableHeader={tableHealth} />
          </div>

          <div className='w-[45%] bg-white dark:dark:bg-theme-third-dark border border-gray-400 dark:border-gray-600 rounded-lg'>
            <div className='py-3 px-4 rounded-t-lg flex flex-col space-y-2'>
              <h3 className='text-base font-semibold dark:text-white'>Análisis de mortalidad (2,3%)</h3>
              <span className='text-slate-700 text-sm dark:text-gray-3   00'>Breakdown of cumulative mortality since arrival.</span>
            </div>

            <div className=' py-3 px-4 flex flex-col space-y-2'>
              <ProgressBar value={1.2} target={100} title='Adaptación inicial' />
              <ProgressBar value={48} target={100} title='Estrés por calor (Semana 12)' />
              <ProgressBar value={25} target={100} title='Natural / Otro' />
            </div>
          </div>

        </div>

        <div className='w-full bg-white dark:dark:bg-theme-third-dark border border-gray-400 dark:border-gray-600 rounded-lg p-5'>
          <div className=' rounded-t-lg flex flex-col space-y-2'>
            <h3 className='text-base font-semibold text-gray-700 dark:text-gray-200'>Veterinary Observations</h3>
          </div>

          <div className='mt-2 flex space-x-3 justify-center'>
            <div className='h-10 w-10 bg-green-400 rounded-full flex justify-center items-center'>
              <h2 className='font-semibold'>ER</h2>
            </div>

            <div className='w-170'>
              <h3 className='font-semibold dark:text-white'>Dr. Elena Rodriguez</h3>
              <p className='dark:text-gray-300'>
                "La salud general de la parvada es estable. El plumaje está en buen estado. Los niveles de calcio se han ajustado para el ciclo de puesta máxima. Se debe controlar la ventilación durante la próxima ola de calor."
              </p>
            </div>
          </div>
        </div>
      </Tabs.Content>

        {/* Contenido de feeding */}
      <Tabs.Content value="feeding" className="pt-4 flex flex-col space-y-7">
        <div className='flex space-x-4 justify-center'>

          <div className='bg-white dark:dark:bg-theme-third-dark py-7 px-18 border border-gray-400 dark:border-gray-600 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <BsForkKnife size={32} className='text-amber-700' /> 
            <span className='text-xs text-gray-600 dark:text-gray-400 uppercase font-bold text-center'>ingesta diaria de alimento</span>
            <h4 className='font-bold text-xl dark:text-white'>148g <span className='text-xs text-gray-600 dark:text-gray-400'>/ ave</span></h4>
          </div>

          <div className='bg-white dark:dark:bg-theme-third-dark py-7 px-18 border border-gray-400 dark:border-gray-600 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <IoFlaskOutline size={32} className='text-green-700 dark:text-green-500' /> 
            <span className='text-xs text-gray-600 dark:text-gray-400 uppercase font-bold text-center'>formulación actual</span>
            <h4 className='font-bold text-xl dark:text-white'>Capa Fase 2</h4>
            <span className='text-xs text-green-700 dark:text-green-500  uppercase font-bold text-center'>alto calcio máximo</span>
          </div>

          <div className='bg-white dark:dark:bg-theme-third-dark py-7 px-18 border-2 border-green-700 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <IoTrendingUp size={32} className='text-green-700 dark:text-green-500'  /> 
            <span className='text-xs text-gray-600 dark:text-gray-400 uppercase font-bold text-center'>eficiencia fcr</span>
            <h4 className='font-bold text-xl dark:text-white'>2.05</h4>
            <span className='text-xs text-green-700  dark:text-green-500 uppercase font-bold text-center'>excelente eficiencia</span>
          </div>

        </div>

        <div className='w-full bg-white dark:dark:bg-theme-third-dark  border border-gray-400 dark:border-gray-600 rounded-lg p-10'>
          <Barras data={dataFeeding} text='Tendencia de consumo' /> 
        </div>
      </Tabs.Content>

        {/* Contenido de finance */}
      <Tabs.Content value="finance" className="pt-4 flex justify-between">

        <div className='w-[65%] border border-gray-400 dark:border-gray-600 rounded-lg'>
          <div className='w-full flex justify-between items-center border-b border-gray-400 dark:border-gray-600 bg-slate-200 dark:bg-theme-primary-dark  p-4 rounded-t-lg'>
            <h2 className='text-base font-semibold dark:text-white'>Resultados mensuales (proyección de octubre)</h2>
            <span className='text-green-700 dark:text-green-500  bg-green-500/15 px-2 rounded-sm text-sm font-semibold'>Margen de beneficio del 25%</span>
          </div>


          <div className='bg-white dark:dark:bg-theme-third-dark py-6 px-7 rounded-b-lg'>
            <div className='flex justify-between items-center bg-slate-200 dark:bg-theme-primary-dark p-2 px-4 rounded-lg mb-2'>
              <h2 className='text-base font-semibold dark:text-white'>Ingresos totales (venta de huevos)</h2>
              <span className='text-green-700 dark:text-green-500 text-base font-bold'>$4,560.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>Gastos de alimentación</h2>
              <span className='text-sm font-semibold dark:text-white'>-$1,840.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>Mano de obra y personal</h2>
              <span className='text-sm font-semibold dark:text-white'>-$950.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>Servicios públicos y control climático</h2>
              <span className='text-sm font-semibold dark:text-white'>-$420.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>Medicamentos y vacunas</h2>
              <span className='text-sm font-semibold dark:text-white'>-$120.00</span>
            </div>

            <Separator />

            <div className='flex justify-between items-center p-2 px-4 '>
              <h2 className='text-base font-semibold dark:text-white'>Beneficio mensual neto</h2>
              <span className='text-green-700 dark:text-green-500 text-lg font-bold'>$1,140.00</span>
            </div>
          </div>
        </div>

        <div className='w-[30%] h-max rounded-lg border border-amber-700/30 p-4 bg-amber-700/10 dark:bg-amber-600/10'>
          <h2 className='uppercase text-amber-900 dark:text-amber-600 text-[15px] font-bold mb-3'>Salud financiera</h2>
          <p className='text-sm text-gray-800 dark:text-gray-400'>El lote A-102 actualmente es autosuficiente y rentable. Las tasas máximas de producción de huevos están compensando el aumento del costo de los alimentos observado en el último trimestre.</p>

          <button className='uppercase text-white bg-amber-900 dark:bg-amber-600 rounded-lg p-2 w-full my-4 font-semibold cursor-pointer hover:bg-amber-800 transition-all duration-300'>
            Descargar el estado del mes 
          </button>
        </div>

      </Tabs.Content>

        {/* Contenido de history */}
      <Tabs.Content value="history" className="pt-4 flex flex-col justify-center">
        <div className='flex'>
            <div className='w-full border border-gray-400 rounded-lg bg-white dark:bg-theme-third-dark'>
                <div className='flex justify-between p-3 px-6 rounded-t-lg'>
                    <h3 className='font-medium dark:text-white'>Registro de actividad reciente</h3>
                    <button className='text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white font-medium transition-all duration-300 cursor-pointer'>Ver todo el historial</button>
                </div>

                <TableData tableHeader={tableHeader} />
            </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}