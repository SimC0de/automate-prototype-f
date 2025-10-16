import { useState } from "react";
import { Search } from "lucide-react";


const mockRecords = [
  {
    id: "S001",
    name: "Juan Dela Cruz",
    grade: "Grade 7",
    subjects: [
      { name: "Mathematics", q1: 88, q2: 90, q3: 85, q4: 92, final: 88.75 },
      { name: "English", q1: 85, q2: 87, q3: 86, q4: 89, final: 86.75 },
      { name: "Science", q1: 90, q2: 88, q3: 91, q4: 89, final: 89.5 },
      { name: "Filipino", q1: 86, q2: 84, q3: 87, q4: 85, final: 85.5 },
    ],
  },
  {
    id: "S002",
    name: "Maria Santos",
    grade: "Grade 7",
    subjects: [
      { name: "Mathematics", q1: 92, q2: 94, q3: 91, q4: 95, final: 93 },
      { name: "English", q1: 90, q2: 91, q3: 89, q4: 92, final: 90.5 },
      { name: "Science", q1: 93, q2: 92, q3: 94, q4: 93, final: 93 },
      { name: "Filipino", q1: 89, q2: 90, q3: 88, q4: 91, final: 89.5 },
    ],
  },
];

export function AcademicRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredRecords = mockRecords.filter(
    (record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedRecord = mockRecords.find((r) => r.id === selectedStudent);

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
          ACADEMIC RECORDS
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="grid grid-cols-3 gap-6 h-full">
          <div className="col-span-1">
            <div className="bg-white rounded-[14px] p-6 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] h-full">
              <h3 className="mb-4">Select Student</h3>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-10 pr-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div className="space-y-2 max-h-[600px] overflow-auto">
                {filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    onClick={() => setSelectedStudent(record.id)}
                    className={`p-4 border border-[#5c5c5c] rounded-lg cursor-pointer transition-colors ${
                      selectedStudent === record.id
                        ? "bg-[#ebeaea] border-black"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <p>{record.name}</p>
                    <p className="text-gray-600 mt-1">{record.id}</p>
                    <p className="text-gray-600">{record.grade}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            {selectedRecord ? (
              <div className="bg-white rounded-[14px] p-6 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
                <div className="mb-6">
                  <h3>{selectedRecord.name}</h3>
                  <p className="text-gray-600 mt-2">
                    Student ID: {selectedRecord.id}
                  </p>
                  <p className="text-gray-600">
                    Grade Level: {selectedRecord.grade}
                  </p>
                </div>

                <h4 className="mb-4">Academic Performance</h4>

                <div className="bg-[#d9d9d9] h-[50px] flex items-center px-4">
                  <div className="flex-1">Subject</div>
                  <div className="w-24 text-center">Quarter 1</div>
                  <div className="w-24 text-center">Quarter 2</div>
                  <div className="w-24 text-center">Quarter 3</div>
                  <div className="w-24 text-center">Quarter 4</div>
                  <div className="w-24 text-center">Final Grade</div>
                </div>

                <div className="space-y-0">
                  {selectedRecord.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="h-[60px] flex items-center px-4 border border-black bg-white"
                    >
                      <div className="flex-1">{subject.name}</div>
                      <div className="w-24 text-center">{subject.q1}</div>
                      <div className="w-24 text-center">{subject.q2}</div>
                      <div className="w-24 text-center">{subject.q3}</div>
                      <div className="w-24 text-center">{subject.q4}</div>
                      <div className="w-24 text-center">{subject.final}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#ebeaea] rounded-lg">
                  <div className="flex justify-between items-center">
                    <p>General Average:</p>
                    <p>
                      {(
                        selectedRecord.subjects.reduce(
                          (sum, subject) => sum + subject.final,
                          0
                        ) / selectedRecord.subjects.length
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-[14px] p-6 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] flex items-center justify-center h-full">
                <p className="text-gray-400">
                  Select a student to view academic records
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
