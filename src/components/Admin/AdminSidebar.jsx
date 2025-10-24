import {
  Users,
  UserPlus,
  BookOpen,
  Calendar,
  FileText,
  Settings,
  GraduationCap,
  DoorOpen,
  UserCog,
  UserCheck,
  LayoutList,
  BookOpenCheck,
  LogOut,
} from "lucide-react";

export function AdminSidebar({ activeView, onViewChange, logout }) {
  const menuItems = [
    { id: "register", label: "Register Student", icon: UserPlus },
    { id: "add-to-class", label: "Add to Classroom", icon: Users },
    { id: "student-list", label: "Student List", icon: BookOpen },
    { id: "class-roster", label: "Class Rosters", icon: Calendar },
    { id: "grade-section-list", label: "Grade Section List", icon: LayoutList },
    { id: "register-teacher", label: "Register Teacher", icon: UserCog },
    { id: "teacher-list", label: "Teacher List", icon: UserCheck },
    { id: "teacher-assignment", label: "Teacher Assignment", icon: GraduationCap },
    { id: "subject-list", label: "Subject List", icon: BookOpenCheck },
    { id: "room-reservation", label: "Room Reservation", icon: DoorOpen },
    { id: "academic-records", label: "Academic Records", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="absolute left-0 top-0 h-full w-[372px]">
      <div className="absolute bg-[#ededed] h-full left-0 top-0 w-[372px]" />

      <div className="absolute bg-[#d9d9d9] h-[65px] left-[29px] rounded-[10px] top-[67px] w-[71px]" />

      <p className="absolute left-[116px] text-black text-nowrap top-[89px] whitespace-pre">
        Admin Portal
      </p>

      <p className="absolute left-[29px] text-black text-nowrap top-[188px] whitespace-pre">
        Student Management
      </p>

      <div className="absolute left-0 top-[220px] right-0 bottom-[120px] overflow-y-auto overflow-x-hidden">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <div
              key={item.id}
              className={`absolute content-stretch flex gap-[15px] items-center left-[42px] cursor-pointer transition-colors hover:opacity-70 ${
                isActive ? "opacity-100" : "opacity-60"
              }`}
              style={{ top: `${21 + index * 51}px` }}
              onClick={() => onViewChange(item.id)}
            >
              <div className="relative shrink-0 size-[24px]">
                <Icon className="w-full h-full text-[#474747]" />
              </div>
              <p className="relative shrink-0 text-[#474747] text-nowrap whitespace-pre">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] bottom-[40px]">
        <div className="relative shrink-0 size-[50px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 50 50"
          >
            <circle cx="25" cy="25" fill="#979797" r="25" />
          </svg>
        </div>
        <p className="relative shrink-0 text-black text-nowrap whitespace-pre">
          Admin User
        </p>
        <p className="absolute left-[10px] text-nowrap text-white top-[13px] whitespace-pre">
          AD
        </p>
        <button onClick={logout}>
          <LogOut className="absolute right-[-40px] w-6 h-6 text-[#474747]" />
        </button>
      </div>
    </div>
  );
}
