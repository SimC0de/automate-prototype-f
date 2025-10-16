import { useState } from "react";
import { Search, Edit, Trash2, Eye, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";

const mockTeachers = [
  {
    id: "T001",
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "0917-111-1111",
    educationalBackground: "BSEd",
    major: "Mathematics",
    subjects: ["Mathematics", "Computer Science"],
    gradeLevels: ["Grade 8", "Grade 9"],
    isAdviser: true,
    adviserOf: "Grade 9 - Einstein",
  },
  {
    id: "T002",
    name: "Maria Santos",
    email: "maria@example.com",
    phone: "0917-222-2222",
    educationalBackground: "AB",
    major: "Filipino",
    subjects: ["Filipino"],
    gradeLevels: ["Grade 8"],
    isAdviser: false,
    adviserOf: "",
  },
  {
    id: "T003",
    name: "Jose Reyes",
    email: "jose@example.com",
    phone: "0917-333-3333",
    educationalBackground: "BSEd",
    major: "Science",
    subjects: ["Science"],
    gradeLevels: ["Grade 9", "Grade 10"],
    isAdviser: false,
    adviserOf: "",
  },
  {
    id: "T004",
    name: "Ana Garcia",
    email: "ana@example.com",
    phone: "0917-444-4444",
    educationalBackground: "BSEd",
    major: "Values Education",
    subjects: ["Values Education"],
    gradeLevels: ["Grade 8", "Grade 9", "Grade 10"],
    isAdviser: false,
    adviserOf: "",
  },
];

const subjectOptions = [
  "Mathematics",
  "English",
  "Science",
  "Filipino",
  "Social Studies",
  "Physical Education",
  "Music",
  "Arts",
  "Computer Science",
  "Values Education",
  "Technology and Livelihood Education",
];

const gradeLevelOptions = [
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

export function TeacherList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teachers, setTeachers] = useState(mockTeachers);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (teacher) => {
    setEditingTeacher({ ...teacher });
    setShowEditDialog(true);
  };

  const handleSaveEdit = () => {
    if (!editingTeacher) return;

    if (!editingTeacher.name.trim()) return toast.error("Name is required");
    if (editingTeacher.subjects.length === 0) {
      toast.error("Please select at least one subject");
      return;
    }
    if (editingTeacher.gradeLevels.length === 0) {
      toast.error("Please select at least one grade level");
      return;
    }

    setTeachers((prev) =>
      prev.map((t) => (t.id === editingTeacher.id ? { ...editingTeacher } : t))
    );
    toast.success("Teacher information updated successfully!");
    setShowEditDialog(false);
    setEditingTeacher(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers((prev) => prev.filter((t) => t.id !== id));
      toast.success("Teacher removed successfully");
    }
  };

  const handleView = (teacher) => {
    toast.info(`Viewing details for ${teacher.name}`);
  };

  const toggleSubject = (subject) => {
    if (!editingTeacher) return;
    setEditingTeacher((prev) => {
      const on = prev.subjects.includes(subject);
      return { ...prev, subjects: on ? prev.subjects.filter((s) => s !== subject) : [...prev.subjects, subject] };
    });
  };

  const toggleGradeLevel = (grade) => {
    if (!editingTeacher) return;
    setEditingTeacher((prev) => {
      const on = prev.gradeLevels.includes(grade);
      return {
        ...prev,
        gradeLevels: on ? prev.gradeLevels.filter((g) => g !== grade) : [...prev.gradeLevels, grade],
      };
    });
  };

  const removeSubject = (subject) => {
    if (!editingTeacher) return;
    setEditingTeacher((prev) => ({ ...prev, subjects: prev.subjects.filter((s) => s !== subject) }));
  };

  const removeGradeLevel = (grade) => {
    if (!editingTeacher) return;
    setEditingTeacher((prev) => ({
      ...prev,
      gradeLevels: prev.gradeLevels.filter((g) => g !== grade),
    }));
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          TEACHER LIST
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-10 pr-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
              />
            </div>
          </div>

          <div className="bg-[#d9d9d9] h-[50px] flex items-center px-4">
            <div className="w-24">Teacher ID</div>
            <div className="flex-1">Full Name</div>
            <div className="w-48">Email</div>
            <div className="w-40">Phone</div>
            <div className="w-48">Major</div>
            <div className="w-32 text-center">Role</div>
            <div className="w-32 text-center">Actions</div>
          </div>

          <div className="space-y-0">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="min-h-[70px] flex items-center px-4 border border-black bg-white"
              >
                <div className="w-24">{teacher.id}</div>
                <div className="flex-1">{teacher.name}</div>
                <div className="w-48 text-sm">{teacher.email}</div>
                <div className="w-40">{teacher.phone}</div>
                <div className="w-48 text-sm">{teacher.major}</div>
                <div className="w-32 flex justify-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      teacher.isAdviser ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {teacher.isAdviser ? "Adviser" : "Subject Teacher"}
                  </span>
                </div>
                <div className="w-32 flex justify-center gap-2">
                  <button
                    onClick={() => handleView(teacher)}
                    className="p-2 rounded-lg transition-colors"
                    title="View"
                  >
                    <Eye className="w-5 h-5 text-blue-600" />
                  </button>
                  <button
                    onClick={() => handleEdit(teacher)}
                    className="p-2 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-5 h-5 text-green-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(teacher.id)}
                    className="p-2 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredTeachers.length} of {teachers.length} teachers
            </p>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      {showEditDialog && editingTeacher && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-8 max-w-4xl max-h-[90vh] overflow-auto m-4 border border-[#5c5c5c] w-full">
            <div className="flex justify-between items-center mb-6">
              <h2>Edit Teacher Information</h2>
              <button
                onClick={() => {
                  setShowEditDialog(false);
                  setEditingTeacher(null);
                }}
                className="p-2 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-[#f9f9f9] rounded-[14px] p-6 border border-[#d0d0d0]">
                <h3 className="mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={editingTeacher.name}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, name: e.target.value })
                      }
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={editingTeacher.email}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, email: e.target.value })
                      }
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={editingTeacher.phone}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, phone: e.target.value })
                      }
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] rounded-[14px] p-6 border border-[#d0d0d0]">
                <h3 className="mb-4">Educational Qualifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Educational Background</Label>
                    <Input
                      value={editingTeacher.educationalBackground}
                      onChange={(e) =>
                        setEditingTeacher({
                          ...editingTeacher,
                          educationalBackground: e.target.value,
                        })
                      }
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                  <div>
                    <Label>Major/Specialization</Label>
                    <Input
                      value={editingTeacher.major}
                      onChange={(e) =>
                        setEditingTeacher({ ...editingTeacher, major: e.target.value })
                      }
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] rounded-[14px] p-6 border border-[#d0d0d0]">
                <h3 className="mb-4">Teaching Assignment</h3>

                <div className="mb-6">
                  <Label>Subjects to Teach</Label>

                  {editingTeacher.subjects.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {editingTeacher.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center gap-2 bg-[#4a9d6f] text-white px-3 py-1 rounded-full"
                        >
                          <span>{subject}</span>
                          <button
                            type="button"
                            onClick={() => removeSubject(subject)}
                            className="hover-white/20 rounded-full p-0.5"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {subjectOptions.map((subject) => (
                      <label
                        key={subject}
                        className="flex items-center gap-2 p-2 bg-white rounded-[10px] cursor-pointer"
                      >
                        <Checkbox
                          id={`edit-subject-${subject}`}
                          checked={editingTeacher.subjects.includes(subject)}
                          onCheckedChange={() => toggleSubject(subject)}
                        />
                        <span className="text-sm flex-1">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <Label>Grade Levels to Teach</Label>

                  {editingTeacher.gradeLevels.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {editingTeacher.gradeLevels.map((grade) => (
                        <div
                          key={grade}
                          className="flex items-center gap-2 bg-[#4a9d6f] text-white px-3 py-1 rounded-full"
                        >
                          <span>{grade}</span>
                          <button
                            type="button"
                            onClick={() => removeGradeLevel(grade)}
                            className="hover-white/20 rounded-full p-0.5"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {gradeLevelOptions.map((grade) => (
                      <label
                        key={grade}
                        className="flex items-center gap-2 p-2 bg-white rounded-[10px] cursor-pointer"
                      >
                        <Checkbox
                          id={`edit-grade-${grade}`}
                          checked={editingTeacher.gradeLevels.includes(grade)}
                          onCheckedChange={() => toggleGradeLevel(grade)}
                        />
                        <span className="text-sm flex-1">{grade}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <Label>Role</Label>
                  <div className="mt-3 flex items-center gap-2">
                    <Checkbox
                      id="isAdviser"
                      checked={editingTeacher.isAdviser}
                      onCheckedChange={(val) =>
                        setEditingTeacher((prev) => ({ ...prev, isAdviser: Boolean(val) }))
                      }
                    />
                    <span>Adviser</span>
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="adviserOf">Adviser Of (optional)</Label>
                    <Input
                      id="adviserOf"
                      value={editingTeacher.adviserOf || ""}
                      onChange={(e) =>
                        setEditingTeacher((prev) => ({ ...prev, adviserOf: e.target.value }))
                      }
                      placeholder="e.g., Grade 9 - Einstein"
                      className="mt-2 bg-white border-[#5c5c5c] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  onClick={handleSaveEdit}
                  className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
                >
                  Save Changes
                </Button>
                <Button
                  onClick={() => {
                    setShowEditDialog(false);
                    setEditingTeacher(null);
                  }}
                  className="bg-white border-[#5c5c5c] rounded-[12px] px-8"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
