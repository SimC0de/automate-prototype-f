import { Building2, Users } from "lucide-react";

const gradeSections = [
  { grade: "Grade 1", sections: ["Maria", "Jose", "Antonio"] },
  { grade: "Grade 2", sections: ["Rosa", "Juan", "Carmen"] },
  { grade: "Grade 3", sections: ["Pedro", "Ana", "Miguel"] },
  { grade: "Grade 4", sections: ["Sofia", "Carlos", "Isabel"] },
  { grade: "Grade 5", sections: ["Luis", "Elena", "Diego"] },
  { grade: "Grade 6", sections: ["Laura", "Rafael", "Lucia"] },
  {
    grade: "Grade 7",
    sections: ["Exodus", "Genesis", "Isaiah", "Leviticus", "Proverbs", "Psalms"],
  },
  {
    grade: "Grade 8",
    sections: ["Aphrodite", "Athena", "Demeter", "Poseidon", "Themis", "Zeus"],
  },
  { grade: "Grade 9", sections: ["Abad", "Amorsolo", "Francisco", "Locsin", "Poe"] },
  { grade: "Grade 10", sections: ["Collegiality", "Honesty", "Humility", "Integrity", "Unity"] },
];

export function GradeSectionList() {
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
          GRADE SECTION LIST
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="grid grid-cols-2 gap-6">
          {gradeSections.map((gradeData) => (
            <div
              key={gradeData.grade}
              className="bg-white rounded-[14px] p-6 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-[#4a9d6f]" />
                  <h3>{gradeData.grade}</h3>
                </div>
                <div className="flex items-center gap-2 bg-[#f0f0f0] px-3 py-1 rounded-full">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {gradeData.sections.length}{" "}
                    {gradeData.sections.length === 1 ? "Section" : "Sections"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {gradeData.sections.map((section, index) => (
                  <div
                    key={section}
                    className="flex items-center gap-3 p-3 bg-[#f9f9f9] rounded-[10px] border border-[#e0e0e0] hover:bg-[#f0f0f0] transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-[#4a9d6f] text-white rounded-full flex-shrink-0">
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800">{section}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#e0e0e0]">
                <p className="text-sm text-gray-600">
                  Total Sections:{" "}
                  <span className="font-medium text-gray-800">
                    {gradeData.sections.length}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
