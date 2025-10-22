import React from "react";

export default function ReportCard() {
  const learningAreas = [
    "Filipino",
    "English",
    "Mathematics",
    "Science",
    "Araling Panlipunan",
    "EPP/TLE",
    "MAPEH",
    "Music",
    "Arts",
    "Physical Education",
    "Health",
    "Edukasyon sa Pagpapakatao",
  ];

  const coreValues = [
    {
      core: "1. Maka-Diyos",
      behaviors: [
        "Expresses one’s spiritual beliefs while respecting the spiritual beliefs of others",
        "Shows adherence to ethical principles by upholding truth",
      ],
    },
    {
      core: "2. Makatao",
      behaviors: [
        "Is sensitive to individual, social, and cultural differences",
        "Demonstrates contributions toward solidarity",
      ],
    },
    {
      core: "3. Maka-Kalikasan",
      behaviors: [
        "Cares for the environment and uses resources wisely, judiciously and economically",
      ],
    },
    {
      core: "4. Makabansa",
      behaviors: [
        "Demonstrates pride in being a Filipino; exercises the rights and responsibilities of a Filipino citizen",
        "Demonstrates appropriate behavior in carrying out activities in the school, community, and country",
      ],
    },
  ];

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      {/* Outer border */}
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]"
      />

      {/* Header */}
      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div
          aria-hidden="true"
          className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]"
        />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre font-medium">
          Report Card
        </p>
      </div>

      {/* Main Content */}
      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="grid lg:grid-cols-2 gap-8 p-4">
          {/* LEFT PANEL — LEARNING PROGRESS */}
          <div className="border border-[#5c5c5c] rounded-[14px] bg-white shadow-[0px_4px_4px_#1e1e1e]">
            <h3 className="text-center mt-4 font-semibold text-sm tracking-wide">
              REPORT ON LEARNING PROGRESS AND ACHIEVEMENT
            </h3>

            {/* Header Row */}
            <div className="grid grid-cols-[1fr_repeat(6,minmax(70px,1fr))] bg-[#d9d9d9] mt-4 text-sm font-medium border-y border-[#5c5c5c]">
              <div className="py-2 px-3 text-left">LEARNING AREAS</div>
              <div className="text-center py-2">1</div>
              <div className="text-center py-2">2</div>
              <div className="text-center py-2">3</div>
              <div className="text-center py-2">4</div>
              <div className="text-center py-2">Final Grade</div>
              <div className="text-center py-2">Remarks</div>
            </div>

            {/* Subject Rows */}
            {learningAreas.map((subject, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_repeat(6,minmax(70px,1fr))] text-sm border-b border-[#5c5c5c] items-center"
              >
                <div className="px-3 py-2">{subject}</div>
                <div className="text-center opacity-50">—</div>
                <div className="text-center opacity-50">—</div>
                <div className="text-center opacity-50">—</div>
                <div className="text-center opacity-50">—</div>
                <div className="text-center opacity-50">—</div>
                <div className="text-center opacity-50">—</div>
              </div>
            ))}

            {/* General Average */}
            <div className="grid grid-cols-[1fr_repeat(6,minmax(70px,1fr))] text-sm border-t border-[#5c5c5c] bg-[#f7f7f7] font-medium">
              <div className="px-3 py-2">General Average</div>
              <div className="col-span-5"></div>
              <div className="text-center opacity-50 py-2">—</div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-6 p-4 text-xs">
              <div>
                <p className="font-semibold mb-1">Descriptors</p>
                <p>Outstanding</p>
                <p>Very Satisfactory</p>
                <p>Satisfactory</p>
                <p>Fairly Satisfactory</p>
                <p>Did Not Meet Expectations</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Grading Scale</p>
                <p>90–100</p>
                <p>85–89</p>
                <p>80–84</p>
                <p>75–79</p>
                <p>Below 75</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Remarks</p>
                <p>Passed</p>
                <p>Passed</p>
                <p>Passed</p>
                <p>Passed</p>
                <p>Failed</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — OBSERVED VALUES */}
          <div className="border border-[#5c5c5c] rounded-[14px] bg-white shadow-[0px_4px_4px_#1e1e1e]">
            <h3 className="text-center mt-4 font-semibold text-sm tracking-wide">
              REPORT ON LEARNER’S OBSERVED VALUES
            </h3>

            {/* Table Header */}
            <div className="grid grid-cols-[150px_1fr_repeat(4,70px)] bg-[#d9d9d9] mt-4 text-sm font-medium border-y border-[#5c5c5c]">
              <div className="py-2 px-3">Core Values</div>
              <div className="py-2 px-3">Behavior Statement</div>
              <div className="text-center py-2">1</div>
              <div className="text-center py-2">2</div>
              <div className="text-center py-2">3</div>
              <div className="text-center py-2">4</div>
            </div>

            {/* Core Values */}
            {coreValues.map((section, i) => (
              <div key={i} className="border-t border-[#5c5c5c]">
                {/* Core Value Header */}
                <div className="font-medium px-4 py-2 bg-[#f9f9f9] border-b border-gray-300">
                  {section.core}
                </div>
                {/* Behavior Rows */}
                {section.behaviors.map((text, j) => (
                  <div
                    key={j}
                    className="grid grid-cols-[150px_1fr_repeat(4,70px)] border-b border-[#5c5c5c] text-sm"
                  >
                    <div></div>
                    <div className="px-3 py-2 leading-snug break-words">
                      {text}
                    </div>
                    <div className="text-center opacity-50 py-2">—</div>
                    <div className="text-center opacity-50 py-2">—</div>
                    <div className="text-center opacity-50 py-2">—</div>
                    <div className="text-center opacity-50 py-2">—</div>
                  </div>
                ))}
              </div>
            ))}

            {/* Legend */}
            <div className="p-4 grid grid-cols-2 gap-6 text-xs border-t border-[#5c5c5c]">
              <div>
                <p className="font-semibold mb-1">Marking</p>
                <p>AO – Always Observed</p>
                <p>SO – Sometimes Observed</p>
                <p>RO – Rarely Observed</p>
                <p>NO – Not Observed</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Non-numerical Rating</p>
                <p>AO</p>
                <p>SO</p>
                <p>RO</p>
                <p>NO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
