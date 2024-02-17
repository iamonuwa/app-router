"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Task, TaskSchema } from "@/models/task";

import { Checkbox } from "@/components/ui/checkbox";
import { ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { tasks } from "@/data/tasks";
import { useForm } from "react-hook-form";
import { useTasks } from "@/hooks/use-tasks";
import { yupResolver } from "@hookform/resolvers/yup";

export const TaskWidget = () => {
  const form = useForm({
    defaultValues: {
      tasks: [],
    },
    resolver: yupResolver(TaskSchema),
  });

  const onSubmit = (data: Task) => {
    console.log(data);
  };

  return (
    <ResizablePanel
      minSize={15}
      maxSize={20}
      className="hidden md:flex flex-col gap-8 asideLeft bg-[#26252A] rounded-md p-4"
    >
      <h4 className="text-2xl font-semibold tracking-tight text-foreground">
        Today’s Task
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li key={index}>
                <FormField
                  key={index}
                  control={form.control}
                  name="tasks"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={index}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={
                              field.value?.some((value) => value === task) ||
                              false
                            }
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value!, task])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== task
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel
                          className={cn("text-sm font-normal", {
                            "line-through": field.value?.some(
                              (value) => value === task
                            ),
                          })}
                        >
                          {task}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              </li>
            ))}
          </ul>
        </form>
      </Form>
    </ResizablePanel>
  );
};
