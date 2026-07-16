export declare const getAllTasksService: (search?: string, completed?: boolean) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const createTaskService: (title: string, description?: string) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateTaskService: (id: number, title: string, description?: string) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteTaskService: (id: number) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateTaskStatusService: (id: number, completed: boolean) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=task.service.d.ts.map