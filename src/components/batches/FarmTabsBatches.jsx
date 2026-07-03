import * as Tabs from '@radix-ui/react-tabs';

export const FarmTabsBatches = () => {
  return (
    <Tabs.Root defaultValue="general" className="w-full">
      {/* Lista de Navegación */}
      <Tabs.List className="flex border-b border-gray-400 space-x-8 ">
        <Tabs.Trigger 
          value="general" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          General Info
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="production" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Production
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="health" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Health
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="feeding" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Feeding
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="finance" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          Finance
        </Tabs.Trigger>
        <Tabs.Trigger 
          value="history" 
          className="pb-3 text-sm font-medium text-gray-500 data-[state=active]:text-green-700 data-[state=active]:border-b-2 data-[state=active]:border-green-700 cursor-pointer"
        >
          History
        </Tabs.Trigger>
      </Tabs.List>

      {/* Paneles de Contenido */}
      <Tabs.Content value="general" className="pt-4 flex flex-col space-y-8 ">
        <div className='flex justify-between'>
            <div className='w-[55%] flex flex-col space-y-8'>
                <div className='w-full border border-gray-400 rounded-lg bg-white'>
                    <div className='p-3 px-6 bg-slate-200 rounded-t-lg'>
                        <h3 className='font-medium'>Batch Identity</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Batch Name</h4>
                                <span className='text-base font-medium'>White Leghorn A-102</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Breed</h4>
                                <span className='text-base font-medium'>White Leghorn</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Barn / Unit</h4>
                                <span className='text-base font-medium'>Unit 4</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Batch Code</h4>
                                <span className='text-base font-medium'>BATCH-2026-001</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Farm / Location</h4>
                                <span className='text-base font-medium'>Main Farm - Unit 4</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Supplier</h4>
                                <span className='text-base font-medium'>Heritage Hatchery</span>
                             </div>
                        </div>
                    </div>
                </div>

                <div className='w-full border border-gray-400 rounded-lg bg-white'>
                    <div className='p-3 px-6 bg-slate-200 rounded-t-lg'>
                        <h3 className='font-medium'>Timeline & Status</h3>
                    </div>
                    <div className='flex p-4 px-6 space-x-16'>
                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Arrival Date</h4>
                                <span className='text-base font-medium'>Jan 15, 2026</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Cycle End Projection</h4>
                                <span className='text-base font-medium'>Dec 2024</span>
                             </div>
                        </div>

                        <div className='flex flex-col space-y-3'>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Current Age</h4>
                                <span className='text-base font-medium'>42 Weeks</span>
                             </div>
                             <div className='flex flex-col'>
                                <h4 className='text-sm text-black/80 font-medium'>Batch Lead</h4>
                                <span className='text-base font-medium'>Samuel Jenkins</span>
                             </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='w-[40%] h-40 border border-blue-600'>

            </div>
        </div>

        <div className='flex'>
            <div className='w-full border border-gray-400 rounded-lg bg-white'>
                <div className='p-3 px-6 bg-slate-200 rounded-t-lg'>
                    <h3 className='font-medium'>Recent Activity Log</h3>
                </div>
                <div className='flex p-4 px-6 space-x-16'>
                    <div className='flex flex-col space-y-3'>
                            <div className='flex flex-col'>
                            <h4 className='text-sm text-black/80 font-medium'>Arrival Date</h4>
                            <span className='text-base font-medium'>Jan 15, 2026</span>
                            </div>
                            <div className='flex flex-col'>
                            <h4 className='text-sm text-black/80 font-medium'>Cycle End Projection</h4>
                            <span className='text-base font-medium'>Dec 2024</span>
                            </div>
                    </div>

                    <div className='flex flex-col space-y-3'>
                            <div className='flex flex-col'>
                            <h4 className='text-sm text-black/80 font-medium'>Current Age</h4>
                            <span className='text-base font-medium'>42 Weeks</span>
                            </div>
                            <div className='flex flex-col'>
                            <h4 className='text-sm text-black/80 font-medium'>Batch Lead</h4>
                            <span className='text-base font-medium'>Samuel Jenkins</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="production" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a produccion</h2>
      </Tabs.Content>
      <Tabs.Content value="health" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a health</h2>
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