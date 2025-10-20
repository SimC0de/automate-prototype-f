import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { Save, Users, BookOpen, Calendar, Settings as SettingsIcon } from "lucide-react";

export function AdminSettings() {
  const [activeTab, setActiveTab] = useState("school");

  const [schoolSettings, setSchoolSettings] = useState({
    schoolName: "Sample High School",
    schoolYear: "2025-2026",
    address: "123 Education St., City",
    phone: "(123) 456-7890",
    email: "admin@sampleschool.edu",
  });

  const [academicSettings, setAcademicSettings] = useState({
    gradesPerYear: "4",
    passingGrade: "75",
    maxStudentsPerClass: "40",
  });

  const handleSaveSchool = () => {
    toast.success("School settings saved successfully!");
  };

  const handleSaveAcademic = () => {
    toast.success("Academic settings saved successfully!");
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]"
      />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div
          aria-hidden="true"
          className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]"
        />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          ADMIN SETTINGS
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="grid grid-cols-4 gap-6 h-full">
          <div className="col-span-1">
            <div className="bg-white rounded-[14px] p-4 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
              <h3 className="mb-4 px-2">Settings</h3>

              <div className="space-y-2">
                <div
                  onClick={() => setActiveTab("school")}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeTab === "school"
                      ? "bg-[#ebeaea] border border-[#5c5c5c]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <SettingsIcon className="w-5 h-5" />
                  <span>School Info</span>
                </div>

                <div
                  onClick={() => setActiveTab("academic")}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeTab === "academic"
                      ? "bg-[#ebeaea] border border-[#5c5c5c]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Academic</span>
                </div>

                <div
                  onClick={() => setActiveTab("users")}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeTab === "users"
                      ? "bg-[#ebeaea] border border-[#5c5c5c]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>User Roles</span>
                </div>

                <div
                  onClick={() => setActiveTab("calendar")}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeTab === "calendar"
                      ? "bg-[#ebeaea] border border-[#5c5c5c]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Calendar</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            {activeTab === "school" && (
              <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
                <h3 className="mb-6">School Information</h3>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input
                      id="schoolName"
                      value={schoolSettings.schoolName}
                      onChange={(e) =>
                        setSchoolSettings({ ...schoolSettings, schoolName: e.target.value })
                      }
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="schoolYear">Current School Year</Label>
                    <Input
                      id="schoolYear"
                      value={schoolSettings.schoolYear}
                      onChange={(e) =>
                        setSchoolSettings({ ...schoolSettings, schoolYear: e.target.value })
                      }
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={schoolSettings.address}
                      onChange={(e) =>
                        setSchoolSettings({ ...schoolSettings, address: e.target.value })
                      }
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={schoolSettings.phone}
                        onChange={(e) =>
                          setSchoolSettings({ ...schoolSettings, phone: e.target.value })
                        }
                        className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={schoolSettings.email}
                        onChange={(e) =>
                          setSchoolSettings({ ...schoolSettings, email: e.target.value })
                        }
                        className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={handleSaveSchool}
                    className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9] flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "academic" && (
              <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
                <h3 className="mb-6">Academic Settings</h3>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="gradesPerYear">Number of Grading Periods Per Year</Label>
                    <select
                      id="gradesPerYear"
                      value={academicSettings.gradesPerYear}
                      onChange={(e) =>
                        setAcademicSettings({ ...academicSettings, gradesPerYear: e.target.value })
                      }
                      className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                    >
                      <option value="2">2 Semesters</option>
                      <option value="4">4 Quarters</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="passingGrade">Passing Grade</Label>
                    <Input
                      id="passingGrade"
                      type="number"
                      value={academicSettings.passingGrade}
                      onChange={(e) =>
                        setAcademicSettings({ ...academicSettings, passingGrade: e.target.value })
                      }
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="maxStudents">Maximum Students Per Classroom</Label>
                    <Input
                      id="maxStudents"
                      type="number"
                      value={academicSettings.maxStudentsPerClass}
                      onChange={(e) =>
                        setAcademicSettings({
                          ...academicSettings,
                          maxStudentsPerClass: e.target.value,
                        })
                      }
                      className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={handleSaveAcademic}
                    className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9] flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
                <h3 className="mb-6">User Roles & Permissions</h3>
                <p className="text-gray-600">
                  Configure admin, teacher, and student permissions here.
                </p>
              </div>
            )}

            {activeTab === "calendar" && (
              <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
                <h3 className="mb-6">Academic Calendar</h3>
                <p className="text-gray-600">Set important dates for the school year.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
