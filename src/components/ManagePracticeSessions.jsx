import React, { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import AdminDashboardLayout from "./AdminDashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchSubjects } from "../api/auth";
import { useSaveQuestions } from "../hooks/useAuth";

const PracticeSessions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentSubjectId, setCurrentSubjectId] = useState("");
  const { mutateAsync } = useSaveQuestions();

  const { data: subjects = [], isLoading, error } = useQuery({
    queryKey: ["subjects"],
    queryFn: fetchSubjects,
  });
console.log(subjects, "This is subject");
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        file: null,
        fileName: "",
      },
    ]);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleFileChange = (id, event) => {
    const file = event.target.files[0];
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return {
            ...q,
            file: file,
            fileName: file.name,
          };
        }
        return q;
      })
    );
  };

  const handleSaveAll = async () => {
    if (!currentSubjectId) {
      alert("Please select a subject first");
      return;
    }

    try {
      // Run all saveQuestion mutations in parallel
      await Promise.all(
        questions.map((question) =>
          mutateAsync({
            file: question.file,
            subjectId: currentSubjectId,
          })
        )
      );

      alert("All questions saved successfully!");
      setQuestions([]); // Clear questions after successful save
      setCurrentSubjectId(""); // Reset subject ID
    } catch (error) {
      console.error("Error saving questions:", error.message);
      alert(`Failed to save questions. Error: ${error.message}`);
    }
  };
  
  

  return (
    <AdminDashboardLayout>
<div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10">
  <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
    {/* Header */}
    <div className="px-6 py-4 border-b flex justify-between items-center bg-blue-900 text-white rounded-t-lg">
      <h2 className="text-xl font-semibold">Manage Practice Session</h2>
      <button
        onClick={handleAddQuestion}
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Question
      </button>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="space-y-6">
        {/* Subject Selection */}
        {isLoading ? (
  <p>Loading subjects...</p>
) : (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <select
            value={currentSubjectId}
            onChange={(e) => setCurrentSubjectId(e.target.value)}
            disabled={isLoading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
          </select>
        </div>
)}
        {/* Questions List */}
        <div className="space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="p-4 border rounded-lg relative bg-blue-50"
            >
              <button
                onClick={() => handleRemoveQuestion(question.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question File
                </label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      document.getElementById(`file-${question.id}`).click()
                    }
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose File
                  </button>
                  <span className="text-sm text-gray-600">
                    {question.fileName || "No file chosen"}
                  </span>
                  <input
                    type="file"
                    id={`file-${question.id}`}
                    className="hidden"
                    onChange={(e) => handleFileChange(question.id, e)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        {questions.length > 0 && (
          <button
            onClick={handleSaveAll}
            disabled={!currentSubjectId || isLoading}
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Save All Questions"}
          </button>
        )}
      </div>
    </div>
  </div>
</div>

    </AdminDashboardLayout>
  );
};

export default PracticeSessions;
