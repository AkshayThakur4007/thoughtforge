import { redirect } from "next/navigation";

export default function DashboardIndex() {
  // Redirect to projects as the default dashboard view for now
  redirect("/projects");
}
