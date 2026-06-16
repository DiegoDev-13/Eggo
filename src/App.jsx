import { useEffect, useState } from 'react'
import { MyRouters } from './routers/router'
import {styled, ThemeProvider} from 'styled-components'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      <MyRouters />
    </>
  )
}

export default App
