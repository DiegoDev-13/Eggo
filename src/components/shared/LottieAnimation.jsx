import LottieComponent from "lottie-react"; 

export function LottieAnimation({width, height, animation}) {
  // 1. Vite a veces importa la librería como { default: Componente }
  // Esta línea asegura que tengamos el componente real
  const Lottie = LottieComponent.default || LottieComponent;

  // 3. Verificación de seguridad
  if (typeof Lottie !== "function") {
    console.error("Lottie no es una función, es:", typeof Lottie, Lottie);
    return <div>Error cargando animación</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={animation} loop={true} style={{ width: width, height: height }}  />
    </div>
  );
}