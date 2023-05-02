import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { RocknRoll_One } from "next/font/google";

interface HeaderProps {}

const rocknRoll = RocknRoll_One({
  subsets: ["latin"],
  weight: "400",
});

const navigation = [
  { name: "Accueil", href: "/", isExternal: false },
  { name: "Télécharger", href: "/download", isExternal: false },
  {
    name: "Discord",
    href: "https://discord.gg/arenareturns",
    isExternal: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ArenaReturns",
    isExternal: true,
  },
];

const lang = [
  { name: "Français", href: "#" },
  { name: "Anglais", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#372820]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 z-10">
          <Link href="/" className="lg:-my-8 lg:translate-y-6 hover:scale-110 hover:-rotate-3 duration-500 transition-all">
            <span className="sr-only">Arena Returns</span>
            <Image className="h-8 lg:h-28 w-auto" src="/logo.png" alt="" width={202} height={128} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${rocknRoll.className} text-sm font-normal leading-6 text-yellow-50 hover:text-yellow-500 duration-500 transition-colors`}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-yellow-50">
                            Langage
                            <ChevronDownIcon className="h-5 w-5 flex-none text-yellow-50" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-[#755938] p-2 shadow-lg ring-1 ring-amber-900/20">
                                {lang.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-yellow-50 hover:bg-amber-900/20"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>*/}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#372820] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Arena Returns</span>
              <Image className="h-8 w-auto" src="/logo.png" alt="" width={202} height={128} />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-100" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Fermer</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-yellow-50 hover:bg-[#755938]"
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/*<Disclosure as="div" className="-mx-3">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-yellow-50 hover:bg-[#755938]">
                                            Langage
                                            <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="mt-2 space-y-2">
                                            {lang.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-yellow-50 hover:bg-[#755938]"
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>*/}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
