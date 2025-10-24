import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { AdminSidebar } from "./components/Admin/AdminSidebar";
import { RegisterStudent } from "./components/Admin/RegisterStudent";
import { AssignToClassroom } from "./components/Admin/AssignToClassroom";
import { StudentList } from "./components/Admin/StudentList";
import { ClassRosters } from "./components/Admin/ClassRosters";
import { GradeSectionList } from "./components/Admin/GradeSectionList";
import { RegisterTeacher } from "./components/Admin/RegisterTeacher";
import { TeacherList } from "./components/Admin/TeacherList";
import { TeacherAssignment } from "./components/Admin/TeacherAssignment";
import { SubjectList } from "./components/Admin/SubjectList";
import { RoomReservation } from "./components/Admin/RoomReservation";
import { AcademicRecords } from "./components/Admin/AcademicRecords";
import { AdminSettings } from "./components/Admin/AdminSettings";
import { Toaster } from "./components/ui/sonner";
import StudentDashboard from "./components/Student/StudentDashboard";
import { StudentSidebar } from "./components/Student/StudentSidebar";
import SubjectEnrolled from "./components/Student/SubjectEnrolled";
import SubjectSchedule from "./components/Student/SubjectSchedule";
import ReportCard from "./components/Student/ReportCard";
import { TeacherSidebar } from "./components/Teacher/TeacherSidebar";
import TeacherDashboard from "./components/Teacher/TeacherDashboard";
import GradeSheetSelection from "./components/Teacher/GradeSheetSelection";
import GradeSheetTable from "./components/Teacher/GradeSheetTable";
import { GradeSheetSelection2 } from "./components/Teacher/GradeSheetSelection2";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("Teacher");
  const [activeView, setActiveView] = useState("register");

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const renderAdmin = () => {
    switch (activeView) {
      case "register":
        return <RegisterStudent />;
      case "add-to-class":
        return <AssignToClassroom />;
      case "student-list":
        return <StudentList />;
      case "class-roster":
        return <ClassRosters />;
      case "grade-section-list":
        return <GradeSectionList />;
      case "register-teacher":
        return <RegisterTeacher />;
      case "teacher-list":
        return <TeacherList />;
      case "teacher-assignment":
        return <TeacherAssignment />;
      case "subject-list":
        return <SubjectList />;
      case "room-reservation":
        return <RoomReservation />;
      case "academic-records":
        return <AcademicRecords />;
      case "settings":
        return <AdminSettings />;
      default:
        return <RegisterStudent />;
    }
  };

  const renderStudent = () => {
    switch (activeView) {
      case "student-dashboard":
        return <StudentDashboard />;
      case "subject-enrolled":
        return <SubjectEnrolled />;
      case "subject-schedule":
        return <SubjectSchedule />;
      case "report-card":
        return <ReportCard />;
      default:
        return <StudentDashboard />;
    }
  };

  const renderTeacher = () => {
    switch (activeView) {
      case "teacher-dashboard":
        return <TeacherDashboard />;
        case "gradesheet-selection":
        return <GradeSheetSelection2 />;
        case "gradesheet-table":
        return <GradeSheetTable />;
      default:
        return <TeacherDashboard />;
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  if (isLoggedIn) {
    return (
      <>
        <div className="">
          {userRole === "Admin" && (
            <AdminSidebar
              activeView={activeView}
              onViewChange={setActiveView}
              logout={() => setIsLoggedIn(false)}
            />
          )}
          {userRole === "Admin" && renderAdmin()}
          {userRole === "Student" && (
            <StudentSidebar
              activeView={activeView}
              onViewChange={setActiveView}
              logout={() => setIsLoggedIn(false)}
            />
          )}
          {userRole === "Student" && renderStudent()}
          {userRole === "Teacher" && (
            <TeacherSidebar
              activeView={activeView}
              onViewChange={setActiveView}
              logout={() => setIsLoggedIn(false)}
            />
          )}
          {userRole === "Teacher" && renderTeacher()}
          <Toaster />
        </div>
      </>
    );
  }
}
