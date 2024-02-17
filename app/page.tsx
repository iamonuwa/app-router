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
      <ResizablePanelGroup
        autoSaveId="persistence"
        direction="vertical"
        className="h-screen"
      >
        <ResizablePanelGroup className="layout" direction="horizontal">
          {/* <TaskWidget /> */}
          {/* <ResizableHandle withHandle /> */}
          <Content />
          {/* <ResizableHandle withHandle /> */}
          {/* <ClockWidget /> */}
        </ResizablePanelGroup>
        <GenerateWidget />
      </ResizablePanelGroup>
    </Fragment>
  );
}
