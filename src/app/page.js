"use client";
import { Button, Label, TextInput, Card } from "flowbite-react";
import ReactLoading from "react-loading";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    localStorage.setItem('userId', userId);
    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-black dark:text-white">
      <Card>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold italic">Coffee Valley</h1>
          <p>Taste the love in every cup!</p>
          <p className="text-slate-500">
            One Alewife Center 3rd Floor Cambridge, MA 02140
          </p>
        </div>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="userid" value="User ID" />
            </div>
            <TextInput
              id="userid"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isLoading ? (
            <Button color="dark" type="submit" disabled>
              <div className="flex gap-2 items-center justify-center">
                <ReactLoading type={"spin"} height={20} width={20} />
                <p>Logging in...</p>
              </div>
            </Button>
          ) : (
            <Button color="dark" type="submit">
              <div className="flex gap-2 items-center justify-center">
                <p>Login</p>
              </div>
            </Button>
          )}
        </form>
      </Card>
    </main>
  );
}
