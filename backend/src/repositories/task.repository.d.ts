export declare const findAllTasks: (search?: string, completed?: boolean) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const createTask: (title: string, description?: string) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateTask: (id: number, title: string, description?: string) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const deleteTask: (id: number) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const updateTaskStatus: (id: number, completed: boolean) => Promise<{
    id: number;
    title: string;
    description: string | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}>;
//# sourceMappingURL=task.repository.d.ts.map