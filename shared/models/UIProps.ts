export interface ButtonProps {
  text?: string;
  type: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
}

export interface StyledButtonProps {
  types: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface InputProps {
  type: string;
  icon: 'local' | 'date';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface StyledInputProps {
  icon: 'local' | 'date';
}
