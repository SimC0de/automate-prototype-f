export default function GradeSheetSelection() {
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
        <div className="border border-[#5c5c5c] rounded-[14px] shadow-[0px_4px_4px_#1e1e1e] p-8 max-w-[900px] mx-auto bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <label className="font-medium">Grade</label>
              <select className="w-full mt-2 border border-[#5c5c5c] rounded-[6px] h-[36px] px-2">
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
              </select>
            </div>

            <div>
              <label className="font-medium">Section</label>
              <input
                type="text"
                className="w-full mt-2 border border-[#5c5c5c] rounded-[6px] h-[36px] px-2"
                placeholder="Enter Section"
              />
            </div>

            <div>
              <label className="font-medium">Subject handle</label>
              <select className="w-full mt-2 border border-[#5c5c5c] rounded-[6px] h-[36px] px-2">
                <option>Science</option>
                <option>Math</option>
                <option>English</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-[auto_auto_auto] gap-4 items-center mt-8">
            <label className="font-medium">School Year</label>
            <input
              type="text"
              defaultValue="2025"
              className="border border-[#5c5c5c] rounded-[6px] h-[36px] px-3 w-[100px] text-center"
            />
            <span className="mx-1 font-medium">-</span>
            <input
              type="text"
              defaultValue="2026"
              className="border border-[#5c5c5c] rounded-[6px] h-[36px] px-3 w-[100px] text-center"
            />
          </div>

          <div className="mt-8 text-right">
            <button className="bg-[#e9e9e9] hover:bg-[#d9d9d9] border border-[#5c5c5c] px-6 py-2 rounded-[8px]">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

