import { Span } from "next/dist/trace";
import TotalBalanceBox from "./TotalBalanceBox";

const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "welcome" && ( 
          <span className="text-bankGradient">
            &nbsp;{user}
          </span>
          )
        }
        </h1>
      <p className="header-box-subtext">{subtext}</p>
      <TotalBalanceBox 
      accounts = {[]}
      totalBanks = {1}
      totalCurrentBalance = {125532.32}
      />
    </div>
  );
};

export default HeaderBox;
