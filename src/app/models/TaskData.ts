import { Time } from "./Time";

export interface TaskData {
    goal: string,
    person?: string,
    place?: string,
    status: string,
    startDate?: Date,
    startTime?: Time,
    endDate?: Date,
    endTime?: Time,
    estimatedTime?: string,
    notes?: string,
}