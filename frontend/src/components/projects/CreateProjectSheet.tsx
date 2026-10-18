"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProject } from "@/services/project.service";
import { useRouter } from "next/navigation";

export function CreateProjectSheet() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject({ name, description });
      setOpen(false);
      setName("");
      setDescription("");
      router.refresh(); // Refresh the page data
    } catch (error) {
      console.error("Failed to create project", error);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={buttonVariants()}>
        Create Project
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Project</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Project Name" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Input 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Optional description" 
            />
          </div>
          <Button type="submit" className="w-full">Create</Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
