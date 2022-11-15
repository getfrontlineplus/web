import React from "react";
import { Assignment } from "scorecard-types";

export default function TableRow(props: { assignment: Assignment }) {
  return (
    <div className="text-sm pr-4 pt-1">
      <div className="flex">
        <div className="w-full pr-2 py-1">
          <p className="text-mono-l-600 dark:text-mono-d-600">
            {props.assignment.name}
          </p>
        </div>
        <div className="w-14">
          <div className="group relative">
            {props.assignment.grade?.match(/[0-9.]{1,3}%/) && (
                <div className="hidden group-hover:block absolute right-full mr-1.5 top-1/2 -translate-y-1/2">
                  <p className="text-black">
                    {props.assignment.points}/{props.assignment.max}
                  </p>
                </div>
            )}
            <div className="bg-mono-l-200 dark:bg-mono-d-200 py-1 px-2 rounded-sm">
              <p className="text-mono-l-600 dark:text-mono-d-600 text-center cursor-default">
                {props.assignment.grade}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
