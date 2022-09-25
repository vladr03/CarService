import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PARENT_FIELD from '@salesforce/schema/ProductRequired.ParentRecordId';
import PRODUCT_FIELD from '@salesforce/schema/ProductRequired.Product2Id';
import QUANTITY_FIELD from '@salesforce/schema/ProductRequired.QuantityRequired';
import QUANTITY_UNIT_FIELD from '@salesforce/schema/ProductRequired.QuantityUnitOfMeasure';

export default class StepThree extends LightningElement {
    @api objectApiName;
    @api workTypeId;
    parentField = PARENT_FIELD;
    productField = PRODUCT_FIELD;
    quantityField = QUANTITY_FIELD;
    quantityUnitField = QUANTITY_UNIT_FIELD;
    isFormCompleted = false;

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Product Required created",
            variant: "success"
        });
        this.dispatchEvent(evt);
        this.isFormCompleted = true;
        console.log(this.workTypeId);
    }
}