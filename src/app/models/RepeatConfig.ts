export interface repeatConfig {
    eventId: number,
    frequency: 'On certain weekdays' | 'On certain weeks' | 'On certains days' | 'On Certain Months',
    start: Date,
    end: Date,
    weekDaysToRepeat?: string[],
    daysToRepeat?: string[],
    weeksToRepeat?: String[],
    monthsToRepeat?: String[],
}