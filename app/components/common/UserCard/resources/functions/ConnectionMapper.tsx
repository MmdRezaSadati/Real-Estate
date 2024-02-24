import Link from "next/link";
import LinkedIn from "@mui/icons-material/LinkedIn";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/X";
import Telegram from "@mui/icons-material/Telegram";
import Instagram from "@mui/icons-material/Instagram";
const ConnectionMapper = (
  ARR: {
    link: string;
    type: string;
  }[]
) =>
  ARR.map((link, index) => (
    <Link
      href={link.link}
      className="flex justify-center hover:bg-purple-200/80 items-center p-3 rounded-lg text-slate-500 bg-purple-100"
      key={link.link + index}
    >
      {link.type === "youtube" ? (
        <YouTube />
      ) : link.type === "instagram" ? (
        <Instagram />
      ) : link.type === "twitter" ? (
        <Twitter />
      ) : link.type === "linkedin" ? (
        <LinkedIn />
      ) : link.type === "telegram" ? (
        <Telegram />
      ) : (
        ""
      )}
    </Link>
  ));
export default ConnectionMapper;
