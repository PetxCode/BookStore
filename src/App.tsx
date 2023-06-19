import { RouterProvider } from 'react-router-dom'
import { mainRoute } from './routes/mainRoutes'

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  )
}

export default App