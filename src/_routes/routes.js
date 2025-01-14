import React, { Suspense, lazy } from 'react';

import Home from '_pages/home/Home/Home'
import { SignIn, SignUp } from '_pages/auth'
import PostPage from '_pages/home/PostPage/PostPage'
import Search from '_pages/home/Search/Search'
import { NoDashboardLayout, WithDashboardLayout } from 'AppMy'
import Tags from '_pages/home/Tags'
import Communities from '_pages/home/Communities'

import { PATHS } from './paths'
import SeeLater from '_pages/home/SeeLater'
import Sample from '_pages/home/Sample/Sample'
import PublishPage from '_pages/publish/PublishPage'

import { PostsProvider } from '_contexts/PostsContext'
import { UsersProvider } from '_contexts/UsersContext'

// import UsersList from '_pages/users/UsersList'
// import UsersPostList from '_pages/users/UsersPostList'
// import PostItem from '_pages/posts/PostItem'
// import PostsHome from '_pages/posts/PostsHome'
// import UserDetail from '_pages/users/UserDetail'
// import MyPostForm from '_pages/myPosts/form/MyPostForm'
// import MyPostList from '_pages/myPosts/list/MyPostList'
// import MyProfile from '_pages/myProfile/MyProfile'
// import PostsCategoriesPage from '_pages/postsCategories/PostsCategoriesPage'
// import PostsCategoriesListPage from '_pages/postsCategories/PostsCategoriesListPage'
// import FeedbacksPage from '_pages/feedbacks/FeedbacksPage'

const lazyLoadWithDelay = (importFunction) => {
  return React.lazy(() => delayForTesting(importFunction()))
}

const UsersList = lazyLoadWithDelay(() => import('_pages/users/UsersList'));
const UsersPostList = lazyLoadWithDelay(() => import('_pages/users/UsersPostList'));
const PostItem = lazyLoadWithDelay(() => import('_pages/posts/PostItem'));
const PostsHome = lazyLoadWithDelay(() => import('_pages/posts/PostsHome'));
const PostFeedPage = lazyLoadWithDelay(() => import('_pages/posts/PostFeedPage'));
const MySubscriptionsPage = lazyLoadWithDelay(() => import('_pages/subscriptions/MySubscriptionsPage'));
const MySubscribersPage = lazyLoadWithDelay(() => import('_pages/subscribers/MySubscribersPage'));
const UserDetailPage = lazyLoadWithDelay(() => import('_pages/users/UserDetailPage'));
const MyPostForm = lazyLoadWithDelay(() => import('_pages/myPosts/form/MyPostForm'));
const MyPostList = lazyLoadWithDelay(() => import('_pages/myPosts/list/MyPostList'));
const MyCategoriesList = lazyLoadWithDelay(() => import('_pages/myCategories/list/MyCategoriesList'));
const MyProfile = lazyLoadWithDelay(() => import('_pages/myProfile/MyProfile'));
const PostsCategoriesPage = lazyLoadWithDelay(() => import('_pages/postsCategories/PostsCategoriesPage'));
const PostsCategoriesListPage = lazyLoadWithDelay(() => import('_pages/postsCategories/PostsCategoriesListPage'));
const FeedbacksPage = lazyLoadWithDelay(() => import('_pages/feedbacks/FeedbacksPage'));
const MyCategoriesForm = lazyLoadWithDelay(() => import('_pages/myCategories/form/MyCategoriesForm'));

function delayForTesting(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 200);
  }).then(() => promise);
}

export const ROUTES = [
  {
    path: "/",
    element: <WithDashboardLayout authRequired={false} />,
    children: [
      {
        path: "/",
        element: (
          <PostsHome />
        ),
      },
      {
        path: "/feed",
        element: (
          <PostFeedPage />
        ),
      },
      {
        path: "/feedbacks",
        element: (
          // <Suspense fallback={<div>Loading...</div>}>
            <FeedbacksPage />
          // </Suspense>
        ),
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
      {
        path: PATHS.publish,
        element: <PublishPage />,
      },
      {
        path: "/user/settings",
        element: <div>settings</div>,
      },
    ],
    errorElement: <div>Error</div>
  },
  {
    path: PATHS.profile,
    element: <WithDashboardLayout />,
    children: [
      {
        path: "",
        element: <MyProfile />
      }
    ]
  },
  {
    path: "/my/subscriptions",
    element: <WithDashboardLayout />,
    children: [
      {
        path: "",
        element: <MySubscriptionsPage />
      }
    ]
  },
  {
    path: "/my/subscribers",
    element: <WithDashboardLayout />,
    children: [
      {
        path: "",
        element: <MySubscribersPage />
      }
    ]
  },
  {
    path: "/my/posts",
    element: <WithDashboardLayout />,
    children: [
      {
        path: PATHS.posts,
        children: [
          {
            path: "", 
            element: <MyPostList  />,
          },
          {
            path: "create", 
            element: <MyPostForm />,
          },
          {
            path: "edit/:id",
            element: <MyPostForm />,
          },
        ]
      }
    ]
  },
  {
    path: "/my/categories",
    element: <WithDashboardLayout />,
    children: [
      {
        path: PATHS.myCategories,
        children: [
          {
            path: "", 
            element: <MyCategoriesList  />,
          },
          // {
          //   path: "create", 
          //   element: <MyPostForm />,
          // },
          {
            path: "edit/:id",
            element: <MyCategoriesForm />,
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
        path: "category",
        element: <PostsCategoriesListPage />
      },
      {
        path: "category/:categoryName",
        element: <PostsCategoriesPage />
      },
      {
        path: ":id/posts",
        element: <UsersPostList />
      },
    ]
  },
  {
    path: PATHS.users,
    element: <WithDashboardLayout authRequired={false} />,
    children: [
      {
        path: "",
        element: <UsersList />
      },
      {
        path: ":id",
        element: <UserDetailPage />
      },
      {
        path: ":id/posts",
        element: <UsersPostList />
      },
      {
        path: ":userName/posts/:postSlug",
        element: <PostItem />
      }
    ]
  },
];