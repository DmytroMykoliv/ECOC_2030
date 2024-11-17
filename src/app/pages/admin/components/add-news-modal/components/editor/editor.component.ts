import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
  EditorConfig,
} from 'ckeditor5';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CKEditorModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnInit, AfterViewInit {
  public addFormControl = output<FormGroup>();
  public data = input<string>('');

  private _cdr = inject(ChangeDetectorRef);

  private _fb = inject(FormBuilder);
  public form = this._fb.group({
    text: ['', Validators.required],
  });

  get text() {
    return this.form.get('text');
  }

  public isLayoutReady = signal(false);
  public Editor = ClassicEditor;
  public config: EditorConfig = {};

  ngOnInit(): void {
    this.addFormControl.emit(this.form);

    if (this.data()) {
      this.text?.patchValue(this.data());
    }
  }

  ngAfterViewInit(): void {
    this.config = {
      toolbar: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        'insertTable',
        'mediaEmbed',
        '|',
        'bulletedList',
        'numberedList',
        'indent',
        'outdent',
      ],
      plugins: [
        Bold,
        Essentials,
        Heading,
        Indent,
        IndentBlock,
        Italic,
        Link,
        List,
        MediaEmbed,
        Paragraph,
        Table,
        Undo,
      ],
    };

    this.isLayoutReady.set(true);
    this._cdr.detectChanges();
  }
}
