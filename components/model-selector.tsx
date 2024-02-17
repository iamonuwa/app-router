import React, {
  ComponentProps,
  ComponentPropsWithoutRef,
  useState,
} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { SelectTriggerProps } from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

// Assuming Option type remains the same as previously defined
type Option = string | number | { value: string | number; label: string };

type ModelSelectorProps = ComponentPropsWithoutRef<typeof SelectTrigger> & {
  options: Option[];
  onChange: (value: string | number) => void; // Callback function to handle change
};

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  options,
  className,
  onChange,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(undefined);

  // Check if option is an object with value and label
  const isOptionObject = (
    option: Option
  ): option is { value: string | number; label: string } =>
    typeof option === "object" && "value" in option && "label" in option;

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value); // Update local state
    onChange(value); // Propagate change to parent component
  };

  return (
    <Select onValueChange={handleSelectChange} value={String(selectedValue)}>
      <SelectTrigger className={cn(className)} {...rest}>
        <SelectValue placeholder="Model" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => {
          const key = typeof option === "object" ? option.value : option;
          const value = isOptionObject(option) ? option.value : option;
          const label = isOptionObject(option) ? option.label : option;

          return (
            <SelectItem
              isSelected={value === selectedValue}
              key={key}
              value={String(value)}
              onClick={() => handleSelectChange(value)}
            >
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
