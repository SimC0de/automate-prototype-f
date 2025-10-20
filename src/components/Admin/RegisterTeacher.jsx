import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { X } from "lucide-react";

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
];

const sectionsByGrade = {
  "Grade 7": ["Exodus", "Genesis", "Isaiah", "Leviticus", "Proverbs", "Psalms"],
  "Grade 8": ["Aphrodite", "Athena", "Demeter", "Poseidon", "Themis", "Zeus"],
  "Grade 9": ["Abad", "Amorsolo", "Francisco", "Locsin", "Poe"],
  "Grade 10": ["Collegiality", "Honesty", "Humility", "Integrity", "Unity"],
};

export function RegisterTeacher() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    educationalBackground: "",
    major: "",
    isAdviser: false,
    adviserSection: "",
  });

  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedGradeLevels, setSelectedGradeLevels] = useState([]);

  const canBeAdviser = selectedGradeLevels.length > 0;
  const hasSecondaryGrades = selectedGradeLevels.some((g) =>
    ["Grade 7", "Grade 8", "Grade 9", "Grade 10"].includes(g)
  );

  const availableSections = selectedGradeLevels
    .filter((g) => ["Grade 7", "Grade 8", "Grade 9", "Grade 10"].includes(g))
    .flatMap((g) => (sectionsByGrade[g] || []).map((s) => `${g} - ${s}`));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSubjects.length === 0) {
      toast.error("Please select at least one subject");
      return;
    }
    if (selectedGradeLevels.length === 0) {
      toast.error("Please select at least one grade level");
      return;
    }
    if (formData.isAdviser && hasSecondaryGrades && !formData.adviserSection) {
      toast.error("Please select an adviser section for Grade 7-10");
      return;
    }

    toast.success("Teacher registered successfully!");

    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      address: "",
      phone: "",
      email: "",
      educationalBackground: "",
      major: "",
      isAdviser: false,
      adviserSection: "",
    });
    setSelectedSubjects([]);
    setSelectedGradeLevels([]);
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]
    );
  };

  const toggleGradeLevel = (grade) => {
    setSelectedGradeLevels((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]
    );
  };

  const removeSubject = (subject) => {
    setSelectedSubjects((prev) => prev.filter((s) => s !== subject));
  };

  const removeGradeLevel = (grade) => {
    setSelectedGradeLevels((prev) => prev.filter((g) => g !== grade));
    if (formData.adviserSection && formData.adviserSection.startsWith(grade)) {
      setFormData((d) => ({ ...d, adviserSection: "" }));
    }
  };

  return (
    <div className="absolute backdrop-blur-[17.5px] backdrop-filter bg-[rgba(255,255,255,0.41)] h-[calc(100%-138px)] left-[420px] rounded-[31px] top-[69px] w-[calc(100%-470px)]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          TEACHER REGISTRATION
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl">
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <h3 className="mb-6">Personal Information</h3>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="birthDate">Date of Birth</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                  className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <h3 className="mb-6">Educational Qualifications</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="educationalBackground">Degree/Educational Background</Label>
                <Input
                  id="educationalBackground"
                  placeholder="e.g., Bachelor of Science in Education"
                  value={formData.educationalBackground}
                  onChange={(e) =>
                    setFormData({ ...formData, educationalBackground: e.target.value })
                  }
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="major">Major/Specialization</Label>
                <Input
                  id="major"
                  placeholder="e.g., Major in Mathematics"
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <h3 className="mb-6">Teaching Assignment</h3>

            <div className="mb-6">
              <Label>Subjects to Teach (Select multiple)</Label>

              {selectedSubjects.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  {selectedSubjects.map((subject) => (
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

              <div className="grid grid-cols-3 gap-3 mt-3">
                {subjectOptions.map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center gap-2 p-3 bg-[#f0f0f0] rounded-[10px] cursor-pointer"
                  >
                    <Checkbox
                      id={`subject-${subject}`}
                      checked={selectedSubjects.includes(subject)}
                      onCheckedChange={() => toggleSubject(subject)}
                    />
                    <span className="flex-1">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Label>Grade Levels to Teach (Select multiple)</Label>

              {selectedGradeLevels.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  {selectedGradeLevels.map((grade) => (
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

              <div className="grid grid-cols-4 gap-3 mt-3">
                {gradeLevelOptions.map((grade) => (
                  <label
                    key={grade}
                    className="flex items-center gap-2 p-3 bg-[#f0f0f0] rounded-[10px] cursor-pointer"
                  >
                    <Checkbox
                      id={`grade-${grade}`}
                      checked={selectedGradeLevels.includes(grade)}
                      onCheckedChange={() => toggleGradeLevel(grade)}
                    />
                    <span className="flex-1">{grade}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#f9f9f9] rounded-[10px] border border-[#d0d0d0]">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="isAdviser"
                  checked={formData.isAdviser}
                  disabled={!canBeAdviser}
                  onCheckedChange={(val) =>
                    setFormData((d) => ({ ...d, isAdviser: Boolean(val) }))
                  }
                />
                <Label htmlFor="isAdviser" className={!canBeAdviser ? "opacity-50" : ""}>
                  Assign as Adviser
                </Label>
              </div>

              <div className="mt-4">
                <Label htmlFor="adviserSection">Adviser Section (Grade 7-10)</Label>
                <select
                  id="adviserSection"
                  value={formData.adviserSection}
                  onChange={(e) => setFormData({ ...formData, adviserSection: e.target.value })}
                  disabled={!formData.isAdviser || !hasSecondaryGrades}
                  className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px] disabled:opacity-50"
                >
                  <option value="">Select Section</option>
                  {availableSections.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
            >
              Register Teacher
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
