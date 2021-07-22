import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SUGGESTIONS_TYPES } from 'projects/thrizer-admin-app/src/app/constants/constants';
import { COMMON_MESSAGES } from 'projects/thrizer-admin-app/src/app/constants/messages';
import { FormService } from 'projects/thrizer-admin-app/src/app/services/form.service';
import { UtilityService } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.service';
import { BehaviourWordsManagementService } from '../services/behaviour-words-management.service';

@Component({
  selector: 'app-add-suggestions',
  templateUrl: './add-suggestions.component.html',
  styleUrls: ['./add-suggestions.component.scss']
})
export class AddSuggestionsComponent implements OnInit {

  suggestionForm: FormGroup;
  suggestionData: any;
  title: string;
  suggestionTypeArr = SUGGESTIONS_TYPES;


  constructor(
    public dialogRef: MatDialogRef<AddSuggestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formService: FormService,
    private fb: FormBuilder,
    private utilityService: UtilityService,
    private suggestionService: BehaviourWordsManagementService
  ) {
    this.suggestionTypeArr = this.suggestionTypeArr.filter( item => item.value !== 0)
    this.createForm();
    if (data) {
      this.suggestionData = data;
      this.suggestionForm.patchValue(data);
      this.title = "Edit Suggestion";
    } else {
      this.title = "Add Suggestion";
    }
   }

  ngOnInit(): void {
    console.log(this.suggestionTypeArr)
  }

  createForm() {
    this.suggestionForm = this.fb.group({
      label: this.formService.getControl("name"),
      type: this.formService.getControl('dropdown')
    });
  }

  addOrEdit() {
    if (this.suggestionData) {
      this.editSuggestion();
    } else {
      this.addSuggestion();
    }
  }

  async addSuggestion() {
    try {
      if (this.suggestionForm.valid) {
        const body = { ...this.suggestionForm.value };
        const resp = await this.suggestionService.addSuggestion(body).toPromise();
        this.utilityService.showAlert(COMMON_MESSAGES.ADDED("Suggestion"));
        this.dialogRef.close(true);
      } else {
        // this.utilityService.showFormError();
      }
    } catch (error) {}
  }

  async editSuggestion() {
    try {
      if (this.suggestionForm.valid) {
        const body = {
          ...this.suggestionForm.value,
          _id: this.suggestionData._id,
        };
        const resp = await this.suggestionService.editSuggestion(body).toPromise();
        this.utilityService.showAlert(COMMON_MESSAGES.UPDATED("Suggestion"));
        this.dialogRef.close(true);
      } else {
        // this.utilityService.showFormError();
      }
    } catch (error) {}
  }
  close(): void {
    this.dialogRef.close();
  }



}
