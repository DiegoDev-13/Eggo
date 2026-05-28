import imgLogin from '../assets/img-login.png'

export const Register = () => {
  return (
    <>
      <div className="w-full h-dvh flex">
        <div className="w-[70%] relative">
          <div className='absolute top-0 left-0 bg-radial from-[#37963b]/50 dark:from-[#22365c]/50 to-[#0b270e] dark:to-[#04080f] w-full h-full p-10 flex'>
            <h1 className='text-white text-4xl font-semibold'>Eggo App</h1>
          </div>
          <img src={imgLogin} alt="" className='w-full h-dvh filter bg-[#2E7D32]' />
        </div>

        <div className="w-full bg-theme-primary dark:bg-theme-primary-dark p-5 flex justify-center items-center">
          <div className='w-20 h-20 bg-theme-secondary dark:bg-theme-secondary-dark'>
            ads
          </div>
        </div>
      </div>
    </>
  )
}