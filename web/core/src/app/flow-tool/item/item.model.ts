export enum ItemTypes {
    EVENT = 'Event', CONDITION = 'Condition', ACTION = 'Action'
}

export enum ConditionType {
    YES = 'Yes', NO = 'No'
}

export interface IFlowItem {
    [x: string]: any;
    id: number;
    parentId?: number,
    description: string,
    logic?: any;
    type: ItemTypes;
    metadata?: any;
    childs?: any;
    visible?: boolean;
    styles?: any;
}

export class FlowItem implements IFlowItem {
    constructor(public id: number, public description: string, public type: any, public logic?: any, public parentId?: any, public metadata?: any, public visible?: boolean, public childs?: any, public styles: any = {}) { }
}