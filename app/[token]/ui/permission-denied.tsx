import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const info = {
  email: "username@example.com",
  url: "https://example.com",
};

export default function PermissionDenied() {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <ExclamationCircleIcon className="size-20" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-xl">Permission denied</h1>
      </div>
      <div className="mt-5 flex justify-center">
        <p>ご用命はこちらまで</p>
      </div>
      <div className="flex justify-center gap-1">
        <EnvelopeIcon className="w-3" />
        {info.email}
      </div>
      <div className="mt-10">
        <a href={info.url} className="flex justify-center gap-1">
          <GlobeAltIcon className="w-3" />
          {info.url}
        </a>
      </div>
    </div>
  );
}
