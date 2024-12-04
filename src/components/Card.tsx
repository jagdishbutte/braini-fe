import DeleteIcon from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon";

export interface CardProps{
  title: string;
  link: string;
  type: "twitter"| "youtube"
}

function Card({title, link, type}: CardProps) {
  return (
    <>
      <div className="card m-4">
        <div className="p-8 bg-white rounded-md max-w-96 border">
          <div className="flex justify-between font-medium">
            <div className="flex items-center">
              <div className="pr-2 text-gray-500">
                <TwitterIcon size={"md"} />
              </div>
              {title}
            </div>
            <div className="flex items-center">
              <div className="pr-2 text-gray-500">
                <a href={link} target="_blank">
                  <ShareIcon size={"md"} />
                </a>
              </div>
              <div className="text-gray-500">
                <DeleteIcon size={"md"} />
              </div>
            </div>
          </div>

          <div className="pt-4">
            {type === "youtube" && (
              <iframe
                className="w-full"
                src={link.replace("watch", "embed")}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
            {type === "twitter" && (
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
