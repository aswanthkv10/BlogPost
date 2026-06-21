import { Routes } from '@angular/router';

import { PostList } from './components/post-list/post-list';
import { PostCreate } from './components/post-create/post-create';
import { PostDetail } from './components/post-detail/post-detail';
import { PostEdit } from './components/post-edit/post-edit';

export const routes: Routes = [

  {
    path:'',
    component: PostList
  },

  {
    path:'create',
    component: PostCreate
  },

  {
    path:'post/:id',
    component: PostDetail
  },

  {
    path:'edit/:id',
    component: PostEdit
  }

];