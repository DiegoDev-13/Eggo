export const dateNow = () => {

  const fecha = new Date();

  const formateador = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });

  return formateador.format(fecha).toLowerCase().replace('.', '')
}

export const getCompletedWeeks = (fechaInicioStr, fechaFinStr) => {
    const inicio = new Date(fechaInicioStr.replace(/-/g, '\/'));
    const fin = new Date(fechaFinStr.replace(/-/g, '\/'));
    
    const dias = (fin - inicio) / (1000 * 60 * 60 * 24);
    
    // Math.floor corta los decimales. En tu ejemplo, 2.28 semanas se convierte en 2
    return Math.floor(dias / 7); 
};