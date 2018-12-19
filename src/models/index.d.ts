import { EntityBase } from "../interfaces";

// Type definitions for electron-sandbox alpha
// Project: electron-sandbox
// Definitions by: Darrien Singleton

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

// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------

export declare class InvalidSprintError {
    conflicts: [Sprint, Sprint];
}