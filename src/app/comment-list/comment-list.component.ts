import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Comment } from '../comments/comment';
import { CommentsService } from '../comments/comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit, AfterViewInit {

  comments: Comment[];
  addCommentForm: FormGroup;
  showComentBlock = false;

  formErrors = {
    userName: '',
    commentText: ''
  };

  validationMessages = {
    userName: {
      required: 'Обязательное поле',
    },
    commentText: {
      required: 'Обязательное поле',
    },
  };

  constructor(private commentService: CommentsService, public fb: FormBuilder) { }

  ngOnInit() {
    this.getComments();
    this.initForm();
  }

  ngAfterViewInit() {
    this.addCommentForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.addCommentForm) {
      return;
    } else {
      const form = this.addCommentForm;

      for (const field in this.formErrors) {
        this.formErrors[field] = '';

        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const message = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += message[key] + ' ';
          }
        }
      }
    }
  }

  initForm() {
    this.addCommentForm = this.fb.group({
      userName: ['Vadym', Validators.required],
      commentText: ['', Validators.required]
    });
  }

  commentFormTrigger() {
    this.showComentBlock = !this.showComentBlock;
  }

  getComments() {
    this.commentService.getComments().subscribe(
      result => this.comments = result,
      error => console.log(error)
    );
  }

  deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(
        () => this.getComments(),
        error => console.log(error)
    );
  }

  addComment(form) {
    this.commentService.addComment(form.value).subscribe(
        () => this.getComments(),
        error => console.log(error)
    );
  }

}
