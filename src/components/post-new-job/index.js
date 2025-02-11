"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import CommonForm from "../common-form";
import { initialPostNewJobFormData, postNewJobFormControls } from "@/utils";
import { postNewJobAction } from "@/actions";

const PostNewJob = ({user, profileInfo }) => {
  console.log(profileInfo?.recruiterInfo?.companyName);
  const [showJobDailog, setShowJobDailog] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    ...initialPostNewJobFormData,
    companyName: profileInfo?.recruiterInfo?.companyName, //it is disabled and it is given by recruiter when he/she registered
  });

//   console.log(jobFormData);

  const handlePostNewBtnValid=()=>{
    return Object.keys(jobFormData).every((control)=>jobFormData[control]?.trim()!=='');
  }

  const createNewJob=async()=>{
  
      await postNewJobAction({
        ...jobFormData,
        recruiterId:user?.id,
        applicants:[],
      },"/jobs");
      setJobFormData({
        ...initialPostNewJobFormData,
        companyName: profileInfo?.recruiterInfo?.companyName,
      });
      setShowJobDailog(false);
  }
  
  return (
    <div>
      <Button
        onClick={() => setShowJobDailog(true)}
        className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
      >
        Post A Job
      </Button>
      <Dialog
        open={showJobDailog}
        onOpenChange={() => {
          setShowJobDailog(false),
            setJobFormData({
              ...initialPostNewJobFormData,
              companyName: profileInfo?.recruiterInfo?.companyName,
            });
        }}
      >
        <DialogContent className="sm:max-w-screen-md h-[600px] overflow-auto">
          <DialogHeader>
            <DialogTitle> Post New Job</DialogTitle>
            <div className="grid gap-4 py-4">
              <CommonForm
                buttonText={"Add"}
                formData={jobFormData}
                setFormData={setJobFormData}
                formControls={postNewJobFormControls}
                isBtnDisabled={!handlePostNewBtnValid()}
                action={createNewJob}
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostNewJob;
