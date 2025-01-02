export const handleApiResponse = async (apiCall) => {
  debugger
    try {
      const response = await apiCall();
      const apiResponse = response.data;
      if (apiResponse.isSuccess) {
        debugger
        return { success: apiResponse.isSuccess, data: apiResponse.data, message: apiResponse.message, statusCode: apiResponse.statusCode };
      } else {
        debugger
        throw new Error(apiResponse.Message || 'An error occurred');
      }
    } catch (error) {
      debugger
      throw new Error(error.response?.data?.message || 'An error occurred');
    }
  };