import { ChevronRightIcon } from "@heroicons/react/24/solid";

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-800 text-white">
      <div className={`px-3 py-3 font-medium`}>{children}</div>
    </div>
  );
}

function LinkHeader({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href}>
      <Header>
        <div className="flex justify-between gap-3">
          {children}
          <ChevronRightIcon className="w-3" />
        </div>
      </Header>
    </a>
  );
}

function LinkListItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href}>
      <div className="py-3 pl-5 pr-3 flex justify-between gap-3">
        <div className="grow">{children}</div>
        <ChevronRightIcon className="w-3" />
      </div>
    </a>
  );
}

export function CompanyOverview() {
  return (
    <>
      <div className="px-3 pt-5">
        <div>
          <h1 className="text-xl underline">概要</h1>
        </div>
        <div className="mt-3">
          <LinkHeader href="https://example.com">caption</LinkHeader>
        </div>
        <div className="mt-3">
          <Header>リンク</Header>
          <ul className="list-none border border-gray-300 border-t-0 divide-y divide-gray-300">
            <li>
              <LinkListItem href="https://example.com">
                <p>text</p>
                <p className="text-xs mt-1 underline text-right">
                  company name
                </p>
              </LinkListItem>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
