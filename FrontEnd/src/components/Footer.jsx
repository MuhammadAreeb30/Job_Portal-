import { Github, Instagram, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-white">
            Copyright &copy;2023 All Rights Reserved | This Template is Made
            with ❤ by Muhammad Areeb.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/muhammad-areeb-09aa1126a/"
            target="_blank"
          >
            <LinkedinIcon
              className="text-white transition-all hover:scale-75"
              width={30}
            />
          </a>
          <a href="https://github.com/MuhammadAreeb30" target="_blank">
            <Github
              className="text-white transition-all hover:scale-75"
              width={30}
            />
          </a>
          <a href="https://www.instagram.com/m_______areeb/" target="_blank">
            <Instagram
              className="text-white transition-all hover:scale-75"
              width={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
