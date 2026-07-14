import * as Tabs from '@radix-ui/react-tabs';
import { TableData } from '../shared/TableData';
import { TableProduction } from './TableProduction';

const tableHeader = ['date & time', 'action', 'user', 'description']
const tableProduction = ['date', 'total eggs collected', 'broken eggs', 'dirty eggs', 'production rate (%)']

export const FarmTabsBatches = () => {
  return (
    <Tabs.Root defaultValue="general" className="w-full">
      {/* Lista de Navegación */}
      <Tabs.List className="flex border-b border-gray-400 space-x-8 ">
        <Tabs.Trigger 
          value="general" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          General Info
        </Tabs.Trigger>
        
        <Tabs.Trigger 
          value="production" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Production
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="health" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Health
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="feeding" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Feeding
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="finance" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 dark:data-[state=active]:text-green-500 dark:data-[state=active]:border-green-500 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Finance
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="history" 
          className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          History
        </Tabs.Trigger>
      </Tabs.List>

      {/* Paneles de Contenido */}
      <Tabs.Content value="general" className="pt-4 flex flex-col space-y-8 ">
        <div className='flex justify-between'>
            <div className='w-[55%] flex flex-col space-y-8'>
                <div className='w-full border border-gray-500 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
                    <div className='p-3 px-6 bg-slate-200 dark:bg-theme-primary-dark rounded-t-lg'>
                        <h3 className='font-medium dark:text-white'>Batch Identity</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Batch Name</h4>
                                <span className='text-base font-medium dark:text-white'>White Leghorn A-102</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Breed</h4>
                                <span className='text-base font-medium dark:text-white'>White Leghorn</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Barn / Unit</h4>
                                <span className='text-base font-medium dark:text-white'>Unit 4</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Batch Code</h4>
                                <span className='text-base font-medium dark:text-white'>BATCH-2026-001</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Farm / Location</h4>
                                <span className='text-base font-medium dark:text-white'>Main Farm - Unit 4</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Supplier</h4>
                                <span className='text-base font-medium dark:text-white'>Heritage Hatchery</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-gray-500 dark:border-gray-600 rounded-lg bg-white dark:bg-theme-third-dark'>
                    <div className='p-3 px-6 bg-slate-200 dark:bg-theme-primary-dark rounded-t-lg'>
                        <h3 className='font-medium dark:text-white'>Timeline & Status</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Arrival Date</h4>
                                <span className='text-base font-medium dark:text-white'>Jan 15, 2026</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Cycle End Projection</h4>
                                <span className='text-base font-medium dark:text-white'>Dec 2024</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Current Age</h4>
                                <span className='text-base font-medium dark:text-white'>42 Weeks</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium dark:text-gray-400'>Batch Lead</h4>
                                <span className='text-base font-medium dark:text-white'>Samuel Jenkins</span>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='w-[40%] h-40 rounded-lg'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRz6bqdqzVD1CbOA8xkIMXzNQvVzllA4PYq19qlSGhr2Uogvc6EppPZcD9&s=10" alt="" className='h-112 w-full rounded-lg' />
            </div>
        </div>

        <div className='flex'>
            <div className='w-full border border-gray-400 rounded-lg bg-white dark:bg-theme-third-dark'>
                <div className='flex justify-between p-3 px-6 rounded-t-lg'>
                    <h3 className='font-medium dark:text-white'>Recent Activity Log</h3>
                    <button className='text-gray-700 dark:text-gray-400 hover:text-black hover:dark:text-white font-medium transition-all duration-300 cursor-pointer'>View All History</button>
                </div>

                <TableData tableHeader={tableHeader} />
            </div>


        </div>
      </Tabs.Content>

      <Tabs.Content value="production" className="pt-4">
        {/* Contenido de producción */}
        <div className='w-full border border-gray-400 rounded-lg bg-white dark:bg-theme-third-dark'>
            <div className='flex justify-between p-3 px-6 rounded-t-lg'>
                <h3 className='font-medium dark:text-white'>7-Day Production Log</h3>
                <span className='text-green-700 dark:text-green-500 text-sm font-bold' >Avg Production Rate: 92,3%</span>
            </div>

            <TableProduction tableHeader={tableProduction} />
        </div>


      </Tabs.Content>

      {/* Contenido de producción */}
      <Tabs.Content value="health" className="pt-4">
        <div className='flex flex-wrap justify-center items-center space-x-5'>
          <div className='flex flex-col space-y-1 border border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium'>healthy birds</span>
            <h3 className='text-2xl font-bold'>1,221</h3>
          </div>

          <div className='flex flex-col space-y-1 border border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium'>sick birds</span>
            <h3 className='text-2xl font-bold text-red-500'>2</h3>
          </div>

          <div className='flex flex-col space-y-1 border border-gray-600 w-[30%] px-4 py-3 rounded-lg'>
            <span className='uppercase text-xs font-medium'>vaccinated</span>
            <h3 className='text-2xl font-bold text-green-700'>100%</h3>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="feeding" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a el feeding</h2>
      </Tabs.Content>
      <Tabs.Content value="finance" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a finance</h2>
      </Tabs.Content>
      <Tabs.Content value="history" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a ek history</h2>
      </Tabs.Content>
    </Tabs.Root>
  );
}