import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './routes/mainRoute'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  )
}

export default App