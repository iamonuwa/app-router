import { ChangeEvent, FC } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { Label } from "@/components/ui/label";
import { StarIcon } from "./icons/star";

interface Props {
  count: number;
  onRatingChange: (rating: number) => void; // Added change handler
}

export const Rating: FC<Props> = ({ count, onRatingChange }) => {
  // Handler that calls onRatingChange with the new rating value
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newRating = parseInt(event.target.value, 10);
    onRatingChange(newRating);
  };

  return (
    <div className="flex items-center gap-1">
      <RadioGroup
        className="flex items-center gap-1"
        defaultValue={count.toString()}
        onChange={handleChange}
      >
        {Array.from({ length: 5 }, (_, index) => index + 1).map((value) => (
          <Label
            key={value}
            className="cursor-pointer"
            htmlFor={`star-${value}`}
          >
            <RadioGroupItem
              className="sr-only"
              id={`star-${value}`}
              value={value.toString()} // Ensure the value is a string
              checked={count === value}
            />
            <StarIcon
              className={`w-5 h-5 ${
                count >= value
                  ? "fill-primary"
                  : "fill-muted stroke-muted-foreground"
              } transition-colors duration-150 ease-in-out hover:fill-current hover:stroke-current`}
            />
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
};
