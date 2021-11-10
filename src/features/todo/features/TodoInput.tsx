import { InputGroup, Input, Label } from "./TodoInput.styles";

type TodoInputProps = {
  value: any;
  onChange: (event: any) => void;
  placeholder?: string;
  autocomplete?: "on" | "off";
};
export function TodoInput({
  value,
  onChange,
  placeholder,
  autocomplete,
}: TodoInputProps) {
  return (
    <InputGroup>
      <Input
        type="input"
        placeholder={placeholder}
        name="name"
        id="name"
        required
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
      />
      <Label htmlFor="name">{placeholder}</Label>
    </InputGroup>
  );
}
