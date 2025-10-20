import GlassPanel from "./GlassPanel";

const enrolledSubjects = [
  {
    yearSection: "Grade 5 - Section 1",
    subject: "Filipino",
    teacher: "Sir. Simone Roy Abello",
    status: "Enrolled",
  },
  {
    yearSection: "Grade 5 - Section 1",
    subject: "English",
    teacher: "Maam. Queen Dapo Pedro",
    status: "Enrolled",
  },
  {
    yearSection: "Grade 5 - Section 1",
    subject: "Mathematics",
    teacher: "Sir. Mel Moses Seeping",
    status: "Enrolled",
  },
  {
    yearSection: "Grade 5 - Section 1",
    subject: "Araling Panlipunan",
    teacher: "Sir. Jerwin D. Rizal",
    status: "Enrolled",
  },
  {
    yearSection: "Grade 5 - Section 1",
    subject: "Science",
    teacher: "Maam. Carlito Delacruz",
    status: "Enrolled",
  },
  {
    yearSection: "Grade 5 - Section 1",
    subject: "EPP/TLE",
    teacher: "Sir. Kayatano Domingo",
    status: "Enrolled",
  },
];

export default function SubjectEnrolled() {
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
          STUDENT DASHBOARD
        </p>
      </div>
      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="mb-4">
          <p className="text-sm">
            ENROLLED:{" "}
            <span className="font-medium">2025–2026 – 1ST QUARTER</span>
          </p>
          <p className="text-xs text-gray-600">
            DATE OFFICIALLY ENROLLED: 06/30/2025
          </p>
        </div>

        <div className="border border-[#5c5c5c] rounded-[14px] overflow-hidden shadow-[0px_4px_4px_#1e1e1e]">
          <div className="grid grid-cols-4 bg-[#d9d9d9] h-[50px] items-center px-4">
            <div>Year Level/Section</div>
            <div>Subject</div>
            <div>Teacher’s Name</div>
            <div>Status</div>
          </div>

          {enrolledSubjects.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 border-t border-black bg-white h-[60px] items-center px-4"
            >
              <div>{row.yearSection}</div>
              <div>{row.subject}</div>
              <div>{row.teacher}</div>
              <div className="text-green-700">Enrolled</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
