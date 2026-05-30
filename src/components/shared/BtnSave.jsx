export const BtnSave = ({color, darkColor, tFunction, text}) => {
  return (
    <button type="submit" className={`w-full p-3 md:p-2 text-lg md:text-base cursor-pointer rounded-md text-white font-semibold ${color} ${darkColor}`} onClick={(e) => tFunction(e)}>
        {text}
    </button>
  )
}