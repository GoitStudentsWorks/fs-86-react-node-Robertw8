import { createAsyncThunk } from '@reduxjs/toolkit';

export const operationWrapper = <Returned, ThunkArg>(
  path: string,
  handler: (args: ThunkArg, thunkAPI) => Promise<Returned>,
  errorHandler = () => 'An error occurred'
) => {
  return createAsyncThunk<Returned, ThunkArg>(path, async (args, thunkAPI) => {
    try {
      return await handler(args, thunkAPI);
    } catch (error) {
      if (errorHandler) return thunkAPI.rejectWithValue(errorHandler());

      return thunkAPI.rejectWithValue(
        error instanceof Error ? error.message : 'An error occurred'
      );
    }
  });
};

export default operationWrapper;
