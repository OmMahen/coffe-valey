"use client";

import { Button, Label, TextInput, Card } from "flowbite-react";
import { FileInput } from "flowbite-react";

export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 text-black dark:text-white">
      <Card>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" required />
          </div>

          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Document file" />
            </div>
            <FileInput
              id="file"
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput id="author" required />
          </div>

          <Button type="submit">Add</Button>
        </form>
      </Card>
    </main>
  );
}
