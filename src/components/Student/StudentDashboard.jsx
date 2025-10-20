import GlassPanel from "./GlassPanel";
const student = {
  id: "S006",
  firstName: "MARK RICHARD D.",
  lastName: "EUGENIO",
  gradeLevel: "Grade 5",
  section: "Section 1",
  studentMobile: "09364208655",
  parentMobile: "09364208655",
};

export default function StudentDashboard() {
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
        <div className="text-center mb-8">
          <p>
            Welcome{" "}
            <span className="font-medium">
              {student.lastName}, {student.firstName}
            </span>{" "}
            to your personal page!
          </p>
        </div>

        {/* Mobile numbers card */}
        <div className="mx-auto max-w-3xl border border-[#5c5c5c] rounded-[14px] overflow-hidden shadow-[0px_4px_4px_#1e1e1e]">
          <div className="grid grid-cols-2 bg-[#e9e9e9] border-b border-[#5c5c5c] text-center">
            <div className="py-3">Student’s Mobile Number</div>
            <div className="py-3">Parent’s Mobile Number</div>
          </div>
          <div className="grid grid-cols-2 text-center">
            <div className="py-4 border-r border-[#5c5c5c]">
              {student.studentMobile}
            </div>
            <div className="py-4">{student.parentMobile}</div>
          </div>

          <div className="border-t border-[#5c5c5c] p-4">
            <p className="text-sm">
              <span className="font-medium">Note:</span> CHANGE PASSWORD OF YOUR
              ACCOUNT. Click{" "}
              <a href="#" className="underline">
                here
              </a>
              .
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-10">
          Please note that every activity is monitored closely. For any problem
          in the system, contact System Administrator for details.
        </p>
      </div>
    </div>
  );
}
