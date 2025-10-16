import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

const mockStudents = [
  { id: "S001", name: "Juan Dela Cruz", gradeLevel: "Grade 7", assigned: false },
  { id: "S002", name: "Maria Santos", gradeLevel: "Grade 7", assigned: false },
  { id: "S003", name: "Jose Reyes", gradeLevel: "Grade 7", assigned: false },
  { id: "S004", name: "Ana Garcia", gradeLevel: "Grade 8", assigned: false },
  { id: "S005", name: "Pedro Martinez", gradeLevel: "Grade 8", assigned: false },
];

export function AssignToClassroom() {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGrade === "" || student.gradeLevel === selectedGrade)
  );

  const handleAssign = () => {
    if (selectedStudents.length === 0) {
      toast.error("Please select at least one student");
      return;
    }
    if (!selectedSection) {
      toast.error("Please select a section");
      return;
    }
    toast.success(`${selectedStudents.length} student(s) assigned to ${selectedSection}`);
    setSelectedStudents([]);
  };

  const toggleStudent = (id) => {
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
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
          ASSIGN STUDENTS TO CLASSROOM
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="max-w-6xl">
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] mb-6">
            <h3 className="mb-6">Select Classroom</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Grade Level</label>
                <select
                  value={selectedGrade}
                  onChange={(e) => {
                    setSelectedGrade(e.target.value);
                    setSelectedSection("");
                  }}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="">Select Grade Level</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
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
                  <option value={`${selectedGrade} - Einstein`}>{selectedGrade} - Einstein</option>
                  <option value={`${selectedGrade} - Newton`}>{selectedGrade} - Newton</option>
                  <option value={`${selectedGrade} - Darwin`}>{selectedGrade} - Darwin</option>
                  <option value={`${selectedGrade} - Curie`}>{selectedGrade} - Curie</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <div className="flex items-center justify-between mb-6">
              <h3>Available Students</h3>
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-10 pr-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>

            <div className="bg-[#d9d9d9] h-[40px] flex items-center px-4 mb-2">
              <div className="w-12"></div>
              <div className="w-32">Student ID</div>
              <div className="flex-1">Student Name</div>
              <div className="w-40">Grade Level</div>
            </div>

            <div className="space-y-1 max-h-96 overflow-auto">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="bg-white h-[60px] flex items-center px-4 border border-black cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleStudent(student.id)}
                >
                  <div className="w-12">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudent(student.id)}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="w-32">{student.id}</div>
                  <div className="flex-1">{student.name}</div>
                  <div className="w-40">{student.gradeLevel}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-gray-600">{selectedStudents.length} student(s) selected</p>
              <Button
                onClick={handleAssign}
                className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
              >
                Assign to Classroom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
