import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PostListComponent }]),
    MarkdownModule.forChild()
  ]
})
export class PostListModule {}
