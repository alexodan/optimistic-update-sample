import { useState } from "react";
import { toggleButtonStyle } from "./const/styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./const/queryClient";
import { OptimisticUpdate } from "./components/OptimisticUpdate";
import { NormalUpdate } from "./components/NormalUpdate";

export const App = () => {
  const [isOptimistic, setIsOptimistic] = useState<boolean>(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <button
          type="button"
          style={toggleButtonStyle}
          onClick={() => setIsOptimistic(!isOptimistic)}
        >
          Switch
        </button>
        {isOptimistic ? (
          <div>
            <p>Optimistic Update</p>
            <OptimisticUpdate />
          </div>
        ) : (
          <div>
            <p>Normal Update</p>
            <NormalUpdate />
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};
