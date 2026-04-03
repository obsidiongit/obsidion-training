import { getAllRoles } from "@/data/roles/registry";
import LandingPage from "@/components/landing/LandingPage";

export default function Home() {
  const roles = getAllRoles();

  // Serialize to plain objects (lucide icons are components, passed via props)
  return <LandingPage roles={roles} />;
}
