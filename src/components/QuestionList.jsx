import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {fetchQuestions, fetchSubjects } from "../api/auth";
import AdminDashboardLayout from "./AdminDashboardLayout";

const QuestionList = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    
    const { data: subjects = [], isLoading: isLoadingSubjects, error: subjectsError } = useQuery({
        queryKey: ["subjects"],
        queryFn: fetchSubjects,
        refetchOnWindowFocus: false,
        retry: false,
      });

      const { data: questions = [], isLoading: isLoadingQuestions, error: questionsError } = useQuery({
        queryKey: ["questions", selectedSubject],
        queryFn: () => fetchQuestions(selectedSubject),
        enabled: !!selectedSubject,
        refetchOnWindowFocus: false,
        retry: false,
      });

      useEffect(() => {
        // This ensures that the question fetch is only triggered once when a subject is selected
        if (!selectedSubject) return;
      }, [selectedSubject]);

  if (isLoadingSubjects) return <div>Loading subjects...</div>;

  return (
    <AdminDashboardLayout>
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Select Subject
        </label>
        <select
          id="subject"
          value={selectedSubject || ""}
          onChange={(e) => setSelectedSubject(e.target.value ? parseInt(e.target.value, 10) : null)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select a subject --</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      {isLoadingQuestions ? (
        <div>Loading questions...</div>
      ) : questions && questions.length > 0 ? (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Questions for {selectedSubject}</h2>
          <ul className="space-y-4">
              {questions.map((question, index) => (
                <li
                  key={question.id}
                  className="bg-gray-100 p-4 rounded-md shadow border border-gray-200"
                >
                  <p className="text-sm text-gray-700 font-medium">
                    Q{index + 1}. {question.questionText}
                  </p>
                  {question.options && question.options.length > 0 && (
                    <ul className="mt-2 space-y-2 pl-6 text-gray-600">
                      {question.options.map((option, optionIndex) => (
                        <li key={option.id} className="text-sm">
                          <span className="font-semibold">
                            {String.fromCharCode(65 + optionIndex)}. {/* Converts 0 -> 'a', 1 -> 'b', etc. */}
                          </span>{" "}
                          {option.value}
                        </li>
                    //    {question.correctOption}
                      ))}
                    </ul>
                     )}
                     <p className="mt-2 text-blue-600 font-semibold">
                    Correct Answer: {question.correctOption.toUpperCase()}
                  </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No questions available for this subject.</div>
      )}
    </div>
    </AdminDashboardLayout>
  );
};

export default QuestionList;
