"use client";

const Home = () => {
  return (
    <div>
      <div className=" relative flex w-full flex-col items-center justify-center gap-6 px-4 text-center md:w-8/12 md:items-start md:gap-10 ">
        <div className="w-full space-y-2 text-4xl font-normal sm:text-5xl">
          <h1 className="text-center md:text-start">
            Build a better
            <br />
            resume to <span className="font-bold">stand out</span>{" "}
          </h1>
        </div>
        <div className="w-full max-w-xl font-light text-[#444240]">
          <p className="text-center md:text-start">
            {"I'm"}{" "}
            <a
              href="https://www.fernandoramirez.me"
              target="_blank"
              rel="noopener"
            >
              <span className="font-medium cursor-pointer underline underline-offset-2 hover:text-black">
                Fernando Ramirez
              </span>
            </a>{" "}
            and I made Tech Resumes Services to help you build a better resume
            to stand out in the tech industry. {"I've"} also helped
            students receive internship offers from big tech companies.
          </p>
        </div>

        <div className="w-full max-w-xl font-light text-[#444240]">
          <ul className="text-start">
            <li>
              📍 {"I'm"} a software engineer at{" "}
              <span className="font-medium">Microsoft</span>
            </li>
            <li>
              📦 Previously interned at{" "}
              <span className="font-medium">Amazon</span>
            </li>
            <li>
              🚕 Been invited to{" "}
              <span className="font-medium">{"Jane Street's"}</span> office in NYC
            </li>
            <li className="md:text-nowrap">
              📄 Passed resume screens for {" "}<span className="font-medium">20+ Big Tech</span> companies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
