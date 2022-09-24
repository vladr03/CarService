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
}