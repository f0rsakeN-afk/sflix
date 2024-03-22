import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-72 text-center">
      <h1 className="text-xl text-gray-200">
        This project was made by{" "}
        <a
          href="https://github.com/f0rsakeN-afk"
          className="text-blue-500 underline underline-offset-2"
        >
          Naresh Rajbanshi
        </a>
      </h1>
      <p className="text-lg text-gray-300">
        For any inquiries or feedback, please contact me via{" "}
        <a
          href="mailto:naresh0gmail.com"
          className="text-blue-500 underline underline-offset-2"
        >
          email
        </a>
        .
      </p>
      <p className="text-lg text-gray-300">
        If you find this project useful, consider giving it a{" "}
        <a
          href="https://github.com/f0rsakeN-afk/sflix"
          className="text-blue-500 underline underline-offset-2"
        >
          star
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/f0rsakeN-afk/sflix/fork"
          className="text-blue-500 underline underline-offset-2"
        >
          fork
        </a>{" "}
        on GitHub!
      </p>
    </div>
  );
};

export default About;
