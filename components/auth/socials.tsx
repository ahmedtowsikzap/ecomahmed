"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function Socials() {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  async function handleSocialSignIn(provider: "google" | "github") {
    setError("");
    setLoading(true);
    const result = await signIn(provider, {
      redirect: false,
      callbackUrl: "/",
    });
    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else if (result?.ok && result.url) {
      window.location.href = result.url;
    }
  }
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Button
        variant={"outline"}
        className="flex gap-4 w-full"
        disabled={loading}
        onClick={() => handleSocialSignIn("google")}
      >
        <p>Sign in with Google</p>
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        className="flex gap-4 w-full"
        variant={"outline"}
        disabled={loading}
        onClick={() => handleSocialSignIn("github")}
      >
        Sign in with Github
        <FaGithub className="w-5 h-5" />
      </Button>
      {error && (
        <div className="text-red-500 text-sm mt-2 w-full text-center">{error}</div>
      )}
    </div>
  );
}
