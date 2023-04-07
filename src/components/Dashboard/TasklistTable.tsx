import { Badge, ColorSwatch, Group, Table } from "@mantine/core";

const TaskList = [
    {
        id: 1,
        taskName: "Task1",
        status: "Active",
        priority: "low",
        assignee: "Tanmay Patel"
    },
    {
        id: 2,
        taskName: "Task2",
        status: "Completed",
        priority: "medium",
        assignee: "Aman Patel"
    },
    {
        id: 3,
        taskName: "Task3",
        status: "On Hold",
        priority: "low",
        assignee: "Tanmay Patel"
    },
    {
        id: 4,
        taskName: "Task4",
        status: "Active",
        priority: "high",
        assignee: "Mehul Patel"
    },
    {
        id: 5,
        taskName: "Task5",
        status: "On Hold",
        priority: "low",
        assignee: "Abhi Patel"
    },
    {
        id: 6,
        taskName: "Task6",
        status: "Completed",
        priority: "medium",
        assignee: "Aman Patel"
    },
    {
        id: 7,
        taskName: "Task7",
        status: "Active",
        priority: "high",
        assignee: "Tanmay Patel"
    },
]
/**
 * @returns A table containing the task details of the project in the tabular form 
 */
function TasklistTable() {
    /**
     * @name setBadgeColor
     * @param prority task priority: low, medium or high
     * @returns color of the badge
     */
    const setBadgeColor = (prority: string) => {
        switch (prority) {
            case "low": return "green"
            case "medium": return "blue"
            case "high": return "red"
            default: return;
        }
    }
    /**
     * @name setStatusColor
     * @param status status of the task: active, completed or on hold
     * @returns color for the colorSwatch
     */
    const setStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "blue"
            case "Completed": return "green"
            case "On Hold": return "orange"
            default: return "blue";
        }
    }
    //table row containing task details
    const row = TaskList?.slice(0, 4)?.map((task, index) => (
        <tr key={task.id}>
            <td>{index + 1}</td>
            <td>
                <Group spacing="xs">
                    <ColorSwatch size={12} color={setStatusColor(task.status)} />
                    {task.status}
                </Group>
            </td>
            <td>{task.taskName}</td>
            <td>{task.assignee}</td>
            <td>
                <Badge size="md" color={setBadgeColor(task.priority)}>
                    {task.priority}
                </Badge>
            </td>
        </tr>
    ))

    return (
        <Table highlightOnHover horizontalSpacing="md" verticalSpacing="sm" fontSize={14}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>STATUS</th>
                    <th>TASK NAME</th>
                    <th>ASSIGNEE</th>
                    <th>PRIORITY</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </Table>
    )
};

export default TasklistTable;
