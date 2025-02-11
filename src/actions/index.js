'use server'

import connectToDB from "@/database"
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";


//Create Profile Action

export async function createProfileAction(formData,pathToRevalidate){
    await connectToDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
}

//After onBoarding if recruiter has no premium the webpage redirect to membership page
export async function fetchProfileAction(id){
        await connectToDB();
        const result=await Profile.findOne({userId:id})
        return JSON.parse(JSON.stringify(result));
}


//Create A Job (Post a job by Recruiter)

export async function postNewJobAction(formData,pathToRevalidate) {
    await connectToDB();
    console.log("Hello ",formData);
    console.log("Hello",pathToRevalidate);
    await Job.create(formData);
    revalidatePath(pathToRevalidate);
}

//Fetch Job Action ->  500 jobs Posted by Recruiter
//Recruite only sees the jobs they Have Posted
//Mean while Candidate Can see the Jobs that all recruiters posted

export async function fetchjobsForRecruiterAction(id){
    await connectToDB();
    const result=await Job.find({recruiterId:id});
    return JSON.parse(JSON.stringify(result));
}