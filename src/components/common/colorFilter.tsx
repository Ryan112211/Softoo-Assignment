import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import useProductStore from '@/lib/store/productStore';

const getDropdownOptions = (colors: string[]) => {
  return [
    {
      label: 'All',
      value: 'all',
    },
    ...colors?.map((color) => ({
      label: color,
      value: color,
    })),
  ];
};

const ColorFilter = ({ colorsAvailable }: { colorsAvailable: string[] }) => {
  const { colorFilter, setColorFilter } = useProductStore();
  const dropdownOptions = getDropdownOptions(colorsAvailable);
  return (
    <DropdownMenu data-cy="color-filter-dropdown">
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="uppercase"
          data-testid="color-filter"
        >
          {colorFilter !== 'all' && (
            <span
              className="inline-block rounded-full h-4 w-4 mr-2 shadow-sm text-lg "
              style={{ backgroundColor: colorFilter }}
            ></span>
          )}
          {colorFilter === 'all' ? 'All Colors' : colorFilter}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {dropdownOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            data-testid="color-filter-dropdown"
            onClick={() => setColorFilter(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorFilter;
