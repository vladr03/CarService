import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STATUS_FIELD from '@salesforce/schema/WorkOrderLineItem.Status';
import ORDER_FIELD from '@salesforce/schema/WorkOrderLineItem.WorkOrderId';
import TYPE_FIELD from '@salesforce/schema/WorkOrderLineItem.WorkTypeId';
import DESCRIPTION_FIELD from '@salesforce/schema/WorkOrderLineItem.Description';

export default class WorkOrderTwo extends LightningElement {
    statusField = STATUS_FIELD;
    typeField = TYPE_FIELD;
    descriptionField = DESCRIPTION_FIELD;
    orderField = ORDER_FIELD;
    @api workOrderId;
    isFormCompleted = false;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Work Order Line Item created",
            variant: "success"
        });
        //this.isFormCompleted = true;
        this.dispatchEvent(evt);
    }
}