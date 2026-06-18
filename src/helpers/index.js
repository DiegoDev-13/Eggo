export const dateNow = () => {

  const fecha = new Date();

  const formateador = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });

  return formateador.format(fecha).toLowerCase().replace('.', '')
}