// Type definitions for electron-sandbox alpha
// Project: electron-sandbox
// Definitions by: Darrien Singleton

import { EntityBase } from "../interfaces";

export as namespace Models;

// ------------------------------------------------------------------
// Domain
// ------------------------------------------------------------------

export declare class Sprint extends EntityBase {

    /**
     * Sprint identifier
     *
     * @type {number}
     * @memberof Sprint
     */
    sprintId: number;

    /**
     * Start date for the Sprint
     *
     * @type {Date}
     * @memberof Sprint
     */
    start: Date;

    /**
     * End date for the sprint
     *
     * @type {Date}
     * @memberof Sprint
     */
    end: Date;

    // Optional members

    /**
     * Sprint name
     *
     * @type {string}
     * @memberof Sprint
     */
    name?: string;
}

export declare class WorkItem extends EntityBase {

    /**
     * Type definition work item
     *
     * @type {WorkItemType}
     * @memberof WorkItem
     */
    workItemType: WorkItemType;

    /**
     * Name of this work item
     *
     * @type {string}
     * @memberof WorkItem
     */
    name: string;

    /**
     * Body of the work item
     *
     * @type {string}
     * @memberof WorkItem
     */
    body: string;

    /**
     * State definition of the work item
     *
     * @type {WorkItemState}
     * @memberof WorkItem
     */
    workItemState: WorkItemState;

    /**
     * The assignment to the work item
     *
     * @type {(User | Array<User>)}
     * @memberof WorkItem
     */
    assignedTo: User | Array<User>;

    // TODO: Other properties (Points, Impeded, )
}

export declare class User extends EntityBase {
    
    /**
     * Unique User identifier
     *
     * @type {number}
     * @memberof User
     */
    userId: number;

    /**
     * First name
     *
     * @type {string}
     * @memberof User
     */
    firstName: string;

    /**
     * Last name
     *
     * @type {string}
     * @memberof User
     */
    lastName: string;

    /**
     * User notification email
     *
     * @type {string}
     * @memberof User
     */
    email: string;

    // TODO: Other properties...
}

// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------

export declare class InvalidSprintError {
    conflicts: [Sprint, Sprint];
}

// ------------------------------------------------------------------
// Enumerations and Repository Enumeration Definitions
// ------------------------------------------------------------------

export declare class WorkItemType extends EntityBase {

    /**
     * A number value that can be used to compare work item types
     *
     * @type {number}
     * @memberof WorkItemType
     */
    workItemTypeId: number;

    /**
     * Name of the work item type
     *
     * @type {string}
     * @memberof WorkItemType
     */
    name: string;

    /**
     * Description of the work item type
     *
     * @type {string}
     * @memberof WorkItemType
     */
    description: string;
}

export declare class WorkItemState extends EntityBase {

    /**
     * A number value that can be used to compare work item states
     *
     * @type {number}
     * @memberof WorkItemState
     */
    workItemStateId: number;

    /**
     * Name of the work item state
     *
     * @type {string}
     * @memberof WorkItemState
     */
    name: string;
}