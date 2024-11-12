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

import PostForm from '_modules/posts/_components/form/PostForm'
import PostList from '_modules/posts/_components/list/PostList'
import { PostsProvider } from '_contexts/PostsContext'
import { UsersProvider } from '_contexts/UsersContext'

import UsersList from '_pages/users/UsersList'
import UsersPostList from '_pages/users/UsersPostList'
import PostItem from '_pages/posts/PostItem'
import PostsHome from '_pages/posts/PostsHome'
import UserDetail from '_pages/users/UserDetail'

export const ROUTES = [
  {
    path: "/",
    element: <WithDashboardLayout authRequired={false} />,
    children: [
      {
        path: "/",
        element: <PostsHome />,
      }
    ],
    errorElement: <div>Error</div>
  },
  {
    path: "/",
    element: <NoDashboardLayout />,
    children: [
    
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
      // {
      //   path: PATHS.notes,
      //   element: <Home />,
      // },
      // {
      //   path: PATHS.posts,
      //   // element: <PostsProvider>,
      //   children: [
      //     {
      //       path: "", // Default to listing posts
      //       element: <PostsProvider><PostList something='sdkfhdsk' /></PostsProvider>,
      //     },
      //     {
      //       path: "create", // Create post
      //       element: <PostsProvider><PostForm /></PostsProvider>,
      //     },
      //     {
      //       path: "edit/:id", // Edit post
      //       element: <PostsProvider><PostForm /></PostsProvider>,
      //     },
      //   ],
      // },
      // {
      //   path: PATHS.tasks,
      //   element: <div>Tasks page</div>,
      // },
      {
        path: PATHS.publish,
        element: <Publish />,
      },
      // {
      //   path: PATHS.sample,
      //   element: <Sample />,
      // },
      // {
      //   path: PATHS.popular,
      //   element: <Popular />,
      // },
      // {
      //   path: PATHS.tags,
      //   element: <Tags />,
      // },
      // {
      //   path: PATHS.profile,
      //   element: <UserProfile />,
      // },
      // {
      //   path: "/user/posts/:id",
      //   element: <PostPage />,
      // },
      // {
      //   path: PATHS.communities,
      //   element: <Communities />,
      // },
      // {
      //   path: PATHS.seeLater,
      //   element: <SeeLater />,
      // },
      // {
      //   path: "/user/search",
      //   element: <Search />,
      // },
      {
        path: "/user/settings",
        element: <div>settings</div>,
      },
    ],
    errorElement: <div>Error</div>
  },
  {
    path: "/my",
    element: <WithDashboardLayout />,
    children: [
      {
        path: PATHS.posts,
        children: [
          {
            path: "", // Default to listing posts
            element: <PostsProvider><PostList something='sdkfhdsk' /></PostsProvider>,
          },
          {
            path: "create", // Create post
            element: <PostsProvider><PostForm /></PostsProvider>,
          },
          {
            path: "edit/:id", // Edit post
            element: <PostsProvider><PostForm /></PostsProvider>,
          },
        ]
      }
    ]
  },
  {
    path: '/posts',
    element: <WithDashboardLayout authRequired={false} />,
    children: [
      {
        path: "",
        element: <PostsHome />
      },
      {
        path: ":id/posts",
        element: <PostsProvider><UsersPostList /></PostsProvider>
      },
      {
        path: ":userName/posts/:postSlug",
        element: <PostsProvider><PostItem /></PostsProvider>
      }
    ]
  },
  {
    path: PATHS.users,
    element: <WithDashboardLayout authRequired={false} />,
    children: [
      {
        path: "",
        element: <UsersProvider><UsersList /></UsersProvider>
      },
      {
        path: ":id",
        element: <UsersProvider><UserDetail /></UsersProvider>
      },
      {
        path: ":id/posts",
        element: <UsersProvider><UsersPostList /></UsersProvider>
      },
      {
        path: ":userName/posts/:postSlug",
        element: <UsersProvider><PostItem /></UsersProvider>
      }
    ]
  },
];