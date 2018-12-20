// Type definitions for electron-sandbox alpha
// Project: electron-sandbox
// Definitions by: Darrien Singleton

import { Sprint, User, WorkItem } from "../models";

export as namespace Interfaces;

// ------------------------------------------------------------------
// Repository and Domain
// ------------------------------------------------------------------

export interface IRepository<T extends EntityBase> {
    /**
     * Retrieves an entity from the repository by Id
     * 
     * @param id Id for the entity to retrieve
     */
    getById(id: number): T;

    /**
     * Retrieves all entities for a type
     */
    list(): Array<T>;

    /**
     * Retrieves a list of entities that match an expression
     * 
     * @param predicate Function to predicate results on
     */
    list(predicate: (entity: T) => boolean): Array<T>;

    /**
     * Adds an entity of a type to the repository
     * 
     * @param entity Entity to add
     */
    add(entity: T): void;

    /**
     * Removes an entity of a type from the repository
     * 
     * @param entity Entity to remove
     */
    delete(entity: T): void;

    /**
     * Edits an entity of a type in the repository
     * @param entity Entity to edit
     */
    edit(entity: T): void;
}

export declare abstract class EntityBase {
    id: number;
}

// ------------------------------------------------------------------
// Business layer
// ------------------------------------------------------------------

export interface ISprintService {

    /**
     * Creates a new sprint with specified dates
     * 
     * @notes A sprint cannot be created if the dates intersect/overlap any other existing sprint
     * 
     * @param {Date} start Date that marks the start of the new sprint
     * @param {Date} end Date that marks the end of the new sprint
     * 
     * @throws {InvalidSprintError} when the dates conflict with one or more existing sprints
     */
    addNewSprint(start: Date, end: Date): Sprint;

    /**
     * Edits an instance of a sprint
     * 
     * @notes A sprint cannot be modified to intersect/overlap with any existing sprint
     * 
     * @param sprint Sprint to edit
     * 
     * @throws {InvalidSprintError} when the dates conflict with one or more existing sprints
     */
    editSprint(sprint: Sprint): void;
}

export interface IWorkItemService {

    /**
     * Creates a new work item
     * 
     * @param name Name of the work item
     * @param type Type of the work item
     */
    createWorkItem(name: string, type: number): WorkItem;

    /**
     * Updates the rest of a work item after creation
     * 
     * @param workItemId Id of the work item
     * @param details Details of the wrk item to update
     */
    updateWorkItem(workItemId: number, details: Partial<WorkItem>): void;

    /**
     * Assigns user(s) to a work item
     * 
     * @param workItemId work item to assign
     * @param assignees assignee(s) for the item
     */
    assignWorkItem(workItemId: number, assignees: User | Array<User>): void;

    /**
     * Updates the work items state only
     * 
     * @param workItemId Work item identifier
     * @param workItemState new state for the work item
     */
    updateWorkItemState(workItemId: number, workItemState: number): void;
}

export interface IUserService {

    /**
     * Registers a new user
     * 
     * @param email Email address
     * @param first First name
     * @param last Last name
     */
    registerUser(email: string, first: string, last: string): User;

    /**
     * Updates an existing user
     * 
     * @param userId user identifier
     * @param email Email address
     * @param first First name
     * @param last Last name
     */
    updateUser(userId: number, email: string, first: string, last: string): void;
}