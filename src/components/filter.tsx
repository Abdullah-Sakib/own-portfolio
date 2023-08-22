import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "../lib/utils";

interface filterOptions {
  value: string;
  label: string;
}

interface FilterProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  filterOptions: filterOptions[];
  lable: string;
  inputPlaceholder: string;
}

const Filter: React.FC<FilterProps> = ({
  open,
  setOpen,
  value,
  setValue,
  filterOptions,
  lable,
  inputPlaceholder,
}) => {
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="bg-[#49d49d10]">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[230px] justify-between "
          >
            {value
              ? filterOptions.find(
                  (filterOptions) => filterOptions.value === value
                )?.label
              : lable ?? "Filter by category"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[230px] p-0 ">
          <Command className="bg-[#49d49d10]">
            <CommandInput placeholder={inputPlaceholder} />
            <CommandEmpty>No data found.</CommandEmpty>
            <CommandGroup>
              {filterOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Filter;
