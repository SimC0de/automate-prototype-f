import { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

const initialSubjects = [
  { id: "SUB001", name: "Mathematics" },
  { id: "SUB002", name: "English" },
  { id: "SUB003", name: "Science" },
  { id: "SUB004", name: "Filipino" },
  { id: "SUB005", name: "Social Studies" },
  { id: "SUB006", name: "Physical Education" },
  { id: "SUB007", name: "Music" },
  { id: "SUB008", name: "Arts" },
  { id: "SUB009", name: "Computer Science" },
  { id: "SUB010", name: "Values Education" },
  { id: "SUB011", name: "Technology and Livelihood Education" },
];

export function SubjectList() {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [newSubjectName, setNewSubjectName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingSubject, setEditingSubject] = useState(null);

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (!newSubjectName.trim()) {
      toast.error("Please enter a subject name");
      return;
    }
    if (subjects.some((s) => s.name.toLowerCase() === newSubjectName.toLowerCase())) {
      toast.error("This subject already exists");
      return;
    }

    const newSubject = {
      id: `SUB${String(subjects.length + 1).padStart(3, "0")}`,
      name: newSubjectName.trim(),
    };

    setSubjects([...subjects, newSubject]);
    setNewSubjectName("");
    toast.success(`Subject "${newSubject.name}" added successfully!`);
  };

  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setNewSubjectName(subject.name);
  };

  const handleSaveEdit = () => {
    if (!editingSubject) return;
    if (!newSubjectName.trim()) {
      toast.error("Please enter a subject name");
      return;
    }
    if (
      subjects.some(
        (s) => s.id !== editingSubject.id && s.name.toLowerCase() === newSubjectName.toLowerCase()
      )
    ) {
      toast.error("This subject already exists");
      return;
    }

    setSubjects(
      subjects.map((s) => (s.id === editingSubject.id ? { ...s, name: newSubjectName.trim() } : s))
    );
    toast.success(`Subject updated successfully!`);
    setEditingSubject(null);
    setNewSubjectName("");
  };

  const handleCancelEdit = () => {
    setEditingSubject(null);
    setNewSubjectName("");
  };

  const handleDelete = (id) => {
    const subject = subjects.find((s) => s.id === id);
    if (subject && window.confirm(`Are you sure you want to delete "${subject.name}"?`)) {
      setSubjects(subjects.filter((s) => s.id !== id));
      toast.success(`Subject "${subject.name}" deleted successfully!`);
    }
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          SUBJECT LIST MANAGEMENT
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="max-w-6xl">
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e] mb-6">
            <h3 className="mb-6">{editingSubject ? "Edit Subject" : "Add New Subject"}</h3>

            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="block mb-2">Subject Name</label>
                <input
                  type="text"
                  placeholder="Enter subject name"
                  value={newSubjectName}
                  onChange={(e) => setNewSubjectName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (editingSubject) handleSaveEdit();
                      else handleAdd();
                    }
                  }}
                  className="w-full h-12 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              {editingSubject ? (
                <div className="flex gap-2">
                  <Button
                    onClick={handleSaveEdit}
                    className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9] h-12"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    className="bg-white border-[#5c5c5c] rounded-[12px] px-8 h-12"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleAdd}
                  className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9] h-12"
                >
                  Add Subject
                </Button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <div className="flex items-center justify-between mb-6">
              <h3>Subject List</h3>
              <div className="relative w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-10 pr-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>

            <div className="bg-[#d9d9d9] h-[40px] flex items-center px-4 mb-2">
              <div className="w-32">Subject ID</div>
              <div className="flex-1">Subject Name</div>
              <div className="w-40 text-center">Actions</div>
            </div>

            <div className="space-y-1 max-h-[500px] overflow-auto">
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject) => (
                  <div
                    key={subject.id}
                    className={`bg-white h-[60px] flex items-center px-4 border border-black ${
                      editingSubject?.id === subject.id ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="w-32">{subject.id}</div>
                    <div className="flex-1">{subject.name}</div>
                    <div className="w-40 flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(subject)}
                        className="p-2 rounded-lg transition-colors"
                        title="Edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(subject.id)}
                        className="p-2 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <span className="text-red-600">Delete</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-10 text-center text-gray-500">No subjects found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
