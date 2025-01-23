import { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { fetchTasks } from '../utils/api';

const useTasks = () => {
    const { tasks, setTasks } = useContext(TaskContext);

    useEffect(() => {
        const loadTasks = async () => {
            const fetchedTasks = await fetchTasks();
            setTasks(fetchedTasks);
        };
        loadTasks();
    }, [setTasks]);

    return tasks;
};

export default useTasks;