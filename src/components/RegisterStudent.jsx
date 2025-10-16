import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function RegisterStudent() {
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
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.32)] border-solid inset-0 pointer-events-none rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)]" />

      <div className="absolute bg-[#fefefe] h-[75px] left-0 rounded-t-[31px] top-0 right-0">
        <div aria-hidden="true" className="absolute border-[#adadad] border-[3px] border-solid inset-0 pointer-events-none rounded-t-[31px]" />
        <p className="absolute left-[42px] text-black text-nowrap top-[26px] whitespace-pre">
          STUDENT REGISTRATION
        </p>
      </div>

      <div className="absolute left-[42px] right-[42px] top-[100px] bottom-[42px] overflow-auto">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
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

            <div className="mt-6">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
              />
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <h3 className="mb-6">Guardian Information</h3>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="guardianName">Guardian Name</Label>
                <Input
                  id="guardianName"
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>

              <div>
                <Label htmlFor="guardianContact">Guardian Contact</Label>
                <Input
                  id="guardianContact"
                  value={formData.guardianContact}
                  onChange={(e) => setFormData({ ...formData, guardianContact: e.target.value })}
                  required
                  className="mt-2 bg-[#f0f0f0] border-[#5c5c5c] rounded-[10px]"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] p-8 border border-[#5c5c5c] shadow-[0px_4px_4px_0px_#1e1e1e]">
            <h3 className="mb-6">Academic Information</h3>

            <div>
              <Label htmlFor="gradeLevel">Grade Level</Label>
              <select
                id="gradeLevel"
                value={formData.gradeLevel}
                onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                required
                className="mt-2 w-full h-10 px-3 bg-[#f0f0f0] border border-[#5c5c5c] rounded-[10px]"
              >
                <option value="">Select Grade Level</option>
                {Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`).map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#ebeaea] text-black border-[#5c5c5c] rounded-[12px] px-8 hover:bg-[#d9d9d9]"
            >
              Register Student
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
