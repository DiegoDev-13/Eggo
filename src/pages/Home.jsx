export const Home = () => {
  return (
    <>
        <div className='w-full text-center bg-blue-500 dark:bg-red-500'>
            <h1 className='text-3xl'>Hello Word</h1>
        </div>

        <div className='mt-10 w-full flex items-center justify-center'>
            <button className='p-3 bg-purple-600 text-white rounded-md cursor-pointer' onClick={() => setIsDark(!isDark)}>
                Chagen Theme
            </button>
        </div>
    </>
  )
}