import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Services",
        path: "#services",
    },
    {
        title: "Core features",
        path: "#core-features",
    }, {
        title: "Core Services",
        path: "/",
        subItems: [
            {
                title: "Web Development",
                path: "#core-features",
            },
            {
               title: "AI Chatbots",
                path: "#core-features",
            },
            {
                title: "Mobile App Development",
                path: "#core-features",
            },
            {
                title: "AI Calling agents",
                path: "#core-features",
            },
            {
                title: "AI Automation",
                path: "#core-features",
            },
            {
                title: "Power BI Dashboards",
                path: "#core-features",
            },
        ]
    }
]

const Footer = () => {
  return (
    <div>
      {/* <div className="grow bg-muted" /> */}
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, path }) => (
                  <li key={title}>
                    <Link
                      href={path}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
               
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
