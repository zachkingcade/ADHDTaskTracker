import { Time } from "@angular/common"

export interface TaskData {
    goal: string,
    person?: string,
    place?: string,
    status: string,
    startDate?: Date,
    startTime?: Time,
    endDate?: Date,
    endTime?: Time,
    estimatedTime?: Time,
    notes?: string,
    picture?: any,
}