import { atom, useAtom } from "jotai";

const tasksAtom = atom<string[]>([
  "Frontend",
  "Review the Design",
  "Estimate the time",
  "Code UI",
  "Testing",
  "Submit",
]);

const selectedTasksAtom = atom<string[]>([]);

export const useTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [selectedTasks, setSelectedTasks] = useAtom(selectedTasksAtom);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (task: string) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const selectTask = (task: string) => {
    setSelectedTasks([...selectedTasks, task]);
  };

  const unselectTask = (task: string) => {
    setSelectedTasks(selectedTasks.filter((t) => t !== task));
  };

  return {
    tasks,
    selectedTasks,
    addTask,
    removeTask,
    selectTask,
    unselectTask,
  };
};
