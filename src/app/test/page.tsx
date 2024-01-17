/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/o8c38ioXUuz
 */

//Background: #1F2937
// Main: #008087
// Secondary: #8BD77E
// Accent: #25AE8D
// Alert: #F9F871
import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/Component/components/ui/card";
import { SVGProps } from "react";

export default function Component() {
  return (
    <div className="dark flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <GamepadIcon className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">Dark Almanac</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Articles
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Unravel the mysteries of gaming
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Dive into the world of gaming theories and strategies. Join
                  the community and start crafting your own theories.
                </p>
                <div className="flex justify-center">
                  <a
                    href="/builds"
                    className="flex text-2xl p-4 mt-16 bg-[#008087] w-60 justify-center place-self-center"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MicroscopeIcon className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold">In-depth Game Analysis</h2>
              </div>
              <div className="flex flex-col items-center text-center">
                <LightbulbIcon className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold">Advanced Strategies</h2>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserIcon className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold">Community Discussions</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Latest Theories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Unlocking the Secrets of Dark Souls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Dive into the lore and hidden mechanics of Dark Souls and
                    uncover the secrets of Lordran.
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-medium hover:underline underline-offset-4"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>The Hidden Paths of Hollow Knight</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Explore the interconnected world of Hollow Knight and
                    discover the hidden paths and secrets.
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-medium hover:underline underline-offset-4"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>The True Meaning of The Last of Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Uncover the deeper themes and messages behind the story of
                    The Last of Us.
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-medium hover:underline underline-offset-4"
                    href="#"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    &quot;This website has helped me understand the deeper
                    mechanics of my favorite games. It&apos;s a must-visit for
                    any serious gamer.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    &quot;The community here is amazing. I&apos;ve learned so
                    much from the discussions and theories shared by other
                    users.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          © 2024 Game Theory Craft. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function GamepadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function MicroscopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 1-2-2V6h6v4a2 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0-1-1H9a1 0-1 1v3" />
    </svg>
  );
}

function LightbulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0-4-4H9a4 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ydgoSU2IfFd
 */
//import { Button } from "@/components/ui/button"

function Character() {
  return `<div className="bg-[#1c1c1c] p-8 text-white">
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <div className="border-2 border-gray-700 p-4 rounded-full">
            <img
              alt="Character"
              className="h-[300px] w-[200px] object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/300",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-center text-lg font-semibold">Rogue</h2>
            <ul className="mt-2">
              <li>Strength: 4</li>
              <li>Vigor: 5</li>
              <li>Agility: 26</li>
              <li>Dexterity: 25</li>
              <li>Will: 10</li>
              <li>Knowledge: 10</li>
              <li>Resourcefulness: 25</li>
              <li>Health: 75 / 75</li>
            </ul>
            <Button className="mt-4 w-full">Open Details</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center col-span-2">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Head Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Head</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Neck Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Neck</span>
            </div>
            <div className="flex flex-col items-center col-start-1">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Hand Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Hand</span>
            </div>
            <div className="flex flex-col items-center col-start-2">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Chest Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Chest</span>
            </div>
            <div className="flex flex-col items-center col-start-3">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Back Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Back</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Leg Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Leg</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Ring Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Ring</span>
            </div>
            <div className="flex flex-col items-center col-start-2">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Feet Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Feet</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="border border-gray-600 p-2">
                <img
                  alt="Ring Slot"
                  className="h-[100px] w-[100px] object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </div>
              <span className="mt-2">Ring</span>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-4 pt-4">
            <div className="grid grid-cols-6 gap-4" />
            <div className="mt-4 flex justify-between">
              <span>Gold:</span>
              <span>122</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
