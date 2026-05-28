export const BtnSave = ({color, darkColor, tFunction, text}) => {
  return (
    <button type="submit" className={`w-full p-2 cursor-pointer rounded-md text-white font-semibold ${color} ${darkColor}`}>
        {text}
    </button>
  )
}