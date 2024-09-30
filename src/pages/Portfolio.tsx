import React from "react";
import StyledLink from "../components/StyledLink";
import Footer from "../components/Footer";
// ThemeToggle Component with proper typing
interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none focus:ring-0"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800 dark:text-gray-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
};

// Portfolio Component with proper typing
interface PortfolioProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="max-w-3xl mx-auto pb-12 pt-16 px-4 sm:px-6 lg:px-8">
      {/* Header section with name and theme toggle */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Mike Jonas
        </h1>
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      <main className="group text-zinc-700 dark:text-zinc-300">
        {/* Introduction Section */}
        <section className="mb-8">
          <p>
            Full stack engineer. I can build products and apps independently,
            but prefer working with talented teams.
          </p>
          <p>
            Building refined products, working on exciting missions, and being
            on the cutting edge drives me.
          </p>
          <p>
            I always avoid complexity and aim to reduce it unless it's for
            learning or required for scale.
          </p>
          <p>
            Outside of coding, I nerd out about health and nutrition. You can
            often find me at the skatepark, gym, or trying to push myself to
            last 5 more minutes in the sauna.
          </p>
        </section>

        <hr className="border-t border-zinc-200 dark:border-zinc-700 my-8" />

        {/* Recent Work Section */}
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
                , among others. We built the most capital-efficient and open
                trading platform, engineering new financial primitives for
                trustless and efficient exchange operations. At its peak, the
                protocol processed $80,000,000 in daily trading volume, reducing
                fees, tightening spreads, and enabling anyone to easily market
                make.
              </p>
              <p>
                Sadly, the team grew apart as we scaled, leading to eventual
                product failure, but our innovations live on and have inspired a
                class of other related products.
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
                experiments, gaining insights into effective strategies.
              </p>
              <p>
                Ahead of its time, I also developed initial versions of native
                video, Discord-like community features, and the explore
                functionality. Native video and community were divergent from
                the company's plans to primarily be a platform that integrates
                with others. Now, several years later, core product experiences
                are the primary focus, with video, Discord-like community, and
                explore taking center stage.
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
                astrological data to provide personalized insights and
                predictions. Built with React Native for cross-platform mobile
                support, Node.js for the backend, Python for data processing,
                and Postgres for data storage.
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
                An innovative voice chat application featuring novel AI
                personas. This iOS app allows users to engage in conversations
                with unique AI characters, each with its own personality and
                knowledge base. Developed using Swift for the frontend, with
                Node.js powering the backend and Postgres managing the database.
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
                A tool to summarize and query YouTube videos. This web
                application extracts key information from videos, allowing users
                to quickly grasp content without watching the entire video.
                Users can also ask questions about the video content. Built with
                React and Remix for a smooth user experience, backed by Postgres
                for efficient data management.
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
