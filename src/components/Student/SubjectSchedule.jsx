import GlassPanel from "./GlassPanel";

const subjectSchedule = [
  { year: "Grade 5", name: "Filipino", sched: "MW 7:30AM–8:30AM" },
  { year: "Grade 5", name: "English", sched: "MW 8:30AM–10:30AM" },
  { year: "Grade 5", name: "Mathematics", sched: "TTH 7:30AM–9:00AM" },
  { year: "Grade 5", name: "Araling Panlipunan", sched: "MW 10:30AM–11:30AM" },
  { year: "Grade 5", name: "Science", sched: "TTH 9:00AM–10:30AM" },
  { year: "Grade 5", name: "EPP/TLE", sched: "F 8:30AM–10:00AM" },
];

export default function SubjectSchedule() {
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
          SUBJECT SCHEDULE
        </p>
      </div>
      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="border border-[#5c5c5c] rounded-[14px] overflow-hidden shadow-[0px_4px_4px_#1e1e1e]">
          <div className="grid grid-cols-3 bg-[#d9d9d9] h-[50px] items-center px-4">
            <div>Year Level</div>
            <div>Subject Name</div>
            <div>Schedule</div>
          </div>

          {subjectSchedule.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-t border-black bg-white h-[60px] items-center px-4"
            >
              <div>{row.year}</div>
              <div>{row.name}</div>
              <div>{row.sched}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
