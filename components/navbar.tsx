import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FormIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="Logo" height={24} src="favicon.svg" width={24} />
            <p className="ml-1 text-inherit">一號學生會候選人</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarItem className="flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-bold text-default-700"
            href={siteConfig.links.instagram}
            startContent={
              <Image
                alt="Instagram Logo"
                height={24}
                src="instagram_logo.svg"
                width={24}
              />
            }
            variant="flat"
          >
            追蹤我們
          </Button>
        </NavbarItem>
        <Link isExternal aria-label="Form" href={siteConfig.links.form}>
          <FormIcon className="text-default-500" />
        </Link>
      </NavbarContent>
    </NextUINavbar>
  );
};
