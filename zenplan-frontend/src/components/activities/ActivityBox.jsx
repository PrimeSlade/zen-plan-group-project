import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, PlusCircle, Edit } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ActivityModel from "./ActivityModel";

const ActivityBox = ({ mode, text, oldForm }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {mode === "edit" ? (
        <Button
          onClick={() => setOpen(true)}
          className={
            "text-black bg-white hover:bg-white shadow-none  mt-3 md:mt-0 hover:text-[var(--color-nav)]"
          }
        >
          <Edit />
        </Button>
      ) : mode !== "home" ? (
        <Button
          onClick={() => setOpen(true)}
          className={
            "bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] mt-3 md:mt-0"
          }
        >
          <Plus />
          {text}
        </Button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center p-1 text-xs text-primary-500 hover:bg-primary-50 transition-colors mt-auto border-t "
        >
          <PlusCircle size={12} className="mr-1" />
          <span>Add</span>
        </button>
      )}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Add New Activity" : "Edit Activity"}
          </DialogTitle>
          <DialogDescription>
            <ActivityModel setOpen={setOpen} oldForm={oldForm} mode={mode} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ActivityBox;
