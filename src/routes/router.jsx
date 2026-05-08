import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { HomePage } from '../pages/HomePage'
import { AboutProjectPage } from '../pages/AboutProjectPage'
import { ResearchPage } from '../pages/ResearchPage'
import { DemonstrationPage } from '../pages/DemonstrationPage'
import { ResourcesPage } from '../pages/ResourcesPage'
import { ContactPage } from '../pages/ContactPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutProjectPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: 'demonstration', element: <DemonstrationPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])

