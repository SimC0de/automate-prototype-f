import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const mockTeachers = [
  { id: "T001", name: "Juan Dela Cruz", specialization: "Mathematics" },
  { id: "T002", name: "Maria Santos", specialization: "English" },
  { id: "T003", name: "Jose Reyes", specialization: "Science" },
  { id: "T004", name: "Ana Garcia", specialization: "Filipino" },
  { id: "T005", name: "Pedro Martinez", specialization: "Computer Science" },
];

const subjects = [
  "Mathematics",
  "English",
  "Science",
  "Filipino",
  "Social Studies",
  "Physical Education",
  "Music",
  "Arts",
  "Computer Science",
];

export function TeacherAssignment() {
  const [selectedYear] = useState("2025");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [schedule, setSchedule] = useState("");
  const [assignments, setAssignments] = useState([
    { grade: "Grade 7", section: "Einstein", subject: "Mathematics", teacher: "Juan Dela Cruz", schedule: "MTWTHF 7-8" },
    { grade: "Grade 8", section: "Darwin", subject: "Science", teacher: "Jose Reyes", schedule: "MWF 10-11" },
    { grade: "Grade 9", section: "Einstein", subject: "English", teacher: "Maria Santos", schedule: "TTH 1-2:30" },
  ]);

  const handleAssign = () => {
    if (!selectedGrade || !selectedSection || !selectedSubject || !selectedTeacher || !schedule) {
      toast.error("Please fill in all fields");
      return;
    }

    const newAssignment = {
      grade: selectedGrade,
      section: selectedSection,
      subject: selectedSubject,
      teacher: selectedTeacher,
      schedule,
    };

    setAssignments((prev) => [...prev, newAssignment]);
    toast.success("Teacher assigned successfully!");

    setSelectedGrade("");
    setSelectedSection("");
    setSelectedSubject("");
    setSelectedTeacher("");
    setSchedule("");
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          TEACHER ASSIGNMENT - SUBJECT LOADING
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="max-w-7xl">
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] mb-6">
            <div className="flex items-center gap-4 mb-6">
              <p>Subject offerings for school year:</p>
              <div className="h-[52px] px-6 border border-[#5c5c5c] rounded-[10px] flex items-center justify-center min-w-[100px]">
                <p className="text-center">{selectedYear}</p>
              </div>
              <p>-</p>
              <div className="h-[52px] px-6 border border-[#5c5c5c] rounded-[10px] flex items-center justify-center min-w-[100px]">
                <p className="text-center">{parseInt(selectedYear) + 1}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block mb-2">Grade Level</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="">Select Grade</option>
                  {Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`).map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Section</label>
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  disabled={!selectedGrade}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px] disabled:opacity-50"
                >
                  <option value="">Select Section</option>
                  {["MARK", "JOHN", "LOUIS", "SIMONE", "EXODUS"].map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Subject</label>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block mb-2">Assign Teacher</label>
                <select
                  value={selectedTeacher}
                  onChange={(e) => setSelectedTeacher(e.target.value)}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="">Select Teacher</option>
                  {mockTeachers.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} - {t.specialization}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-2">Schedule</label>
                <input
                  type="text"
                  placeholder="e.g. MTWTHF 7-8"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                onClick={handleAssign}
                className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
              >
                Assign Teacher
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <div className="bg-[#d9d9d9] h-[40px] flex items-center px-4 mb-2">
              <p className="font-medium">
                TEACHING ASSIGNMENTS FOR AY: {selectedYear} - {parseInt(selectedYear) + 1}
              </p>
            </div>

            <div className="bg-white flex items-stretch border border-black">
              <div className="flex-1 text-center border-r border-black flex items-center justify-center h-[50px]">
                SUBJECT TITLE
              </div>
              <div className="flex-1 text-center border-r border-black flex items-center justify-center h-[50px]">
                SECTION/ROOM
              </div>
              <div className="flex-1 text-center border-r border-black flex items-center justify-center h-[50px]">
                SCHEDULE
              </div>
              <div className="w-64 text-center flex items-center justify-center h-[50px]">
                ASSIGNED TEACHER
              </div>
            </div>

            <div className="space-y-0">
              {assignments.map((a, idx) => (
                <div
                  key={`${a.grade}-${a.section}-${a.subject}-${idx}`}
                  className="bg-white flex items-center border border-black"
                >
                  <div className="flex-1 text-center border-r border-black py-3">{a.subject}</div>
                  <div className="flex-1 text-center border-r border-black py-3">
                    {a.grade} - {a.section}
                  </div>
                  <div className="flex-1 text-center border-r border-black py-3">{a.schedule}</div>
                  <div className="w-64 text-center py-3">{a.teacher}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
