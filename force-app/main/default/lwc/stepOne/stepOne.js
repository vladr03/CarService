import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/WorkType.Name';
import DESCRIPTION_FIELD from '@salesforce/schema/WorkType.Description';
import DURATION_FIELD from '@salesforce/schema/WorkType.EstimatedDuration';
import TYPE_FIELD from '@salesforce/schema/WorkType.DurationType';
import AUTO_FIELD from '@salesforce/schema/WorkType.ShouldAutoCreateSvcAppt';
export default class StepOne extends NavigationMixin(LightningElement) {
    @api objectApiName;
    nameField = NAME_FIELD;
    descriptionField = DESCRIPTION_FIELD;
    durationField = DURATION_FIELD;
    typeField = TYPE_FIELD;
    autoField = AUTO_FIELD;
    // fields = [NAME_FIELD, DESCRIPTION_FIELD, DURATION_FIELD];
    isFormCompleted = false;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Work Type created",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }

    theSecondStepHandler() {
        this.isFormCompleted = true;
        console.log("test");
    }
}