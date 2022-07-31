import { MainLayout } from '@/components/Layout'
import { FileBrowser } from '@/features/browser'
import { Outlet, useRoutes } from 'react-router-dom'

const App = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
)

export const AppRoutes = () => {
    const routes = [{ path: '/', element: <App />, children: [{ path: '/', element: <FileBrowser /> }] }]

    const element = useRoutes([...routes])

    return <>{element}</>
}
