import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

import { DataTable } from "@/components/table/data-table";
import { Fragment } from "react";
import { ModelHeader } from "@/components/model-header";
import { columns } from "@/components/table/columns";
import { useModels } from "@/hooks/use-models";

export const Content = () => {
  const { models } = useModels();
  return (
    <Fragment>
      <ResizableHandle className="hidden md:flex" withHandle />
      <ResizablePanel className="content flex-auto mx-auto">
        <div className="w-full p-1 bg-[#26252A] rounded-md">
          <ModelHeader />
          <DataTable data={models} columns={columns} />
        </div>
      </ResizablePanel>
      <ResizableHandle className="hidden md:flex" withHandle />
    </Fragment>
  );
};
