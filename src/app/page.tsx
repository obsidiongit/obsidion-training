import { redirect } from "next/navigation";

export default function Home() {
  // Automatically redirect the root to the first module of the playbook
  redirect("/playbook/0");
}
