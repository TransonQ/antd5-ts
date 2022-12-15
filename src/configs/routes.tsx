import { ErrorPage } from '../error/ErrorPage'
import { Main } from '../layouts/Main'
import { HomePage } from '../pages/home/HomePage'
export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]
