import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailDto } from '../../models/EmailDto';
import { EmailSendingService } from '../../services/EmailSendingService';

@Component({
  selector: 'app-email-page',
  imports: [ReactiveFormsModule],
  templateUrl: './email-page.component.html',
  styleUrl: './email-page.component.scss',
})
export class EmailPageComponent {
  actorForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.actorForm = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
   

  email: EmailDto = new EmailDto('', '', '');

  onSubmit(): void {
    if(this.actorForm.valid) {
      var email = new EmailDto(this.actorForm.value.email, this.actorForm.value.name, this.actorForm.value.message);
      var emailService = new EmailSendingService();
      emailService.sendEmail(email);
      emailService.sendEmailToSender(email.email);

      this.actorForm.reset();
      alert("Success! Your email has been sent.");
    }
  }
}
