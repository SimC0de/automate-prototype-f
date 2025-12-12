import React, { useState } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function AdminSidebar({ activeView, onViewChange, logout }) {
  // Define groups and their items
  const groups = [
    {
      id: "students",
      title: "Students",
      items: [
        { id: "register", label: "Register Student", icon: UserPlus },
        { id: "add-to-class", label: "Add to Classroom", icon: Users },
        { id: "student-list", label: "Student List", icon: BookOpen },
        { id: "academic-records", label: "Academic Records", icon: FileText },
      ],
    },
    {
      id: "classes",
      title: "Class Management",
      items: [
        { id: "class-roster", label: "Class Rosters", icon: Calendar },
        { id: "grade-section-list", label: "Grade Section List", icon: LayoutList },
      ],
    },
    {
      id: "teachers",
      title: "Teachers",
      items: [
        { id: "register-teacher", label: "Register Teacher", icon: UserCog },
        { id: "teacher-list", label: "Teacher List", icon: UserCheck },
        { id: "teacher-assignment", label: "Teacher Assignment", icon: GraduationCap },
      ],
    },
    {
      id: "subjects",
      title: "Subjects & Curriculum",
      items: [{ id: "subject-list", label: "Subject List", icon: BookOpenCheck }],
    },
    {
      id: "facilities",
      title: "Facilities",
      items: [{ id: "room-reservation", label: "Room Reservation", icon: DoorOpen }],
    },
    {
      id: "system",
      title: "System",
      items: [{ id: "settings", label: "Settings", icon: Settings }],
    },
  ];

  // track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState(() =>
    // default: expand the first group
    new Set(["students"])
  );

  const toggleGroup = (groupId) => {
    setExpandedGroups((prev) => {
      const next = new Set(Array.from(prev));
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  };

  const isItemActive = (id) => activeView === id;

  return (
    <div className="absolute left-0 top-0 h-full w-[372px]">
      <div className="absolute bg-[#ededed] h-full left-0 top-0 w-[372px]" />

      <div className="absolute bg-[#d9d9d9] h-[65px] left-[29px] rounded-[10px] top-[67px] w-[71px]" />

      <p className="absolute left-[116px] text-black text-nowrap top-[89px] whitespace-pre">
        Admin Portal
      </p>

      {/* scrollable menu area (uses normal flow instead of absolute-per-item) */}
      <div
        className="absolute left-0 top-[220px] right-0 bottom-[120px] overflow-y-auto overflow-x-hidden px-[29px] pb-4"
        role="navigation"
        aria-label="Admin sidebar"
      >
        {groups.map((group) => {
          const expanded = expandedGroups.has(group.id);
          return (
            <div key={group.id} className="mb-4">
              {/* Group header - clickable to toggle */}
              <button
                type="button"
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80"
                aria-expanded={expanded}
                aria-controls={`group-${group.id}`}
              >
                <span className="text-sm font-medium text-[#474747]">{group.title}</span>
                {expanded ? <ChevronUp className="w-4 h-4 text-[#474747]" /> : <ChevronDown className="w-4 h-4 text-[#474747]" />}
              </button>

              {/* Group items (collapsed/expanded) */}
              <div
                id={`group-${group.id}`}
                className={`mt-2 space-y-2 overflow-hidden transition-all ${
                  expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
                // small inline style for smoothness (optional)
                style={{ transitionProperty: "max-height, opacity", transitionDuration: "220ms" }}
              >
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = isItemActive(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => onViewChange(item.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") onViewChange(item.id);
                      }}
                      className={`flex items-center gap-[15px] cursor-pointer px-2 py-2 rounded-md ${
                        active ? "opacity-100 bg-white shadow-sm" : "opacity-80"
                      } hover:opacity-100`}
                      aria-current={active ? "true" : "false"}
                    >
                      <div className="w-[24px] h-[24px] flex-shrink-0">
                        <Icon className="w-full h-full text-[#474747]" />
                      </div>
                      <p className="text-[#474747] whitespace-pre text-sm">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* bottom user area */}
      <div className="absolute content-stretch flex gap-[8px] items-center left-[24px] bottom-[40px]">
        <div className="relative shrink-0 w-[50px] h-[50px]">
          <svg
            className="block w-full h-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 50 50"
          >
            <circle cx="25" cy="25" fill="#979797" r="25" />
          </svg>
        </div>

        <div className="relative ml-1">
          <p className="text-black text-nowrap whitespace-pre">Admin User</p>
        </div>

        <button onClick={logout} aria-label="Sign out" className="ml-4">
          <LogOut className="w-6 h-6 text-[#474747]" />
        </button>
      </div>
    </div>
  );
}
