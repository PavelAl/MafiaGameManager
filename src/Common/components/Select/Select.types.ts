export type SelectOption = {
  key: string;
  label: string;
};

export type SelectProps = {
  selectedKey?: string;
  options: SelectOption[];
  placeholder?: string;
  onOptionSelected: (key: string) => void;
};
