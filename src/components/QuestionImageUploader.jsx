import React, { useState, useEffect } from 'react';
import { Upload, ImageIcon, Plus, Trash } from 'lucide-react';

const QuestionImageUploader = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/questions-without-images');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleUploadImage = async () => {
    if (!selectedQuestion || !imageFile) {
      alert('Please select both a question and an image');
      return;
    }

    const formData = new FormData();
    formData.append('imageFile', imageFile);

    try {
      setIsLoading(true);
      await fetch(`/api/Auth/UploadQuestionImage?questionId=${selectedQuestion}`, {
        method: 'POST',
        body: formData
      });

      setImageFile(null);
      setImagePreview(null);
      setSelectedQuestion('');
      setQuestions(questions.filter(q => q.id.toString() !== selectedQuestion));

    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearSelection = () => {
    setImageFile(null);
    setImagePreview(null);
    setSelectedQuestion('');
    URL.revokeObjectURL(imagePreview);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Question Image Upload</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-6">
          {/* Question Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Select Question</label>
            <select
              value={selectedQuestion}
              onChange={(e) => setSelectedQuestion(e.target.value)}
              disabled={isLoading}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a question</option>
              {questions.map((question) => (
                <option key={question.id} value={question.id}>
                  {question.title || `Question ${question.id}`}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload Section */}
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            {!imagePreview ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Upload className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <button
                    onClick={() => document.getElementById('image-upload').click()}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Choose Image
                  </button>
                  <input
                    type="file"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative w-48 h-48 mx-auto">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={clearSelection}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  {imageFile?.name}
                </p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={handleUploadImage}
            disabled={!selectedQuestion || !imageFile || isLoading}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Uploading...' : 'Upload Image'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionImageUploader;