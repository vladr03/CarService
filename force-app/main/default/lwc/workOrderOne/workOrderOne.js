import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STATUS_FIELD from '@salesforce/schema/WorkOrder.Status';
import PRIORITY_FIELD from '@salesforce/schema/WorkOrder.Priority';
import TYPE_FIELD from '@salesforce/schema/WorkOrder.WorkTypeId';
import DESCRIPTION_FIELD from '@salesforce/schema/WorkOrder.Description';
import SUBJECT_FIELD from '@salesforce/schema/WorkOrder.Subject';

export default class WorkOrderOne extends LightningElement {
    statusField = STATUS_FIELD;
    priorityField = PRIORITY_FIELD;
    typeField = TYPE_FIELD;
    descriptionField = DESCRIPTION_FIELD;
    subjectField = SUBJECT_FIELD;
    isFormCompleted = false;
    workOrderId;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Work Order created",
            variant: "success"
        });
        this.workOrderId = event.detail.id;
        console.log(this.workOrderId);
        this.isFormCompleted = true;
        this.dispatchEvent(evt);
    }
}