import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', loadChildren: './post-list/post-list.module#PostListModule' },
      { path: 'post', loadChildren: './post/post.module#PostModule' }
    ]),
    MarkdownModule.forRoot()
  ]
})
export class BlogModule {}
