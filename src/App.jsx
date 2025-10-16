import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { AdminSidebar } from "./components/AdminSidebar";
import { RegisterStudent } from "./components/RegisterStudent";
import { AssignToClassroom } from "./components/AssignToClassroom";
import { StudentList } from "./components/StudentList";
import { ClassRosters } from "./components/ClassRosters";
import { GradeSectionList } from "./components/GradeSectionList";
import { RegisterTeacher } from "./components/RegisterTeacher";
import { TeacherList } from "./components/TeacherList";
import { TeacherAssignment } from "./components/TeacherAssignment";
import { SubjectList } from "./components/SubjectList";
import { RoomReservation } from "./components/RoomReservation";
import { AcademicRecords } from "./components/AcademicRecords";
import { AdminSettings } from "./components/AdminSettings";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("Admin");
  const [activeView, setActiveView] = useState("register");
  console.log(isLoggedIn);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const renderView = () => {
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

  if (isLoggedIn) {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  if (!isLoggedIn) {
    return (
    <>
    <div className="">
      <AdminSidebar
        activeView={activeView}
        onViewChange={setActiveView}
      />
      {renderView()}
      <Toaster />
    </div>
    </>
  );
  }
}
