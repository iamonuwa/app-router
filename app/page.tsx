"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { ClockWidget } from "@/app/components/widgets/clock-widget";
import { Content } from "@/app/components/content";
import { Fragment } from "react";
import { GenerateWidget } from "@/app/components/widgets/generate-widget";
import { TaskWidget } from "@/app/components/widgets/task-widget";

export default function Page() {
  return (
    <Fragment>
      <ResizablePanelGroup className="bg-wrapper p-4 rounded-xl shadow-xl" direction="horizontal">
        <ResizablePanel minSize={20}>
          <ResizablePanelGroup direction="vertical" className="gap-1">
            <ResizablePanel
              style={{
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: "auto",
                overflow: "auto",
              }}
            >
              <ResizablePanelGroup className="gap-1" direction="horizontal">
                <TaskWidget />
                <Content />
                <ClockWidget />
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <GenerateWidget />
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Fragment>
  );
}
