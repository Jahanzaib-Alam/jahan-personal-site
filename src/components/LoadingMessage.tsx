import { LoadingSwirly } from "./LoadingSwirly";

export const LoadingMessage = () => {
  return (
    <>
      <LoadingSwirly />
      <div className="flex justify-center items-center text-center h-32">
        The server was sleeping. Please wait while it wakes up.
      </div>
    </>
  );
};
