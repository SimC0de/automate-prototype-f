import React from "react";
import GlassPanel from "./GlassPanel";
import StudentDashboard from "./StudentDashboard";
import SubjectEnrolled from "./SubjectEnrolled";
import SubjectSchedule from "./SubjectSchedule";
import ReportCard from "./ReportCard";

/** ---------- Mock Data (adjust freely) ---------- */

/** ---------- Page (stacked vertically) ---------- */

export default function StudentPortal() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 md:px-8 py-8 space-y-10">
      <StudentDashboard/>
      <SubjectEnrolled />
      <SubjectSchedule />
      <ReportCard />
    </div>
  );
}
