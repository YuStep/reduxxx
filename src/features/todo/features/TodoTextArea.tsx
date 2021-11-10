import React, { useEffect, useRef, useState } from "react";
import { TextAreaGroup, TextArea, Label } from "./TodoTextArea.styles";

type TodoTextAreaProps = {
  value: any;
  onChange: (event: any) => void;
  placeholder?: string;
  autocomplete?: "on" | "off";
};
export function TodoTextArea({
  value,
  onChange,
  placeholder,
  autocomplete,
}: TodoTextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [value]);
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    onChange(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };
  return (
    <TextAreaGroup>
      <TextArea
        parentHeight={parentHeight}
        textAreaHeight={textAreaHeight}
        placeholder={placeholder}
        name="name"
        id="name"
        rows={1}
        required
        ref={textAreaRef}
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
      />
      <Label htmlFor="name">{placeholder}</Label>
    </TextAreaGroup>
  );
}
