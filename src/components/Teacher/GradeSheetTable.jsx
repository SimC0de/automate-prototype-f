import { Search } from "lucide-react";

export default function GradeSheetTable() {
  const rows = Array(10).fill({
    id: "",
    name: "",
    grade: "",
  });

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      {/* Outer border */}
      <div
        aria-hidden
        className="absolute border border-[rgba(0,0,0,0.32)] inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_rgba(0,0,0,0.35)]"
      />

      {/* Header bar */}
      <div className="absolute bg-[#fefefe] h-[75px] rounded-t-[31px] inset-x-0 top-0">
        <div
          aria-hidden
          className="absolute border-[#adadad] border-[3px] border-solid inset-0 rounded-t-[31px]"
        />
        <p className="absolute left-[42px] top-[26px] font-medium">Grade Sheet</p>
      </div>

      {/* Main content area */}
      <div className="absolute top-[110px] left-[42px] right-[42px] bottom-[42px] overflow-auto">
        {/* Header info */}
        <div className="flex justify-between items-start mb-4">
          <div className="text-sm leading-relaxed">
            <p>
              NAME OF TEACHER:{" "}
              <span className="font-semibold">SIMONE ROY ABELLO</span>
            </p>
            <p>
              QY/QUARTER:{" "}
              <span className="font-semibold">1ST–4TH QUARTER, 2025–2026</span>
            </p>
            <p>
              SUBJECT: <span className="font-semibold">SCIENCE</span>
            </p>
            <p>
              GRADE SECTION/SCHEDULE:{" "}
              <span className="font-semibold">
                GRADE 1 – SECTION 1 / TTH 9:00AM–10:30AM
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search ID.number/StudentName"
              className="border border-[#5c5c5c] rounded-[8px] h-[36px] px-3 text-sm w-[300px]"
            />
            <Search className="text-[#5c5c5c]" size={20} />
          </div>
        </div>

        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto">
          <div className="min-w-[1200px] border border-[#5c5c5c] rounded-[14px] overflow-hidden bg-white shadow-[0px_4px_4px_#1e1e1e]">
            {/* Table Header */}
            <div className="grid grid-cols-[60px_130px_1fr_130px_repeat(4,90px)_110px_110px_120px] bg-[#d9d9d9] h-[50px] items-center text-center text-sm font-medium border-b border-[#5c5c5c]">
              <div>Count</div>
              <div>ID Number</div>
              <div>NAME OF STUDENT</div>
              <div>Grade/Section</div>
              <div>1STQ</div>
              <div>2NDQ</div>
              <div>3RDQ</div>
              <div>4THQ</div>
              <div>Final Grade</div>
              <div>Remarks</div>
              <div>Action</div>
            </div>

            {/* Table Rows */}
            {rows.map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[60px_130px_1fr_130px_repeat(4,90px)_110px_110px_120px] h-[48px] items-center text-center border-t border-[#5c5c5c] text-sm"
              >
                <div>{i + 1}</div>
                <div>—</div>
                <div className="text-left px-3">—</div>
                <div>—</div>
                <div>—</div>
                <div>—</div>
                <div>—</div>
                <div>—</div>
                <div>—</div>
                <div>—</div>
                <div className="flex justify-center gap-2">
                  <button className="bg-sky-400 hover:bg-sky-500 text-white text-xs px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-rose-400 hover:bg-rose-500 text-white text-xs px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
