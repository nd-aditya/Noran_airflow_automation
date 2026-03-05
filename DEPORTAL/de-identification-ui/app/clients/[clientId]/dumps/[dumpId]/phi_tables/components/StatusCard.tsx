"use client";

import Image from "next/image";

interface StatusCardProps {
  status: Status;
}

interface Status {
  completed: number;
  in_progress: number;
  not_started: number;
  failed: number;
  phi_marking_done: number;
  tables_phi_marking_locked: number;
}

export const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
  return (
    <>
      <div className="flex w-full flex-col rounded-xl bg-white p-8">
        <h2 className="mb-1 text-xl font-semibold">Status</h2>
        <div className="w-8 border-2 border-secondary"></div>
        <div className="flex flex-col gap-4 border-b border-borderColor py-6">
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary !text-white">
              <Image
                width={24}
                height={24}
                src="/images/completed-white.svg"
                alt="completed"
                className=""
              />
            </div>
            <div className="font-semibold text-mainText">Completed</div>
            <div className="ml-auto font-medium text-mainText">
              {status.completed}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-casablanca">
              <Image
                width={24}
                height={24}
                src="/images/in-progress.svg"
                alt="completed"
              />
            </div>
            <div className="font-semibold">In Progress</div>
            <div className="ml-auto font-medium">{status.in_progress}</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-secText">
              <Image
                width={20}
                height={20}
                src="/images/not-started.svg"
                alt="completed"
              />
            </div>
            <div className="font-semibold">Not Started</div>
            <div className="ml-auto font-medium">{status.not_started}</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-bittersweet">
              <Image
                width={20}
                height={20}
                src="/images/failed.svg"
                alt="completed"
              />
            </div>
            <div className="font-semibold">Failed</div>
            <div className="ml-auto font-medium">{status.failed}</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-background shadow-sm">
              <Image
                width={20}
                height={20}
                src="/images/phi-verified.svg"
                alt="completed"
              />
            </div>
            <div className="font-semibold">PHI Marking Locked</div>
            <div className="ml-auto font-medium">
              {status.tables_phi_marking_locked}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-background shadow-sm">
              <Image
                width={16}
                height={16}
                src="/images/green-tic.svg"
                alt="completed"
              />
            </div>
            <div className="font-semibold">PHI Marking Done</div>
            <div className="ml-auto font-medium">{status.phi_marking_done}</div>
          </div>
        </div>
      </div>
    </>
  );
};
