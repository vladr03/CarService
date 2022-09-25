import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PRODUCT_FIELD from '@salesforce/schema/ProductItem.Product2Id';
import LOCATION_FIELD from '@salesforce/schema/ProductItem.LocationId';
import QUANTITY_ON_HAND_FIELD from '@salesforce/schema/ProductItem.QuantityOnHand';
import QUANTITY_UNIT_OF_MEASURE_FIELD from '@salesforce/schema/ProductItem.QuantityUnitOfMeasure';
import NUMBER_FIELD from '@salesforce/schema/ProductItem.SerialNumber';

export default class StepFour extends LightningElement {
    @api productId;
    productField = PRODUCT_FIELD;
    locationField = LOCATION_FIELD;
    quantityOnHandField = QUANTITY_ON_HAND_FIELD;
    quantityUnitOfMeasureField = QUANTITY_UNIT_OF_MEASURE_FIELD;
    numberField = NUMBER_FIELD;
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Product Item created",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}