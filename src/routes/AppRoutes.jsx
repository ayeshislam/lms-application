import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { Dashboard } from "../components/Dashboard";
import { Courses } from "../components/Courses";
import { Profile } from "../components/Profile";
import { Assignments } from "../components/Assignments";
import { Lectures } from "../components/Lectures";
import { Quizzes } from "../components/Quizzes";
import { Analytics } from "../components/Analytics";
import { Admin } from "../components/Admin";
import { AdminLogin } from "../components/AdminLogin";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/lectures" element={<Lectures />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};
