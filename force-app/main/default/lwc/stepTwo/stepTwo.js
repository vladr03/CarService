import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import RELATED_FIELD from '@salesforce/schema/SkillRequirement.RelatedRecordId';
import SKILL_FIELD from '@salesforce/schema/SkillRequirement.SkillId';
import LEVEL_FIELD from '@salesforce/schema/SkillRequirement.SkillLevel';

export default class StepTwo extends LightningElement {
    @api objectApiName;
    @api workTypeId;
    relatedField = RELATED_FIELD;
    skillField = SKILL_FIELD;
    levelField = LEVEL_FIELD;
    isFormCompleted = false;

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Skill Requirement created",
            variant: "success"
        });
        this.dispatchEvent(evt);
        this.isFormCompleted = true;
        console.log(this.workTypeId);
    }
}