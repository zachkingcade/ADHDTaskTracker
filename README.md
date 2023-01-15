# ADHDTaskTracker
A mobile app for tracking tasks to help people with ADHD and other Attention Disorders. It can also just be used for anyone wanting to make their life more organnized.

# Current Tasks
Display Task
Add Task
Remove Task

What should a basic task look like? (not all tasks will use all fields but then those sections will just be null)
``` typescript
export interface Task {
    goal,
    person,
    place,
    status,
    Start Date
    Start Time
    End Date,
    End Time,
    Estimated Time,
    Notes,
    Picture,
}
```
