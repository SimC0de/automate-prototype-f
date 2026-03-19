import { useMemo, useState } from "react";

export default function StudentAnnouncement() {

  const announcements = [
    {
      id: 1,
      teacher: "Simone Roy Abello",
      section: "Maria – Grade 1",
      subject: "English",
      title: "Reading Activity Tomorrow",
      message:
        "Please prepare your reading notebook and review pages 10–15.\n\nWe will have a short reading check tomorrow. Bring your materials and be ready for oral reading.",
      date: "2026-02-01",
      attachments: [{ name: "ReadingGuide.pdf", type: "file" }],
    },
    {
      id: 2,
      teacher: "Simone Roy Abello",
      section: "Sofia – Grade 4",
      subject: "Filipino",
      title: "Poetry Presentation Schedule Update",
      message:
        "Group poetry presentation will be moved to Friday instead of Wednesday.\n\nPlease coordinate with your groupmates and finalize your piece.",
      date: "2026-01-30",
      attachments: [],
    },
    {
      id: 3,
      teacher: "Simone Roy Abello",
      section: "All Sections",
      title: "No Classes on Monday",
      message:
        "There will be no classes on Monday due to a scheduled school maintenance activity.\n\nPlease wait for further announcements.",
      date: "2026-01-28",
      attachments: [{ name: "Memo.jpg", type: "image" }],
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const sorted = useMemo(
    () =>
      [...announcements].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      ),
    []
  );

  const activeAnnouncement = sorted.find(a => a.id === activeId);

  const snippet = (text) =>
    text.length > 120 ? text.slice(0, 120) + "..." : text;

  return (
    <div
      className="absolute backdrop-blur-[17.5px] bg-[rgba(255,255,255,0.41)]
      h-[calc(100%-138px)] left-[420px] top-[69px]
      w-[calc(100%-470px)] rounded-[31px]"
    >
      <div className="absolute inset-0 border border-black/30 rounded-[31px] shadow-md pointer-events-none" />

      <div className="absolute top-0 inset-x-0 h-[75px] bg-white rounded-t-[31px] border-b-2 border-gray-300">
        <p className="absolute left-[42px] top-[26px] font-medium">
          ANNOUNCEMENTS
        </p>
      </div>

      <div className="absolute top-[100px] left-[42px] right-[42px] bottom-[42px] overflow-auto">

        {!activeAnnouncement && (
          <div className="bg-white rounded-[20px] border border-gray-400 overflow-hidden">

            {sorted.map((a, i) => (
              <button
                key={a.id}
                onClick={() => setActiveId(a.id)}
                className={`w-full text-left p-5 hover:bg-[#f5f5f5] transition
                  ${i !== sorted.length - 1 ? "border-b border-gray-200" : ""}
                `}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <p className="font-semibold">
                      {a.title}
                    </p>

                    <p className="text-sm text-gray-600">
                      {a.teacher} • {a.subject}
                    </p>

                    <p className="text-sm text-gray-500">
                      {snippet(a.message)}
                    </p>
                  </div>

                  <div className="text-xs text-gray-500 whitespace-nowrap">
                    {new Date(a.date).toLocaleDateString()}
                  </div>
                </div>
              </button>
            ))}

            {sorted.length === 0 && (
              <div className="p-10 text-center text-gray-500">
                No announcements available.
              </div>
            )}
          </div>
        )}

        {activeAnnouncement && (
          <div className="bg-white rounded-[20px] border border-gray-400 shadow-sm p-8 space-y-6">

            <button
              onClick={() => setActiveId(null)}
              className="text-sm underline"
            >
              ← Back to announcements
            </button>

            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-[#f0f0f0] rounded-full">
                {activeAnnouncement.section}
              </span>
              <span className="px-3 py-1 bg-[#f0f0f0] rounded-full">
                {activeAnnouncement.subject}
              </span>
            </div>

            <h2 className="text-xl font-semibold">
              {activeAnnouncement.title}
            </h2>

            <p className="text-sm text-gray-600">
              Posted by {activeAnnouncement.teacher} •{" "}
              {new Date(activeAnnouncement.date).toLocaleDateString()}
            </p>

            <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
              {activeAnnouncement.message}
            </p>

            {activeAnnouncement.attachments.length > 0 && (
              <div className="pt-4 border-t border-gray-200">
                <p className="font-medium mb-3 text-sm">
                  Attachments
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {activeAnnouncement.attachments.map((file, i) => (
                    <div
                      key={i}
                      className="border border-gray-300 rounded-[12px] p-3 bg-[#f9f9f9] text-xs"
                    >
                      <div className="h-[110px] bg-gray-100 rounded mb-2 flex items-center justify-center">
                        {file.type === "image" ? "Image" : "File"}
                      </div>
                      <p className="truncate">{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
