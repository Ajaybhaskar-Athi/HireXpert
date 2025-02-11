import { fetchjobsForRecruiterAction, fetchProfileAction } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const { default: JobListing } = require("@/components/job-listing");

async function Jobspage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const profileInfo = await fetchProfileAction(user?.id);

  const jobList=await fetchjobsForRecruiterAction(user?.id);
  console.log("JobLists",jobList);
  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
    />
  );
}

export default Jobspage;
