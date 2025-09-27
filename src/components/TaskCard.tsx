import {Ellipsis} from "lucide-react";
function TaskCard() {
  return (
    <div className="flex max-w-xl border-2 border-gray-400 rounded-xl p-4 items-start gap-4">
      <div className="flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-red-500 rounded-full"></div>
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <h2 className="text-lg font-semibold">
          Attend Nischal’s Birthday Party
        </h2>
        <div className="flex flex-row flex-1 gap-5">
          <p className="text-sm text-gray-600">
            Buy gifts on the way and pick up cake from the bakery.
            <span className="font-medium">(6 PM | Fresh Elements)</span>
          </p>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJY1JLYLvoFUmZDByG7NnEHNsP6_J4bFP5w&s"
              alt="Birthday Party"
              className="w-50 h-30 rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>
            Priority:{" "}
            <span className="text-blue-500 font-medium">Moderate</span>
          </span>
          <span>
            Status:{" "}
            <span className="text-red-500 font-medium">Not Started</span>
          </span>
          <span>Created on: 20/06/2023</span>
        </div>
      </div>

      <button className="flex items-center justify-center">
        <Ellipsis />
      </button>
    </div>
  );
}

export default TaskCard;
