//Components

import Image from "./Image";
import Name from "./Name";
import Username from "./Username";
import Date from "./Date";
import Bio from "./Bio";
import Info from "./Info";

const Result = (props) => {
  return (
    <div className="bg-[#1e2a47] w-[730px] rounded-2xl flex-col items-center py-8 flex">
      <div className="flex items-center justify-between w-[650px]">
        <Image src={props.user.avatar_url} />
        <div className="h-full w-[480px] relative">
          <Name>
            {props.user.name ? props.user.name : "No name to display"}
          </Name>
          <Username>@{props.user.login}</Username>
          <Date date={props.user.created_at} />
        </div>
      </div>

      <div className="w-[650px] flex flex-col items-end">
        <Bio>{props.user.bio ? props.user.bio : "No bio to display"}</Bio>

        <div className="flex items-center justify-around bg-[#141d2f] h-20 w-[480px] rounded-xl mb-5">
          <Info content="Repos" value={props.user.public_repos} />
          <Info content="Followers" value={props.user.followers} />
          <Info content="Following" value={props.user.following} />
        </div>
      </div>
    </div>
  );
};

export default Result;
