"use client";

import Image from "next/image";

interface DBOverviewCardProps {
  dbOverView: DBOverView;
}

interface DBOverView {
  size: string;
  most_rows: string;
  most_row_table: string;
  min_rows: string;
  min_row_table: string;
}

export const DatabaseOverview: React.FC<DBOverviewCardProps> = ({
  dbOverView,
}) => {
  return (
    <>
      <div className="mb-12 flex w-full flex-col rounded-xl bg-white p-8">
        <h2 className="mb-1 text-lg font-semibold">Dump Overview</h2>
        <div className="border-secondary w-8 border-2"></div>
        <div className="border-borderColor flex flex-row items-center gap-4 border-b py-6">
          <div className="font-semibold text-sm">
            Total <br /> Database Size
          </div>
          <div className="bg-bostonBlue ml-auto rounded-md px-3 py-2 text-xs font-medium text-white">
            {dbOverView.size}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              width={24}
              height={24}
              src="/images/completed.svg"
              alt="completed"
              className="!text-mainText"
            />
            <div className="flex flex-col text-xs">
              <span className="font-semibold">Most Rows</span>
              <span className="bg-whiteIce p-1 px-2">
                {dbOverView.most_row_table}
              </span>
            </div>
            <div className="ml-auto flex flex-col text-right text-xs leading-4">
              <span className="font-medium">{dbOverView.most_rows}</span>
              <span className="text-secText">rows</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex flex-row items-center gap-2">
            <Image
              width={24}
              height={24}
              src="/images/completed.svg"
              alt="completed"
              className="!text-mainText"
            />
            <div className="flex flex-col text-xs">
              <span className="font-semibold">Least Rows</span>
              <span className="bg-lemonChiffon mr-auto p-1 px-2">
                {dbOverView.min_row_table}
              </span>
            </div>
            <div className="ml-auto flex flex-col text-right text-xs leading-4">
              <span className="font-medium">{dbOverView.min_rows}</span>
              <span className="text-secText">rows</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
