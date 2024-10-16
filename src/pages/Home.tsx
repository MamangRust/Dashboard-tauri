import { Link } from "react-router-dom";
import { ChevronRight, Users, Briefcase, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/home/SiteHeader";

export default function CompanyProfile() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Sanedge
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empowering businesses through innovative technology solutions
                  and expert consulting.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Our Services</Button>
                <Button variant="outline">About Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Core Services
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 justify-items-center">
              {[
                {
                  title: "Custom Software Development",
                  description:
                    "Tailored solutions to meet your unique business needs",
                  icon: <Briefcase className="h-6 w-6" />,
                },
                {
                  title: "IT Consulting",
                  description:
                    "Expert advice to optimize your technology infrastructure",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Scalable and secure cloud services for your growing business",
                  icon: <Phone className="h-6 w-6" />,
                },
              ].map((service, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {service.icon}
                      <span className="ml-2">{service.title}</span>
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our team of experts delivers top-notch{" "}
                      {service.title.toLowerCase()} services...
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose Us
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Expertise",
                    description:
                      "With over 10 years of experience, our team brings unparalleled knowledge to every project.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We stay at the forefront of technology, ensuring you receive cutting-edge solutions.",
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "Your success is our priority. We work closely with you to understand and meet your unique needs.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "Our portfolio showcases successful projects across various industries.",
                  },
                  {
                    title: "Scalable Solutions",
                    description:
                      "We design solutions that grow with your business, ensuring long-term success.",
                  },
                ].map((item, i) => (
                  <article
                    key={i}
                    className="flex flex-col gap-4 md:flex-row md:items-start"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      {i + 1}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                      <Button variant="link" className="w-fit p-0">
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Team
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 justify-items-center">
              {[
                {
                  name: "John Doe",
                  role: "CEO & Founder",
                  bio: "With 20 years of experience in tech leadership...",
                },
                {
                  name: "Jane Smith",
                  role: "CTO",
                  bio: "A visionary technologist driving our innovation...",
                },
                {
                  name: "Mike Johnson",
                  role: "Head of Client Relations",
                  bio: "Ensuring our clients receive top-notch service...",
                },
              ].map((member, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage
                        src={`/placeholder.svg?height=96&width=96&text=${member.name.charAt(
                          0
                        )}`}
                        alt={member.name}
                      />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 TechInnovate. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" to="#">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
