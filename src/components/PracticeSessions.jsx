import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchSubjects } from "../api/auth";
import UserDashboardLayout from "./UserDashboardLayout";

const PracticeSessions = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectDetails, setSubjectDetails] = useState({});
  const [startDate, setStartDate] = useState("");
  const [actionType, setActionType] = useState("");

  // Fetch subjects
  const { data: subjects = [], isLoading, error } = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleSubjectSelection = (subjectId) => {
    setSelectedSubjects((prev) => {
      if (prev.includes(subjectId)) {
        return prev.filter((id) => id !== subjectId);
      } else {
        return [...prev, subjectId];
      }
    });
  };

  const handleGetQuestionsByEmail = () => {
    if (!startDate) {
      alert("Please select a start date for email scheduling.");
      return;
    }
    // console.log("Sending questions via email:", { selectedSubject, numQuestions, difficulty, startDate });
  };

  const handleTakeQuizHere = () => {
    // console.log("Taking quiz here:", { selectedSubject, numQuestions, difficulty });
  };

  const handleDetailChange = (subjectId, key, value) => {
    setSubjectDetails((prev) => ({
      ...prev,
      [subjectId]: {
        ...prev[subjectId],
        [key]: value,
      },
    }));
  };

  const handleActionTypeChange = (type) => {
    setActionType(type);
  };

  const startPractice = (mode) => {
    console.log("Start Practice", { selectedSubjects, subjectDetails, startDate, mode });
    // Handle logic for email or quiz mode
  };

  return (
    <UserDashboardLayout>
      <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h1 className="text-2xl font-bold text-center text-teal-600">Practice Session Setup</h1>

      {isLoading ? (
        <p>Loading subjects...</p>
      ) : (
        <>
          <div className="mt-6">
            <h2 className="font-medium text-gray-700">Select Subjects</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={`p-4 border rounded-md cursor-pointer ${
                    selectedSubjects.includes(subject.id)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                  onClick={() => handleSubjectSelection(subject.id)}
                >
                  {subject.name}
                </div>
              ))}
            </div>
          </div>

          {selectedSubjects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Configure Selected Subjects</h2>
              {selectedSubjects.map((subjectId) => (
                <div key={subjectId} className="mb-4 p-4 border rounded-md bg-white">
                  <h3 className="font-medium mb-2">
                    {subjects.find((s) => s.id === subjectId)?.name}
                  </h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Number of Questions</label>
                      <input
                        type="number"
                        min="1"
                        className="w-full px-3 py-2 border rounded-md"
                        value={subjectDetails[subjectId]?.questions || ""}
                        onChange={(e) =>
                          handleDetailChange(subjectId, "questions", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Difficulty Level</label>
                      <select
                        className="w-full px-3 py-2 border rounded-md"
                        value={subjectDetails[subjectId]?.difficulty || ""}
                        onChange={(e) =>
                          handleDetailChange(subjectId, "difficulty", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

<div className="mb-4">
        <h3 className="font-semibold mb-2">Choose Action</h3>
        <div className="flex items-center gap-4">
          <label>
            <input
              type="radio"
              name="actionType"
              value="email"
              checked={actionType === "email"}
              onChange={() => handleActionTypeChange("email")}
            />
            <span className="ml-2">Get Questions via Email</span>
          </label>
          <label>
            <input
              type="radio"
              name="actionType"
              value="quiz"
              checked={actionType === "quiz"}
              onChange={() => handleActionTypeChange("quiz")}
            />
            <span className="ml-2">Take Quiz Here</span>
          </label>
        </div>
      </div>

      {actionType === "email" && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
      {actionType === "email" && (<button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGetQuestionsByEmail}
          disabled={actionType !== "email"}
        >
          Get Questions via Email
        </button>
      )}
       {actionType === "quiz" &&(<button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleTakeQuizHere}
          disabled={actionType !== "quiz"}
        >
          Take Quiz Here
        </button>)}
      </div>
        </>
      )}
    </div>
    </div>
    </UserDashboardLayout>
  );
};

export default PracticeSessions;
