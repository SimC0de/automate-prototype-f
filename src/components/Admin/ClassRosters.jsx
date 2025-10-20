import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const mockClassrooms = [
  {
    grade: "Grade 7",
    section: "Einstein",
    adviser: "Mark Richard Eugenio",
    students: [
      { id: "S001", name: "Juan Dela Cruz", status: "Active" },
      { id: "S002", name: "Maria Santos", status: "Active" },
      { id: "S006", name: "Sofia Rodriguez", status: "Active" },
    ],
  },
  {
    grade: "Grade 7",
    section: "Newton",
    adviser: "Sarah Johnson",
    students: [{ id: "S002", name: "Maria Santos", status: "Active" }],
  },
  {
    grade: "Grade 8",
    section: "Darwin",
    adviser: "Robert Chen",
    students: [
      { id: "S003", name: "Jose Reyes", status: "Active" },
      { id: "S008", name: "Carmen Lopez", status: "Active" },
    ],
  },
  {
    grade: "Grade 8",
    section: "Curie",
    adviser: "Maria Gonzales",
    students: [{ id: "S004", name: "Ana Garcia", status: "Active" }],
  },
  {
    grade: "Grade 9",
    section: "Einstein",
    adviser: "David Kim",
    students: [
      { id: "S005", name: "Pedro Martinez", status: "Active" },
      { id: "S008", name: "Carmen Lopez", status: "Active" },
    ],
  },
  {
    grade: "Grade 10",
    section: "Newton",
    adviser: "Sarah Johnson",
    students: [{ id: "S007", name: "Miguel Fernandez", status: "Active" }],
  },
];

export function ClassRosters() {
  const [expandedClass, setExpandedClass] = useState(null);
  const [filterGrade, setFilterGrade] = useState("");

  const filteredClasses = mockClassrooms.filter(
    (classroom) => filterGrade === "" || classroom.grade === filterGrade
  );

  const toggleClass = (key) => {
    setExpandedClass(expandedClass === key ? null : key);
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
          CLASS ROSTERS
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="mb-6">
          <select
            value={filterGrade}
            onChange={(e) => setFilterGrade(e.target.value)}
            className="h-12 px-4 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px] min-w-[250px]"
          >
            <option value="">All Grade Levels</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredClasses.map((classroom) => {
            const key = `${classroom.grade}-${classroom.section}`;
            const isExpanded = expandedClass === key;

            return (
              <div
                key={key}
                className="bg-white rounded-[14px] border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => toggleClass(key)}
                >
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-gray-600">Grade & Section</p>
                      <p className="mt-1">
                        {classroom.grade} - {classroom.section}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Class Adviser</p>
                      <p className="mt-1">{classroom.adviser}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Students</p>
                      <p className="mt-1">{classroom.students.length}</p>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-[#5c5c5c] p-6 bg-gray-50">
                    <h4 className="mb-4">Student Roster</h4>

                    <div className="bg-[#d9d9d9] h-[50px] flex items-center px-4">
                      <div className="w-32">Student ID</div>
                      <div className="flex-1">Full Name</div>
                      <div className="w-32">Status</div>
                    </div>

                    <div className="space-y-0">
                      {classroom.students.map((student) => (
                        <div
                          key={student.id}
                          className="h-[60px] flex items-center px-4 border border-black bg-white"
                        >
                          <div className="w-32">{student.id}</div>
                          <div className="flex-1">{student.name}</div>
                          <div className="w-32">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                              {student.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
