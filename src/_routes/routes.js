import Home from '_pages/home/Home/Home'
import { SignIn, SignUp } from '_pages/auth'
import UserProfile from '_pages/userProfile/UserProfile'
import PostPage from '_pages/home/PostPage/PostPage'
import Search from '_pages/home/Search/Search'
import { NoDashboardLayout, WithDashboardLayout } from 'AppMy'
import Popular from '_pages/home/Popular/Popular'
import Tags from '_pages/home/Tags'
import Communities from '_pages/home/Communities'

import { PATHS } from './paths'
import SeeLater from '_pages/home/SeeLater'
import Sample from '_pages/home/Sample/Sample'
import Publish from '_pages/publish/Publish'
import Posts from '_pages/posts/Posts'

  
export const ROUTES = [
    {
      path: "/",
      element: <NoDashboardLayout />,
      children: [
        {
          path: "/",
          element: <SignUp />,
        },
        {
          path: PATHS.signup,
          element: <SignUp />,
        },
        {
          path: PATHS.signin,
          element: <SignIn />,
        },
      ],
      errorElement: <div>Error</div>
    },
    {
      path: "/user",
      element: <WithDashboardLayout />,
      children: [
        {
          path: PATHS.home,
          element: <div>Home page</div>,
        },
        {
          path: PATHS.notes,
          element: <Home />,
        },
        {
          path: PATHS.posts,
          element: <Posts />,
        },
        {
          path: PATHS.tasks,
          element: <div>Tasks page</div>,
        },
        {
          path: PATHS.publish,
          element: <Publish />,
        },
        {
          path: PATHS.sample,
          element: <Sample />,
        },
        {
          path: PATHS.popular,
          element: <Popular />,
        },
        {
            path: PATHS.tags,
            element: <Tags />,
        },
        {
          path: PATHS.profile,
          element: <UserProfile />,
        },
        {
          path: "/user/posts/:id",
          element: <PostPage />,
        },
        {
          path: PATHS.communities,
          element: <Communities />,
        },
        {
          path: PATHS.seeLater,
          element: <SeeLater />,
        },
        {
          path: "/user/search",
          element: <Search />,
        },
        {
          path: "/user/settings",
          element: <div>settings</div>,
        },
      ],
      errorElement: <div>Error</div>
    },
  
];