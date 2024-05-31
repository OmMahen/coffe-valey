"use client";

import { Button, Label, TextInput, Card } from "flowbite-react";

export function DistributorsForm() {
  return (
    <Card>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Distributor Name" />
          </div>
          <TextInput id="name" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="city" value="City" />
          </div>
          <TextInput id="city" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="state" value="State/Region" />
          </div>
          <TextInput id="state" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="country" value="Country" />
          </div>
          <TextInput id="country" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput id="phone" required />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput id="email" type="email" required />
        </div>

        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
}
