import React, { Fragment, useState } from "react";
import JobOpeningComponent from "../../components/recruiter-view/job-openings/index.jsx";
import JobDescription from "../../components/recruiter-view/job-openings/job-description.jsx";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import CandidateSelection from "../../components/recruiter-view/job-openings/candidates-selection.jsx";
import CandidateProfile from "../../components/recruiter-view/job-openings/candidate-profile.jsx";

const JobOpenings = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="
            w-full h-screen 
            lg:max-w-[999px] 
            md:max-w-full
            sm:max-w-full 
            overflow-y-auto"
        >
          <div className="w-full h-full">
            <JobDescription setOpen1={setOpen1} setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <Sheet open={open1} onOpenChange={setOpen1}>
        <SheetContent
          side="right"
          className="
            w-full h-screen 
            lg:max-w-[999px] 
            md:max-w-full
            sm:max-w-full 
            overflow-y-auto"
        >
          <div className="w-full h-full">
            <CandidateSelection show={true} setOpen2={setOpen2} button={true} />
          </div>
        </SheetContent>
      </Sheet>
      <Sheet open={open2} onOpenChange={setOpen2}>
        <SheetContent
          side="right"
          className="
              w-full h-screen 
            lg:max-w-[999px] 
            md:max-w-full
            sm:max-w-full 
            overflow-y-auto"
        >
          <div className="w-full h-full">
            <CandidateProfile />
          </div>
        </SheetContent>
      </Sheet>

      <div className="lg:pt-[80px] w-full">
        <JobOpeningComponent setOpen={setOpen} />
      </div>
    </Fragment>
  );
};

export default JobOpenings;
