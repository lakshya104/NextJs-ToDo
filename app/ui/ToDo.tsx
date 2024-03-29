"use client";

import React, { useState, ChangeEvent, MouseEventHandler } from "react";
// import { useToast } from "@/components/ui/use-toast"

import Wrapper from "./Wrapper";
import Input from "./Input";
import Button from "./Button";
// import List from "./List";
// import { ToastAction } from "@/components/ui/toast";
import { Table } from "./Table";
interface ToDoItem {
  id: number;
  title: string;
  priority: string;
  date: string;
}

export default function ToDo() {
  const [toDo, setToDo] = useState<string>("");
  const [toDoArray, setToDoArray] = useState<ToDoItem[]>([]);
  // const [editInput, setEditInput] = useState<boolean>(false);
  // const [editValue, setEditValue] = useState<string>("");
  // const [editItemId, setEditItemId] = useState<number | null>(null);
  // const { toast } = useToast();

  // const removeItem = (removeId: number) => {
  //   const newArray = toDoArray.filter((item) => item.id !== removeId);
  //   setToDoArray(newArray);
  //   toast({
  //     variant: "destructive",
  //     title: "Deleted",
  //     description: "You successfully deleted a Task.",
  //     action: <ToastAction altText="Try again">Task Removed</ToastAction>,
  //   })
  // };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  // const edit = (id: number) => {
  //   setEditInput(true);
  //   setEditItemId(id);
  // };

  // const saveEdit = () => {
  //   setToDoArray((prev) =>
  //     prev.map((item) =>
  //       item.id === editItemId ? { ...item, title: editValue } : item
  //     )
  //   );
  //   setEditValue("");
  //   setEditInput(false);
  //   toast({
  //     title: "Changes Saved!",
  //     description: "You successfully edited the task.",
  //   })
  // };

  // const onChangeEdit = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEditValue(e.target.value);
  // };

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate); 
    if (toDo !== "") {
      setToDoArray((prev) => [
        ...prev,
        {
          id: toDoArray.length + 1,
          title: toDo,
          priority: "",
          date: currentDate,
        },
      ]);
    }
    setToDo("");
  };

  return (
    <Wrapper>
      <h1 className="text-3xl text-slate-800 font-bold m-5">ToDo App</h1>
      <div className="flex justify-center flex-col md:flex-row items-center">
        <Input onChange={onChange} toDo={toDo} />
        <Button onClick={onClick} title={"Add"} />
      </div>
      {/* {toDoArray.map((item) => {
        return (
          <List
            saveEdit={saveEdit}
            onChangeEdit={onChangeEdit}
            key={item.id}
            item={item}
            edit={edit}
            removeItem={removeItem}
          />
        );
      })} */}

      <Table array={toDoArray} />
    </Wrapper>
  );
}
