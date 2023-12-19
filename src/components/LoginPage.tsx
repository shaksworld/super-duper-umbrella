import BusinessLogin from "components/assets/Business-login";
import VectorLogin from "components/assets/Vector-login";
import Phone_in_talkLogin from "components/assets/Phone_in_talk-login";
import VectorLogin1 from "components/assets/Vector-login-1";
import LineLogin1 from "components/assets/Line-login-1";
import Line6LoginLogin from "components/assets/Line6Login-login";
import Line5LoginLogin from "components/assets/Line5Login-login";

// @ts-ignore
const InputField = ({ placeholder }) => (
    <>
      <Line6LoginLogin className="h-0 w-96" />
      <input
          type="text"
          className="h-14 flex-grow bg-transparent border-none text-left text-[15px] leading-[normal] text-neutral-300 placeholder:text-neutral-300"
          placeholder={placeholder}
      />
      <Line5LoginLogin className="h-0 w-96" />
    </>
);

// @ts-ignore
const ActionButton = ({ children }) => (
    <button type="submit" className="flex-grow rounded-[64px] bg-indigo-700 py-4 pl-8 pr-7">
      {children}
    </button>
);
export default function LoginPage({ className = "" }: LoginPageProps) {
  return (
      <div
          className={`font-poppins relative inline-flex h-[1034px] w-[1920px] resize flex-row items-end overflow-hidden bg-white pr-[879px] pb-14 pl-72 pt-40 tracking-[0px] ${className}`}
      >
        <div className="absolute inset-x-72 top-6 flex h-28 items-center justify-center text-base leading-[normal]" >
          <div className="flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch" >
            <div className="flex h-7 items-center justify-center gap-x-6 self-stretch text-left font-normal" >
              <div className="flex flex-grow items-center justify-center gap-x-6 self-stretch" >
                <div className="flex w-28 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
                  <BusinessLogin className="h-7 w-7" />
                  <div className="self-stretch">Business</div>
                </div>
                <div className="flex w-28 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
                  <VectorLogin className="h-7 w-7" />
                  <div className="w-20 self-stretch">Personal</div>
                </div>
                <div className="flex flex-grow items-center justify-end self-stretch pl-96 text-indigo-700" >
                  <div className="flex flex-grow items-center justify-center gap-x-1.5 self-stretch" >
                    <Phone_in_talkLogin className="h-7 w-7" />
                    <div className="self-stretch">1-800-356-6522</div>
                  </div>
                </div>
              </div>
              <div className="flex w-36 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
                <VectorLogin1 className="h-6 w-7" />
                <div className="self-stretch">Sign up/Login</div>
              </div>
            </div>
            <div className="flex h-px flex-col items-center justify-center self-stretch pt-px" >
              <LineLogin1 className="h-0 w-[1352px]" />
            </div>
            <div className="relative flex flex-grow items-center self-stretch pb-1 pr-96 pt-0.5 font-semibold" >
              <div className="relative flex flex-grow items-center justify-center gap-x-80 self-stretch text-left text-neutral-400" >
                <div className="bg-salem-logo flex w-28 items-start self-stretch bg-cover bg-center" />
                <div className="flex flex-grow items-center justify-center gap-x-8" >
                  <div className="self-stretch">Home</div>
                  <div className="self-stretch">Loans</div>
                  <div className="self-stretch">About us</div>
                  <div className="self-stretch">Services</div>
                  <div className="self-stretch">Pages</div>
                  <div className="self-stretch">Blog</div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex w-48 items-center justify-center text-center text-white" >
                <div className="flex flex-grow items-center justify-center self-stretch rounded-[64px] bg-indigo-700 py-4 px-12" >
                  Apply now
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="relative flex flex-grow items-end self-stretch bg-neutral-100 pb-64 pl-24 pr-44 pt-80 font-semibold" >
          <div className="flex flex-grow flex-col items-start justify-center gap-y-1.5 self-stretch" >
            <Line6LoginLogin className="h-0 w-96" />
            {/*@ts-ignore*/}
            <InputField className="text-left text-[15px] leading-[normal] text-neutral-300" placeholder="Account Number" />
            <div className="flex h-14 flex-col items-center justify-end self-stretch pt-14" >
              <Line5LoginLogin className="h-0 w-96" />
            </div>
            {/*@ts-ignore*/}
            <InputField className="text-left text-[15px] leading-[normal] text-neutral-300" placeholder="Password" />
            <div className="flex flex-grow flex-col items-center justify-end pt-12 text-center text-base leading-[normal] text-white" >
              <div className="flex flex-grow items-center justify-center self-stretch" >
                <ActionButton>Check Balance</ActionButton>
                {/*<div className="flex flex-grow items-center justify-center self-stretch rounded-[64px] bg-indigo-700 py-4 pl-8 pr-7" >*/}
                {/*  Check Balance*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </form>
        <div className="absolute bottom-14 right-72 flex h-[813px] w-24 items-start bg-neutral-100" />
        <div className="absolute bottom-24 right-80 flex h-96 w-96 items-start">
          <div className="absolute inset-0 bg-[#C4C4C4]" />
          <div className="bg-background-1 absolute inset-0 bg-cover bg-center" />
        </div>
      </div>
  );
}

interface LoginPageProps {
  className: string;
}
