import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
//user is Authenticated --> Profile Info -> on boarded as a candidate or Recruiter
//Redirect the User to OnBoard Route if the user dont have profile INFO after SignIN

export default async function Home() {
  const user= await currentUser(); //user is Authenticated or Not
  // console.log(user,"Current User");
  const profileInfo=null;//user is candiadate or Recruiter
  if(user && !profileInfo?._id)redirect("/onboard")//if user is authenticated but dont have profile info --> redirect to onboard route
  return (
    <section>
      Main contentt
    </section>
  );
}
