import BusinessDashboard from "components/assets/Business-dashboard";
import VectorDashboard from "components/assets/Vector-dashboard";
import Phone_in_talk from "components/assets/Phone_in_talk";
import VectorDashboard1 from "components/assets/Vector-dashboard-1";
import LineDashboard1 from "components/assets/Line-dashboard-1";
import EmojioneWarning from "components/assets/EmojioneWarning";
import LineDashboard6 from "components/assets/LineDashboard6";
import LineDashboard7 from "components/assets/LineDashboard7";
import VectorDashboardTwelve from "components/assets/VectorDashboardTwelve";
import VectorDashboardSeven from "components/assets/VectorDashboardSeven";
import VectorDashboardSix from "components/assets/VectorDashboardSix";
import VectorDashboardOne from "components/assets/VectorDashboardOne";
import VectorDashboardTwo from "components/assets/VectorDashboardTwo";

export default function DashboardPage({ className = "" }: DashboardPageProps) {
  return (
    <div
      className={`relative inline-flex h-[1034px] w-[1920px] resize flex-row items-end overflow-hidden bg-white pr-[833px] pb-9 pl-80 pt-48 ${className}`}
    >
      <div className="font-poppins absolute inset-x-72 top-6 flex h-28 items-center justify-center text-base leading-[normal] tracking-[0px]" >
        <div className="flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch" >
          <div className="flex h-7 items-center justify-center gap-x-6 self-stretch text-left font-normal" >
            <div className="flex flex-grow items-center justify-center gap-x-6 self-stretch" >
              <div className="flex w-28 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
                <BusinessDashboard className="h-7 w-7" />
                <div className="self-stretch">Business</div>
              </div>
              <div className="flex w-28 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
                <VectorDashboard className="h-7 w-7" />
                <div className="w-20 self-stretch">Personal</div>
              </div>
              <div className="flex flex-grow items-center justify-end self-stretch pl-96 text-indigo-700" >
                <div className="flex flex-grow items-center justify-center gap-x-1.5 self-stretch" >
                  <Phone_in_talk className="h-7 w-7" />
                  <div className="self-stretch">1-800-356-6522</div>
                </div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center gap-x-1.5 self-stretch text-neutral-400" >
              <VectorDashboard1 className="h-6 w-7" />
              <div className="self-stretch">Sign up/Login</div>
            </div>
          </div>
          <div className="flex h-px flex-col items-center justify-center self-stretch pt-px" >
            <LineDashboard1 className="h-0 w-[1352px]" />
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
      <div className="relative flex flex-grow items-end self-stretch bg-neutral-100 pb-4 pl-12 pr-56 pt-24" >
        <div className="font-poppins relative flex flex-grow flex-col items-start justify-center gap-y-8 self-stretch font-semibold" >
          <div className="flex h-8 w-56 items-center justify-center gap-x-3 text-left text-[22px] leading-[normal] tracking-[0px] text-indigo-700" >
            <div className="flex h-3 w-7 flex-col items-end justify-center gap-y-2" >
              <div className="flex h-0.5 items-start self-stretch bg-indigo-700" />
              <div className="flex h-0.5 w-4 items-start bg-indigo-700" />
            </div>
            <div className="self-stretch">Account Balance</div>
          </div>
          <div className="flex flex-grow flex-col items-center justify-end self-stretch pt-96 text-left" >
            <div className="flex flex-grow flex-col items-start justify-center gap-y-1.5 self-stretch" >
              <div className="w-96 text-[28px] leading-[normal] tracking-wider text-neutral-600" >
                $4,500,093.00
              </div>
              <LineDashboard6 className="h-0 w-96" />
              <div className="text-[15px] leading-[normal] tracking-[0px] text-green-300" >
                Credit Balance
              </div>
              <div className="flex flex-grow pt-2 text-[28px] leading-[normal] tracking-wider text-neutral-600" >
                $4,501,263.00
              </div>
              <div className="flex h-0.5 flex-col items-center justify-center self-stretch pt-0.5" >
                <LineDashboard7 className="h-0 w-96" />
              </div>
              <div className="text-[15px] leading-[normal] tracking-[0px] text-red-400" >
                Ledger Balance
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-32 self-stretch text-base leading-[normal] tracking-[0px] text-white" >
            <div className="flex flex-grow items-center justify-center self-stretch text-left" >
              <div className="flex flex-grow items-center self-stretch rounded-[64px] bg-indigo-700 py-4 px-12" >
                Withdraw
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch text-center" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-[64px] bg-indigo-700 py-4 px-12" >
                Transfer
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins absolute left-12 top-40 h-8 w-96 text-left text-[27px] font-semibold leading-[normal] tracking-wider text-neutral-600" >
          Total Income & Account Statistics
        </div>
        <div className="absolute left-14 top-56 flex h-44 w-96 items-center justify-center gap-x-4 text-center tracking-[0px]" >
          <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
            <div className="bg-group-dashboard-6 flex h-36 w-36 items-center bg-cover bg-center pr-2 pt-1" >
              <div className="bg-vector-dashboard-thirteen flex flex-grow items-start self-stretch bg-cover bg-center pb-2 pl-2 pr-8 pt-1" >
                <VectorDashboardTwelve className="h-32 w-24" />
              </div>
            </div>
            <div className="font-poppins flex flex-col items-center justify-end pt-16 text-[13px] font-normal leading-[normal] text-neutral-500" >
              <div className="flex flex-grow justify-center self-stretch">
                Account Balance
              </div>
            </div>
            <div className="font-lato flex h-0 flex-col items-center justify-end pb-0 text-[42px] leading-[normal]" >
              <div className="flex justify-center self-stretch">
                <span>
                  <span className="font-medium text-stone-500">99</span>
                  <span className="font-light text-neutral-400">%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
            <div className="bg-vector-dashboard-eleven flex h-36 w-36 items-center justify-center bg-cover bg-center pr-1" >
              <div className="bg-vector-dashboard-ten flex flex-grow items-center justify-center self-stretch bg-cover bg-center py-2 pl-2 pr-1" >
                <div className="bg-vector-dashboard-nine flex h-32 w-32 items-center justify-end bg-cover bg-center pl-2" >
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="bg-vector-dashboard-eight flex h-28 w-28 items-center justify-end bg-cover bg-center pl-10" >
                      <VectorDashboardSeven className="h-28 w-20" />
                    </div>
                    <div className="flex w-2 items-center self-stretch">
                      <VectorDashboardSix className="ml-[-95.73px] h-32 w-24" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins flex flex-col items-center justify-end pt-16 text-[13px] font-normal leading-[normal] text-neutral-500" >
              <div className="flex flex-grow justify-center self-stretch">
                Withdrawals
              </div>
            </div>
            <div className="font-lato flex h-0 flex-col items-center justify-end pb-0 text-[42px] leading-[normal]" >
              <div className="flex justify-center self-stretch">
                <span>
                  <span className="font-medium text-stone-500">0.9</span>
                  <span className="font-light text-neutral-400">%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col items-start justify-center self-stretch" >
            <div className="bg-vector-dashboard-five flex h-36 w-36 items-center justify-end bg-cover bg-center pl-2" >
              <div className="bg-vector-dashboard-four ml-[-0.01px] flex flex-grow items-center self-stretch bg-cover bg-center py-2 pr-2" >
                <div className="bg-vector-dashboard-three flex h-32 w-32 items-start justify-center bg-cover bg-center pb-2 pt-px" >
                  <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                    <VectorDashboardOne className="z-[2] h-24 w-32" />
                    <div className="z-[1] flex h-6 w-28 flex-col items-center" >
                      <VectorDashboardTwo className="mt-[-96.51px] h-28 w-28" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins flex flex-col items-center justify-end pt-16 text-[13px] font-normal leading-[normal] text-neutral-500" >
              <div className="flex flex-grow justify-center self-stretch">
                Maintainance
              </div>
            </div>
            <div className="font-lato flex h-0 flex-col items-center justify-end pb-0 text-[42px] leading-[normal]" >
              <div className="flex justify-center self-stretch">
                <span>
                  <span className="font-medium text-stone-500">0.0</span>
                  <span className="font-light text-neutral-400">%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-poppins absolute bottom-80 left-24 h-11 w-96 text-left text-[13px] font-normal leading-[normal] tracking-[0px] text-neutral-300" >
          Your Account may be Blocked as no activity has taken place for a long time Plese Login to prevent this from Happening.
        </div>
        <EmojioneWarning className="absolute bottom-80 left-14 h-8 w-8" />
        <div className="absolute bottom-80 left-12 flex h-11 w-96 items-start rounded-md border border-solid border-neutral-300" />
      </div>
      <div className="absolute bottom-9 right-72 flex h-[813px] w-24 items-start bg-neutral-100" />
      <div className="absolute bottom-60 right-80 flex custom-width custom-height items-start">
        <div className="absolute inset-0 bg-[#C4C4C4]" />
        <div className="bg-background-1 absolute inset-0 bg-cover bg-center" />
      </div>

    </div>
  );
}

interface DashboardPageProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
