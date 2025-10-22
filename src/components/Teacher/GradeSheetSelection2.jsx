import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { toast } from "sonner";

export function GradeSheetSelection2() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    address: "",
    guardianName: "",
    guardianContact: "",
    email: "",
    gradeLevel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Student registered successfully!");
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      address: "",
      guardianName: "",
      guardianContact: "",
      email: "",
      gradeLevel: "",
    });
  };

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
          GRADE SHEET
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <Label htmlFor="grade">Grade</Label>
                <select
                  id="grade"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  required
                  className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                </select>
              </div>

              <div>
                <Label htmlFor="section">Section</Label>
                <Input
                  id="section"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({ ...formData, middleName: e.target.value })
                  }
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="subject_handle">Subject Handle</Label>
                <select
                  id="subject_handle"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  required
                  className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
                >
                  <option value="Science">Science</option>
                  <option value="Math">Math</option>
                  <option value="Filipino">Filipino</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <Label htmlFor="birthDate">School Year</Label>
                <div className="flex items-center text-2xl">
                  <Input
                    id="section"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                    className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                  />
                  <p className="text-4xl">-</p>
                  <Input
                    id="section"
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                    className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                  />
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Button
                  type="submit"
                  className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
                >
                  Register Student
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
