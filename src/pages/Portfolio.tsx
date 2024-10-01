import React from "react";
import StyledLink from "../components/StyledLink";
import Footer from "../components/Footer";
import DarkModeToggle from "../components/DarkModeToggle";

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pb-8 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Mike Jonas
        </h1>
        <DarkModeToggle />
      </div>

      <main className="group text-zinc-700 dark:text-zinc-300">
        <section className="mb-8">
          <p>Builder, creator, coder</p>
          <p>
            Solving problems, learning, working on exciting missions, creating
            refined produts, and staying on the cutting edge
          </p>
        </section>

        <hr className="border-t border-zinc-200 dark:border-zinc-700 my-8" />

        <section className="mb-8">
          <p className="text-xl font-semibold mb-4">Recent Work</p>

          <div className="space-y-6">
            <div>
              <p>
                <StyledLink external to="https://www.futureswap.com/">
                  Futureswap
                </StyledLink>
              </p>
              <p className="mt-2">
                Founding team member of an eventual Series A startup backed by{" "}
                <StyledLink external to="https://ribbitcap.com/our-bets/">
                  Ribbit Capital
                </StyledLink>
                , and others. We aimedto build the most capital-efficient and
                open trading platform, engineering new financial primitives for
                trustless and efficient exchange operations. At its peak, the
                protocol processed $80,000,000 in daily trading volume, reducing
                fees, tightening spreads, and enabling anyone to easily market
                make
              </p>
              <p>
                Sadly, as we scaled, the team grew apart, leading to the
                product's eventual failure. However, our innovations live on,
                inspiring a new class of related products
              </p>
            </div>

            <div>
              <p>
                <StyledLink external to="https://www.patreon.com/">
                  Patreon
                </StyledLink>
              </p>
              <p className="mt-2">
                Senior engineer working on core product and founding the growth
                team. Developed tooling for company-wide experiment creation,
                management, and analysis. Built and measured various product
                experiments, gaining insights into effective strategies
              </p>
              <p>
                Ahead of its time, I also developed initial versions of native
                video, Discord-like community features, and the explore
                functionality. Native video and community were divergent from
                the company's plans to primarily be a platform that integrates
                with others. Now, several years later, core product experiences
                are the primary focus, with video, Discord-like community, and
                explore taking center stage
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-zinc-200 dark:border-zinc-700 my-8" />

        <section className="mb-8">
          <p className="text-xl font-semibold mb-4">Side Projects</p>
          <p>
            I build side projects to stay sharp and try new frameworks,
            libraries, languages, and coding patterns. Here's a few recent ones:
          </p>
          <div className="space-y-6">
            <div>
              <p>
                <StyledLink external to="https://github.com/mikejonas/transit">
                  Transit
                </StyledLink>
              </p>
              <p className="mt-2">
                Perplexity for personal astrology. This app combines AI and
                extremely accurate astrological data to provide personalized
                insights and predictions. Built with React Native for
                cross-platform mobile support, Node.js for the backend, Python
                for using certain libries, and Postgres for data storage
              </p>
            </div>

            <div>
              <p>
                <StyledLink
                  external
                  to="https://github.com/rescomputer/res-ios"
                >
                  Res.computer
                </StyledLink>
              </p>
              <p className="mt-2">
                A voice chat application featuring novel AI personas where users
                can engage in conversations with unique AI characters, each with
                its own personality. Developed using Swift for the frontend,
                with Node.js powering the backend and Postgres managing the
                database
              </p>
            </div>

            <div>
              <p>
                <StyledLink
                  external
                  to="https://github.com/mikejonas/tubequery"
                >
                  Tubequery
                </StyledLink>
              </p>
              <p className="mt-2">
                A tool to summarize and query YouTube videos. The application
                extracts key information, like transcript and summaries from
                videos, allowing users to quickly grasp content without watching
                the entire video. Users can also ask questions about the video
                content. Built with React and Remix for a smooth user
                experience, backed by Postgres for efficient data management.
                I'm currently Refactoring it to be a chrome extension
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-zinc-200 dark:border-zinc-700 my-8" />

        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Contact
          </h2>
          <ul className="space-y-2">
            <li>
              <StyledLink external to="mailto:motion@gmail.com">
                motion@gmail.com
              </StyledLink>
            </li>
            <li>
              <StyledLink
                external
                to="https://github.com/mikejonas"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </StyledLink>
            </li>
            <li>
              <StyledLink
                external
                to="https://linkedin.com/in/mikejonas"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </StyledLink>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
