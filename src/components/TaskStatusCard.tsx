import { ClipboardClock } from "lucide-react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function TaskStatusCard() {
  return (
    <div className=" p-5 rounded-xl shadow-lg w-full">
      {/* Topo */}
      <div className="flex items-center gap-2 mb-6">
        <ClipboardClock className="text-gray-400" />
        <span className="text-red-500 font-semibold">Task Status</span>
      </div>

      {/* Progress circles */}
      <div className="flex justify-around text-center">
        {/* Completed */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20">
            <CircularProgressbar
              value={84}
              text={`84%`}
              styles={buildStyles({
                pathColor: "#22c55e", // green-500
                textColor: "#000",
                trailColor: "#e5e7eb", // gray-200
              })}
            />
          </div>
          <span className="text-sm text-green-600 font-medium">
            Completed
          </span>
        </div>

        {/* In Progress */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20">
            <CircularProgressbar
              value={46}
              text={`46%`}
              styles={buildStyles({
                pathColor: "#3b82f6", // blue-500
                textColor: "#000",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <span className="text-sm text-blue-600 font-medium">
            In Progress
          </span>
        </div>

        {/* Not Started */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-20">
            <CircularProgressbar
              value={13}
              text={`13%`}
              styles={buildStyles({
                pathColor: "#ef4444", // red-500
                textColor: "#000",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <span className="text-sm text-red-600 font-medium">
            Not Started
          </span>
        </div>
      </div>
    </div>
  );
}
