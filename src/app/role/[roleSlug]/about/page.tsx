import { redirect } from "next/navigation";

export default async function AboutRedirect() {
  redirect("/about");
}
