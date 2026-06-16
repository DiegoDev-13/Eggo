export const ProgressBar = ({ value, target }) => {
  // Calcula el porcentaje real (ej. 94 de 90 es más del 100%, limitamos visualmente al 100%)
  const percentage = Math.min((value / target) * 100, 100);

  return (
    <div className="w-full max-w-md font-sans mb-5">
      {/* Textos superiores */}
      <div className="flex justify-between items-center mb-1 text-sm">
        <span className="text-gray-700 font-medium">Efficiency Target</span>
        <span className="text-emerald-800 font-semibold">{value}% / {target}%</span>
      </div>
      
      {/* Contenedor de la barra */}
      <div className="w-full bg-blue-100 h-3 rounded-full overflow-hidden">
        {/* Relleno de la barra */}
        <div 
          className={`${value < 86 ? 'bg-amber-400' : 'bg-emerald-800'} h-full rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};