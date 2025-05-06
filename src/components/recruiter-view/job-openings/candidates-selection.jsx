import React, { Fragment } from "react";
import { Input } from "../../ui/input";
import { Bag, BlackBag, FilterIcon, SearchIcon } from "../../../utils/icon";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../ui/button";

const CandidateSelection = ({ setOpen2, show, button }) => {
  const data = [
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
    {
      name: "Heeral Nant",
      role: "Lead Product Designer",
      appliedfor: "UX Designer",
      skills: "Figma, UX Research",
      experience: "3 Years",
      lastUpdate: "2 Days ago",
    },
  ];
  return (
    <Fragment>
      {" "}
      <div className="hidden w-full min-h-screen p-6 bg-white outline outline-offset-[-1px] outline-neutral-400 lg:inline-flex flex-col justify-start items-start gap-9 overflow-hidden">
        {show && (
          <div className="justify-start text-neutral-900 text-2xl font-medium leading-9">
            Select Candidates
          </div>
        )}
        {show && (
          <div className="relative w-full flex items-center justify-center">
            <Input
              type="search"
              placeholder="Enter job title, company, location"
              className="appearance-none p-[12px] pl-[35px] rounded-[69px] border border-[#6945ED] focus-visible:ring-0 focus:border-[2px] focus:border-[#4E2FC0] placeholder:text-[13px] placeholder:text-[#A3A3A3]"
            />
            <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
              <SearchIcon className="h-[18px] w-[18px]" />
            </div>
          </div>
        )}
        {show && (
          <div className="self-stretch px-4 py-2 bg-white rounded-xl outline outline-offset-[-1px] outline-neutral-200 inline-flex justify-center items-center gap-8">
            <div className="flex-1 flex justify-start items-center gap-2">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="w-4 h-4">
                  <BlackBag className="h-full w-full" />
                </div>
                <div className="justify-center text-zinc-600 text-[12px] font-medium capitalize">
                  Applied For
                </div>
              </div>
              <div className="w-4 h-4">
                <div className="border-l-[#606060] h-full border-l" />
              </div>
            </div>{" "}
            <div className="flex-1 flex justify-start items-center gap-2">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="w-4 h-4">
                  <BlackBag className="h-full w-full" />
                </div>
                <div className="justify-center text-zinc-600 text-[12px] font-medium capitalize">
                  Experience
                </div>
              </div>
              <div className="w-4 h-4">
                <div className="border-l-[#606060] h-full border-l" />
              </div>
            </div>
            <div className="flex-1 flex justify-start items-center gap-2">
              <div className="flex-1 flex justify-start items-center gap-2.5">
                <div className="w-4 h-4">
                  <BlackBag className="h-full w-full" />
                </div>
                <div className="justify-center text-zinc-600 text-[12px] font-medium capitalize">
                  Skills
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full overflow-hidden">
          <Table className="w-full border border-[#DADADA] rounded-[8px]">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[16px] py-[12px] w-[292px] text-[13px] text-[#101018] font-semibold">
                  Owner
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Applied for
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Skills
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Experience
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Last Update
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="px-[16px] py-[12px] flex gap-[10px]">
                    <Button
                      onClick={() => setOpen2(true)}
                      className="cursor-pointer w-[36px] h-[36px] flex items-center justify-center"
                    >
                      <img
                        src=""
                        alt=""
                        className="h-full w-full rounded-[50px]"
                      />
                    </Button>
                    <div className="flex flex-col">
                      <div class="self-stretch justify-start text-[#35353A] text-sm font-bold leading-tight">
                        {item.name}
                      </div>
                      <div className="self-stretch justify-start text-[#6E6E71] text-[12px] font-normal leading-none">
                        {item.role}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.appliedfor}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.skills}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.experience}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.lastUpdate}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {button && (
          <div className="self-stretch flex flex-col justify-start items-end gap-2.5">
            <div className="px-5 py-2.5 bg-gray-900 rounded-3xl inline-flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-sm font-medium capitalize">
                Submit the candidates
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`lg:hidden w-full bg-white overflow-y-auto ${
          show ? "p-6 h-dvh" : ""
        } inline-flex flex-col justify-start items-start gap-6`}
      >
        {show && (
          <div className="justify-start text-neutral-900 text-2xl font-medium leading-9">
            Select Candidates
          </div>
        )}
        {show && (
          <div className="self-stretch inline-flex justify-between items-center gap-6">
            <div className="relative w-full flex items-center justify-center">
              <Input
                type="search"
                placeholder="Enter job title, company, location"
                className="appearance-none p-[12px] pl-[35px] rounded-[69px] border border-[#6945ED] focus-visible:ring-0 focus:border-[1.5px] focus:border-[#4E2FC0] placeholder:text-[13px] placeholder:text-[#A3A3A3]"
              />
              <div className="absolute left-[12px] top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-[18px] w-[18px]" />
              </div>
            </div>
            <div className="p-[12px] rounded-[50px] outline outline-offset-[-1px] outline-black flex justify-center items-center">
              <FilterIcon className="h-[17px] w-[17px]" />
            </div>
          </div>
        )}
        <div className="w-full overflow-hidden">
          <Table className="w-full border border-[#DADADA] rounded-[8px]">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[16px] py-[12px] w-[292px] text-[13px] text-[#101018] font-semibold">
                  Owner
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Applied for
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Skills
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Experience
                </TableHead>
                <TableHead className="px-[16px] py-[12px] w-[164px] text-[13px] text-[#101018] font-semibold">
                  Last Update
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="px-[16px] py-[12px] flex gap-[10px]">
                    <Button
                      onClick={() => setOpen2(true)}
                      className="cursor-pointer w-[36px] h-[36px] flex items-center justify-center"
                    >
                      <img
                        src=""
                        alt=""
                        className="h-full w-full rounded-[50px]"
                      />
                    </Button>
                    <div className="flex flex-col">
                      <div class="self-stretch justify-start text-[#35353A] text-sm font-bold leading-tight">
                        {item.name}
                      </div>
                      <div className="self-stretch justify-start text-[#6E6E71] text-[12px] font-normal leading-none">
                        {item.role}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.appliedfor}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.skills}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.experience}
                    </div>
                  </TableCell>
                  <TableCell className="px-[16px] py-[12px]">
                    <div className="self-stretch justify-start text-[#35353A] text-sm font-normal leading-tight">
                      {item.lastUpdate}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Fragment>
  );
};

export default CandidateSelection;
