import { useState } from "react";
import { Search, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

const mockStudents = [
  { id: "S001", name: "Juan Dela Cruz", grade: "Grade 7", section: "Einstein", guardian: "Ana Dela Cruz", contact: "0917-000-0001" },
  { id: "S002", name: "Maria Santos", grade: "Grade 7", section: "Newton", guardian: "Jose Santos", contact: "0917-000-0002" },
  { id: "S003", name: "Jose Reyes", grade: "Grade 8", section: "Darwin", guardian: "Luisa Reyes", contact: "0917-000-0003" },
  { id: "S004", name: "Ana Garcia", grade: "Grade 8", section: "Curie", guardian: "Ramon Garcia", contact: "0917-000-0004" },
  { id: "S005", name: "Pedro Martinez", grade: "Grade 9", section: "Einstein", guardian: "Carmen Martinez", contact: "0917-000-0005" },
  { id: "S006", name: "Sofia Rodriguez", grade: "Grade 7", section: "Einstein", guardian: "Marco Rodriguez", contact: "0917-000-0006" },
  { id: "S007", name: "Miguel Fernandez", grade: "Grade 10", section: "Newton", guardian: "Daniel Fernandez", contact: "0917-000-0007" },
  { id: "S008", name: "Carmen Lopez", grade: "Grade 8", section: "Darwin", guardian: "Isabel Lopez", contact: "0917-000-0008" },
];

export function StudentList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGrade, setFilterGrade] = useState("");

  const filteredStudents = mockStudents.filter(
    (student) =>
      (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterGrade === "" || student.grade === filterGrade)
  );

  const handleEdit = (id) => {
    toast.info(`Edit student ${id}`);
  };

  const handleDelete = (id) => {
    toast.success(`Student ${id} removed`);
  };

  const handleView = (id) => {
    toast.info(`View student ${id} details`);
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          STUDENT LIST
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-10 pr-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
              />
            </div>

            <select
              value={filterGrade}
              onChange={(e) => setFilterGrade(e.target.value)}
              className="h-12 px-4 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px] min-w-[200px]"
            >
              <option value="">All Grade Levels</option>
              {Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`).map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-[#d9d9d9] h-[50px] flex items-center px-4">
            <div className="w-24">Student ID</div>
            <div className="flex-1">Full Name</div>
            <div className="w-32">Grade</div>
            <div className="w-32">Section</div>
            <div className="w-48">Guardian</div>
            <div className="w-40">Contact</div>
            <div className="w-32 text-center">Actions</div>
          </div>

          <div className="space-y-0">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="h-[70px] flex items-center px-4 border border-black bg-white"
              >
                <div className="w-24">{student.id}</div>
                <div className="flex-1">{student.name}</div>
                <div className="w-32">{student.grade}</div>
                <div className="w-32">{student.section}</div>
                <div className="w-48">{student.guardian}</div>
                <div className="w-40">{student.contact}</div>
                <div className="w-32 flex justify-center gap-2">
                  <button
                    onClick={() => handleView(student.id)}
                    className="p-2 rounded-lg transition-colors"
                    title="View"
                  >
                    <Eye className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="p-2 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-5 h-5 text-green-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="p-2 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredStudents.length} of {mockStudents.length} students
            </p>
            <Button className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-6 hover:bg-[#d9d9d9]">
              Export List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
