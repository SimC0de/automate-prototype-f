export default function TeacherDashboard() {
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
          TEACHER DASHBOARD
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <p className="text-center font-medium text-lg mb-6">
          Welcome <span className="font-bold">ABELLO SIMONE ROY</span> to your personal page!
        </p>

        <div className="mx-auto border border-[#5c5c5c] rounded-[14px] overflow-hidden w-[650px]">
          <div className="bg-[#e9e9e9] text-center font-medium py-3 border-b border-[#5c5c5c]">
            Teacher’s Mobile Number
          </div>
          <div className="text-center py-4 border-b border-[#5c5c5c]">
            09364208655
          </div>
          <div className="py-3 px-4 text-sm">
            <span className="font-semibold">Note:</span> CHANGE PASSWORD OF YOUR ACCOUNT.{" "}
            <a href="#" className="text-blue-600 underline">Click here.</a>
          </div>
        </div>

        <p className="mx-auto mt-6 text-sm text-center text-[#5c5c5c] max-w-[600px]">
          Please note that every activity is monitored closely. For any problem in the system, contact
          System Administrator for details.
        </p>
      </div>
    </div>
  );
}
