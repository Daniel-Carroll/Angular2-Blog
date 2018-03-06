import { BlogComponent } from './blog.component';
import {BlogDetailsComponent} from './blog-post-details/blog-post-details.component';

export const BlogRoutes = [
  { path: '', component: BlogComponent, pathMatch: 'full' },
  { path: 'post/:id', component:BlogDetailsComponent}
];