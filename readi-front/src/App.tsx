import { QueryClientProvider } from 'react-query'

import { ToastProvider } from './hooks/useToast'
import { AppRoutes } from './routes'
import { queryClient } from './services/queryClient'
import GlobalStyle from './styles/global'

function App() {

  return (
    <QueryClientProvider client ={queryClient}>
      <ToastProvider>
        <GlobalStyle/>
        <AppRoutes/>
      </ToastProvider>
    </QueryClientProvider>

  )
}

export default App
