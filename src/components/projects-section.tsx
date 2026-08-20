"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProjects = isExpanded
    ? DATA.projects
    : DATA.projects.slice(0, 4);

  return (
    <section id="projects">
      <div className="space-y-12 w-full pt-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple
                websites to complex web applications. Here are a few of my
                favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {visibleProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
        {DATA.projects.length > 4 && (
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 cursor-pointer rounded-full px-5"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUpIcon className="size-4" />
                  </>
                ) : (
                  <>
                    Show More ({DATA.projects.length - 4} more){" "}
                    <ChevronDownIcon className="size-4" />
                  </>
                )}
              </Button>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
