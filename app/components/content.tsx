import { DataTable } from "@/components/table/data-table";
import { ModelHeader } from "@/components/model-header";
import { ResizablePanel } from "@/components/ui/resizable";
import { columns } from "@/components/table/columns";
import { useModels } from "@/hooks/use-models";

export const Content = () => {
  const { models } = useModels();
  return (
    <ResizablePanel className="content mx-auto p-2">
      <div className="w-full p-1 bg-[#26252A] rounded-md">
        <ModelHeader />
        <DataTable data={models} columns={columns} />
      </div>
    </ResizablePanel>
  );
};
