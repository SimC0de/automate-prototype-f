import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export default function TeacherAnnouncement() {
  /* -------------------- DATA -------------------- */

  const sectionGradeOptions = [
    { id: "maria-1", label: "Maria", grade: 1 },
    { id: "rosa-2", label: "Rosa", grade: 2 },
    { id: "pedro-3", label: "Pedro", grade: 3 },
    { id: "sofia-4", label: "Sofia", grade: 4 },
  ];

  const sectionSubjectsMap = {
    "maria-1": ["english"],
    "rosa-2": ["math"],
    "pedro-3": ["science"],
    "sofia-4": ["english", "filipino"],
  };

  const subjectLabels = {
    english: "English",
    math: "Math",
    filipino: "Filipino",
    science: "Science",
  };

  const ALL_SECTIONS_ID = "all-sections";

  /* -------------------- STATE -------------------- */

  const [selectedSections, setSelectedSections] = useState([]);
  const [selectedSubjectsBySection, setSelectedSubjectsBySection] = useState(
    {}
  );
  const [toggleAllSections, setToggleAllSections] = useState(false);
  const [toggleAllSubjects, setToggleAllSubjects] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  /* -------------------- LOGIC -------------------- */

  const toggleSection = (id) => {
    if (id === ALL_SECTIONS_ID) {
      const allIds = sectionGradeOptions.map((s) => s.id);
      const isAllSelected = selectedSections.length === allIds.length;

      setSelectedSections(isAllSelected ? [] : allIds);
      setSelectedSubjectsBySection({});
      return;
    }

    setSelectedSections((prev) => {
      const next = prev.includes(id)
        ? prev.filter((v) => v !== id)
        : [...prev, id];

      setSelectedSubjectsBySection((prevSubs) => {
        const copy = { ...prevSubs };
        if (!next.includes(id)) delete copy[id];
        return copy;
      });

      return next;
    });
  };

  const toggleSubject = (sectionId, subjectId) => {
    setSelectedSubjectsBySection((prev) => {
      const current = prev[sectionId] || [];

      const next = current.includes(subjectId)
        ? current.filter((s) => s !== subjectId)
        : [...current, subjectId];

      return { ...prev, [sectionId]: next };
    });
  };

  const clearAllSubjects = () => {
    setSelectedSubjectsBySection({});
  };

  /* -------------------- FILE HANDLING -------------------- */

  const handleFiles = (files) => {
    const incoming = Array.from(files);

    setAttachments((prev) => {
      const existingNames = prev.map((f) => f.name);
      const filtered = incoming.filter((f) => !existingNames.includes(f.name));
      return [...prev, ...filtered];
    });
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  /* -------------------- UI -------------------- */

  return (
    <div
      className="absolute backdrop-blur-[17.5px] bg-[rgba(255,255,255,0.41)]
      h-[calc(100%-138px)] left-[420px] top-[69px]
      w-[calc(100%-470px)] rounded-[31px]"
    >
      <div className="absolute inset-0 border border-black/30 rounded-[31px] shadow-md pointer-events-none" />

      {/* Header */}
      <div className="absolute top-0 inset-x-0 h-[75px] bg-white rounded-t-[31px] border-b-2 border-gray-300">
        <p className="absolute left-[42px] top-[26px] font-medium">
          ANNOUNCEMENT
        </p>
      </div>

      {/* Content */}
      <div className="absolute top-[100px] left-[42px] right-[42px] bottom-[42px] overflow-auto">
        <div className="bg-white rounded-[20px] border border-gray-400 p-8 space-y-10">
          {/* SECTION & GRADE */}
          <div className="space-y-3">
            <div className="flex items-center">
              <label className="text-lg font-medium">Section & Grade:</label>
              <div className="pl-4">
                <label className="flex items-center gap-2 px-3 py-1 bg-[#f0f0f0] rounded-[10px] cursor-pointer">
                  <Checkbox
                    id="all-sections"
                    onCheckedChange={() => [
                      toggleSection(ALL_SECTIONS_ID),
                      setToggleAllSections(!toggleAllSections),
                    ]}
                  />
                  <span className="flex-1 font-medium">All Sections</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {sectionGradeOptions.map((opt) => (
                <label
                  className={`flex items-center gap-2 p-3 bg-[#f0f0f0] rounded-[10px] cursor-pointer ${
                    toggleAllSections ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  key={opt.id}
                >
                  <Checkbox
                    id={opt.id}
                    onCheckedChange={() => toggleSection(opt.id)}
                    checked={selectedSections.includes(opt.id)}
                    className={`${
                      selectedSections.includes(opt.id)
                        ? "bg-[#000000] text-white"
                        : "bg-[#f0f0f0]"
                    }`}
                    disabled={toggleAllSections}
                  />
                  <span className="flex-1 font-medium">
                    {opt.label} – Grade {opt.grade}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* SUBJECTS */}
          {selectedSections.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center">
                <label className="text-lg font-medium">Subjects:</label>
                <div className="pl-4">
                  <label className="flex items-center gap-2 px-3 py-1 bg-[#f0f0f0] rounded-[10px] cursor-pointer">
                    <Checkbox
                      id="all-sections"
                      onCheckedChange={() => [
                        clearAllSubjects(),
                        setToggleAllSubjects(!toggleAllSubjects),
                      ]}
                    />
                    <span className="flex-1 font-medium">No Subject</span>
                  </label>
                </div>
              </div>

              {/* PER SECTION SUBJECTS */}
              <div className="grid grid-cols-3 gap-2">
                {selectedSections.map((sectionId) => {
                  const section = sectionGradeOptions.find(
                    (s) => s.id === sectionId
                  );
                  const allowedSubjects = sectionSubjectsMap[sectionId] || [];
                  const selected = selectedSubjectsBySection[sectionId] || [];

                  return (
                    <div
                      key={sectionId}
                      className="border border-gray-300 rounded-[14px] p-4 space-y-3"
                    >
                      <p className="font-medium text-sm">
                        {section.label} – Grade {section.grade}
                      </p>

                      <div className="grid gap-3">
                        {allowedSubjects.map((subj) => (
                          <label
                            className={`flex items-center gap-2 p-3 bg-[#f0f0f0] rounded-[10px] cursor-pointer ${
                              toggleAllSubjects
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            key={subj}
                          >
                            <Checkbox
                              id={`${sectionId}-${subj}`}
                              checked={toggleAllSubjects || selected.includes(subj)}
                              onCheckedChange={() =>
                                toggleSubject(sectionId, subj)
                              }
                              className={`${
                                toggleAllSubjects
                                  ? "bg-[#000000] text-white"
                                  : "bg-[#f0f0f0]"
                              }`}
                              disabled={toggleAllSubjects}
                            />
                            <span className="flex-1">
                              {subjectLabels[subj]}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TITLE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <input className="w-full h-[42px] px-4 border border-gray-400 rounded-[10px]" />
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 border border-gray-400 rounded-[10px] resize-none"
            />
          </div>

          {/* ATTACHMENTS */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Attachments</label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center
                border-2 border-dashed rounded-[14px] p-6
                transition cursor-pointer
                ${
                  isDragging
                    ? "border-[#4a9d6f] bg-[#e9f5ef]"
                    : "border-gray-400 bg-white"
                }`}
            >
              <p className="text-sm font-medium">
                Drag & drop files here or click to upload
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Images, PDF, DOCX, PPTX (multiple allowed)
              </p>

              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="file-upload"
                className="mt-3 underline cursor-pointer text-sm"
              >
                Browse files
              </label>
            </div>

            {/* PREVIEWS */}
            {attachments.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {attachments.map((file, index) => {
                  const isImage = file.type.startsWith("image/");
                  const previewUrl = isImage ? URL.createObjectURL(file) : null;

                  return (
                    <div
                      key={index}
                      className="relative border border-gray-300 rounded-[12px] p-3 bg-[#f9f9f9]"
                    >
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute top-2 right-2 text-xs text-red-600"
                      >
                        ✕
                      </button>

                      {isImage ? (
                        <img
                          src={previewUrl}
                          alt={file.name}
                          className="w-full h-[120px] object-cover rounded-[8px]"
                        />
                      ) : (
                        <div className="h-[120px] flex items-center justify-center text-xs text-gray-600 text-center px-2">
                          {file.name}
                        </div>
                      )}

                      <p className="mt-2 text-xs truncate">{file.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
