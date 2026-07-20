import * as Tabs from '@radix-ui/react-tabs';
import { TableData } from '../shared/TableData';
import { TableProduction } from './TableProduction';
import { TableHealth } from './TableHealth';
import { ProgressBar } from '../shared/ProgressBar';
import { BsForkKnife } from "react-icons/bs";
import { IoFlaskOutline, IoTrendingUp } from "react-icons/io5";
import {Separator} from '../shared/Separator'

const tableHeader = ['date & time', 'action', 'user', 'description']
const tableProduction = ['date', 'total eggs collected', 'broken eggs', 'dirty eggs', 'production rate (%)']
const tableHealth = ['vaccine', 'date', 'status',]
const tableFinance = ['Total Revenueg (Egg Sales)', '$4,560.00',]

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

        {/* Contenido de producción */}
      <Tabs.Content value="production" className="pt-4">
        <div className='w-full border border-gray-400 rounded-lg bg-white dark:bg-theme-third-dark'>
            <div className='flex justify-between p-3 px-6 rounded-t-lg'>
                <h3 className='font-medium dark:text-white'>7-Day Production Log</h3>
                <span className='text-green-700 dark:text-green-500 text-sm font-bold' >Avg Production Rate: 92,3%</span>
            </div>

            <TableProduction tableHeader={tableProduction} />
        </div>


      </Tabs.Content>

      {/* Contenido de health */}
      <Tabs.Content value="health" className="pt-4 flex flex-col space-y-7">
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

        <div className='flex justify-around'>

          <div className='w-[45%] border border-gray-600 rounded-lg'>
            <div className='bg-slate-200 dark:bg-theme-primary-dark py-3 px-4 border-b border-b-gray-600 rounded-t-lg'>
              <h3 className='text-base font-semibold'>Vaccination Calender</h3>
            </div>
            <TableHealth tableHeader={tableHealth} />
          </div>

          <div className='w-[45%] border border-gray-600 rounded-lg'>
            <div className='py-3 px-4 rounded-t-lg flex flex-col space-y-2'>
              <h3 className='text-base font-semibold'>Mortality Analysis (2.3%)</h3>
              <span className='text-slate-700 text-sm'>Breakdown of cumulative mortality since arrival.</span>
            </div>

            <div className='py-3 px-4 flex flex-col space-y-2'>
              <ProgressBar value={1.2} target={100} title='Initial Adaptation' />
              <ProgressBar value={48} target={100} title='Heat Stress (Week 12)' />
              <ProgressBar value={25} target={100} title='Natural / Other' />
            </div>
          </div>

        </div>

        <div className='w-full border border-gray-600 rounded-lg p-5'>
          <div className=' rounded-t-lg flex flex-col space-y-2'>
            <h3 className='text-base font-semibold text-gray-700'>Veterinary Observations</h3>
          </div>

          <div className='mt-2 flex space-x-3 justify-center'>
            <div className='h-10 w-10 bg-green-400 rounded-full flex justify-center items-center'>
              <h2 className='font-semibold'>ER</h2>
            </div>

            <div className='w-170'>
              <h3 className='font-semibold'>Dr. Elena Rodriguez</h3>
              <p>
                "Overall flock health is stable. Feathers are in good condition. Calcium levels Adjusted for peak lay cycle. Monitor ventilation during upcoming heatwave."
              </p>
            </div>
          </div>
        </div>
      </Tabs.Content>

        {/* Contenido de feeding */}
      <Tabs.Content value="feeding" className="pt-4 flex flex-col space-y-7">
        <div className='flex space-x-4 justify-center'>

          <div className='py-7 px-18 border border-gray-600 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <BsForkKnife size={32} className='text-amber-700' /> 
            <span className='text-xs text-gray-600 uppercase font-bold text-center'>daily feed intake</span>
            <h4 className='font-bold text-xl'>148g <span className='text-xs text-gray-600'>/ bird</span></h4>
          </div>

          <div className='py-7 px-18 border border-gray-600 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <IoFlaskOutline size={32} className='text-green-700' /> 
            <span className='text-xs text-gray-600 uppercase font-bold text-center'>current formulation</span>
            <h4 className='font-bold text-xl'>Layer Phase 2</h4>
            <span className='text-xs text-green-700 uppercase font-bold text-center'>high calcium max</span>
          </div>

          <div className='py-7 px-18 border-2 border-green-700 rounded-lg flex flex-col justify-center items-center space-y-2'>
            <IoTrendingUp size={32} className='text-green-700' /> 
            <span className='text-xs text-gray-600 uppercase font-bold text-center'>fcr efficiency</span>
            <h4 className='font-bold text-xl'>2.05</h4>
            <span className='text-xs text-green-700 uppercase font-bold text-center'>excellent efficiency</span>
          </div>

        </div>
      </Tabs.Content>

        {/* Contenido de finance */}
      <Tabs.Content value="finance" className="pt-4 flex justify-between">

        <div className='w-[65%] border border-gray-700 rounded-lg'>
          <div className='flex justify-between items-center border-b border-gray-600 bg-slate-200 p-4 rounded-lg'>
            <h2 className='text-base font-semibold'>Monthly Performance (Oct Projection)</h2>
            <span className='text-green-700 dark:text-green-500  bg-green-500/15 px-2 rounded-sm text-sm font-semibold'>25% Profit Margin</span>
          </div>


          <div className='py-6 px-7'>
            <div className='flex justify-between items-center bg-slate-200 p-2 px-4 rounded-lg mb-2'>
              <h2 className='text-base font-semibold'>Total Revenue (Egg Sales)</h2>
              <span className='text-green-700 dark:text-green-500 text-base font-bold'>$4,560.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 font-semibold'>Feed Expenses</h2>
              <span className='text-sm font-semibold'>-$1,840.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 font-semibold'>Labor & Staff</h2>
              <span className='text-sm font-semibold'>-$950.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 font-semibold'>Utilities & Climate Control</h2>
              <span className='text-sm font-semibold'>-$420.00</span>
            </div>
            <div className='flex justify-between items-center p-2 px-4'>
              <h2 className='text-sm text-gray-500 font-semibold'>Medication & Vaccines</h2>
              <span className='text-sm font-semibold'>-$120.00</span>
            </div>

            <Separator />

            <div className='flex justify-between items-center p-2 px-4 '>
              <h2 className='text-base font-semibold'>Net Monthly Profit</h2>
              <span className='text-green-700 dark:text-green-500 text-lg font-bold'>$1,140.00</span>
            </div>
          </div>
        </div>

        <div className='w-[30%] h-max rounded-lg border border-amber-700/30 p-4 bg-amber-700/10'>
          <h2 className='uppercase text-amber-900 text-[15px] font-bold mb-3'>Financial Health</h2>
          <p className='text-sm text-gray-800'>Batch A-102 is currently self. sustaining and profitable. Peak production lay rates are offsetting the rising feed cost seen in the last quarter</p>

          <button className='uppercase text-white bg-amber-900 rounded-lg p-2 w-full my-4 font-semibold cursor-pointer hover:bg-amber-800 transition-all duration-300'>
            download full p&l
          </button>
        </div>

      </Tabs.Content>

      <Tabs.Content value="history" className="pt-4">
        {/* Contenido de producción */}
        <h2>Entrasndo a ek history</h2>
      </Tabs.Content>
    </Tabs.Root>
  );
}