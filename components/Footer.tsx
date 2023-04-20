import Link from "next/link";
import Contact from "./Contact";
import {AiFillInstagram,AiFillFacebook,AiFillMail,AiFillPhone,AiOutlineCopyright} from "react-icons/ai"
const Footer = () => {
  return (
    <footer id="contact" className="flex py-8 relative mt-16 h-fit bg-white flex-col gap-y-4 w-full items-center">
        <svg className="absolute lg:-top-32 -top-10 sm:-top-16  xl:-top-36 rotate-180 w-full" viewBox="0 0 1440 207" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_378_2)">
      <path d="M0 82.7998L80 96.6139C160 110.259 320 138.141 480 138.014C640 138.141 800 110.259 960 110.386C1120 110.259 1280 138.141 1440 134.55C1600 130.959 1760 96.7406 1920 72.4498C2080 48.159 2240 34.6406 2400 48.2857C2560 62.0998 2720 103.5 2880 106.964C3040 110.259 3200 76.0406 3360 79.3357C3520 82.7998 3680 124.2 3840 148.364C4000 172.359 4160 179.541 4320 172.486C4480 165.6 4640 144.9 4800 138.014C4960 130.959 5120 138.141 5280 144.9C5440 151.659 5600 158.841 5760 155.25C5920 151.659 6080 138.141 6240 127.664C6400 117.441 6560 110.259 6720 117.314C6880 124.2 7040 144.9 7200 144.9C7360 144.9 7520 124.2 7680 131.086C7840 138.141 8000 172.359 8160 162.136C8320 151.659 8480 96.7406 8640 79.3357C8800 62.0998 8960 82.7998 9120 93.1498C9280 103.5 9440 103.5 9600 89.6857C9760 76.0406 9920 48.159 10080 48.2857C10240 48.159 10400 76.0406 10560 96.6139C10720 117.441 10880 130.959 11040 134.55C11200 138.141 11360 130.959 11440 127.664L11520 124.2V-0.000203809H11440C11360 -0.000203809 11200 -0.000203809 11040 -0.000203809C10880 -0.000203809 10720 -0.000203809 10560 -0.000203809C10400 -0.000203809 10240 -0.000203809 10080 -0.000203809C9920 -0.000203809 9760 -0.000203809 9600 -0.000203809C9440 -0.000203809 9280 -0.000203809 9120 -0.000203809C8960 -0.000203809 8800 -0.000203809 8640 -0.000203809C8480 -0.000203809 8320 -0.000203809 8160 -0.000203809C8000 -0.000203809 7840 -0.000203809 7680 -0.000203809C7520 -0.000203809 7360 -0.000203809 7200 -0.000203809C7040 -0.000203809 6880 -0.000203809 6720 -0.000203809C6560 -0.000203809 6400 -0.000203809 6240 -0.000203809C6080 -0.000203809 5920 -0.000203809 5760 -0.000203809C5600 -0.000203809 5440 -0.000203809 5280 -0.000203809C5120 -0.000203809 4960 -0.000203809 4800 -0.000203809C4640 -0.000203809 4480 -0.000203809 4320 -0.000203809C4160 -0.000203809 4000 -0.000203809 3840 -0.000203809C3680 -0.000203809 3520 -0.000203809 3360 -0.000203809C3200 -0.000203809 3040 -0.000203809 2880 -0.000203809C2720 -0.000203809 2560 -0.000203809 2400 -0.000203809C2240 -0.000203809 2080 -0.000203809 1920 -0.000203809C1760 -0.000203809 1600 -0.000203809 1440 -0.000203809C1280 -0.000203809 1120 -0.000203809 960 -0.000203809C800 -0.000203809 640 -0.000203809 480 -0.000203809C320 -0.000203809 160 -0.000203809 80 -0.000203809H0V82.7998Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_378_2">
      <rect className="h-full w-full" fill="white" transform="matrix(1 0 0 -1 0 207)"/>
      </clipPath>
      </defs>
      </svg>
        <div className="w-full  grid grid-rows-2 lg:pl-20 px-8 lg:flex relative z-[3] gap-y-8 justify-center lg:justify-between items-center">
        <ul className="items-center lg:justify-start justify-evenly lg:px-0 px-8 gap-x-48 lg:h-full  w-full text-xl flex text-dark-brown font-Amaranth ">
          <li>
            <Link href={"/"} className="relative cursor-pointer group">
              Home
              <span className="absolute group-focus:w-full group-hover:w-full transition-all duration-500 ease-in-out -bottom-4 w-0 bg-dark-brown h-1 left-0"></span>
            </Link>
          </li>
          <li>
            <Link href={"/plants"} className="relative cursor-pointer group">
              Plants
              <span className="absolute group-focus:w-full group-hover:w-full transition-all duration-500 ease-in-out -bottom-4 w-0 bg-dark-brown h-1 left-0"></span>
            </Link>
          </li>
        </ul>
        {/* social media */}
        <div className="lg:h-28 lg:p-4 flex justify-between max-w-xl items-center  gap-x-8 w-full">
        <a href="https://www.instagram.com/ophin.club/" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className="lg:text-5xl text-3xl transition-transform duration-500 ease-in-out hover:-translate-y-2 text-white p-2 lg:p-4 rounded-full lg:h-16 lg:w-16 h-12 w-12 bg-dark-brown" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100090693424521" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook className="lg:text-5xl text-3xl transition-transform duration-500 ease-in-out hover:-translate-y-2 text-white p-2 lg:p-4 rounded-full lg:h-16 lg:w-16 h-12 w-12 bg-dark-brown" />
        </a>
        <a href="tel:+2130558354076">
        <AiFillPhone className="lg:text-5xl text-3xl transition-transform duration-500 ease-in-out hover:-translate-y-2 text-white p-2 lg:p-4 rounded-full lg:h-16 lg:w-16 h-12 w-12 bg-dark-brown" />
        </a>
        <a href="mailto:ophinclub2023@gmail.com" >
        <AiFillMail className="lg:text-5xl text-3xl transition-transform duration-500 ease-in-out hover:-translate-y-2 text-white p-2 lg:p-4 rounded-full lg:h-16 lg:w-16 h-12 w-12 bg-dark-brown" />
        </a>
      </div>
      </div>
      <div className="w-full place-items-center lg:place-items-end lg:pr-8  grid lg:grid-cols-2">
      <Contact />
      <svg className=" bottom-0 relative z-[3] max-w-xl left-0" viewBox="0 0 2005 1730" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1358.29 339.822H67.7832V1615.21H1358.29V339.822Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M665.256 474.123H584.217V566.418H665.256V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M636.799 474.123H584.217V566.418H636.799V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M630.258 513.326H590.121V556.649H630.258V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M596.789 474.123H515.75V566.418H596.789V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M568.332 474.123H515.75V566.418H568.332V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M561.79 513.326H521.652V556.649H561.79V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.846 430.588H450.807V566.418H531.846V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M503.389 430.588H450.807V566.418H503.389V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M496.848 488.309H456.711V552.061H496.848V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M463.379 430.588H382.34V566.418H463.379V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.922 430.588H382.34V566.418H434.922V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M428.381 488.309H388.244V552.061H428.381V488.309Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M403.152 474.123H322.113V566.418H403.152V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M374.695 474.123H322.113V566.418H374.695V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M368.155 513.326H328.018V556.649H368.155V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M334.686 474.123H253.646V566.418H334.686V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M306.229 474.123H253.646V566.418H306.229V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.688 513.326H259.551V556.649H299.688V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M269.744 430.588H188.705V566.418H269.744V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.287 430.588H188.705V566.418H241.287V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M234.745 488.309H194.607V552.061H234.745V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201.276 430.588H120.236V566.418H201.276V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M172.818 430.588H120.236V566.418H172.818V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M166.278 488.309H126.141V552.061H166.278V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1295.69 474.123H1214.65V566.418H1295.69V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1267.23 474.123H1214.65V566.418H1267.23V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1260.69 513.326H1220.55V556.649H1260.69V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1227.22 474.123H1146.18V566.418H1227.22V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1198.76 474.123H1146.18V566.418H1198.76V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1192.22 513.326H1152.09V556.649H1192.22V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1162.28 430.588H1081.24V566.418H1162.28V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1133.82 430.588H1081.24V566.418H1133.82V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1127.28 488.309H1087.14V552.061H1127.28V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1093.81 430.588H1012.77V566.418H1093.81V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1065.36 430.588H1012.77V566.418H1065.36V430.588Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1058.81 488.309H1018.68V552.061H1058.81V488.309Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1033.63 474.123H952.588V566.418H1033.63V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1005.17 474.123H952.588V566.418H1005.17V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M998.587 513.326H958.449V556.649H998.587V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M965.117 474.123H884.078V566.418H965.117V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M936.66 474.123H884.078V566.418H936.66V474.123Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M930.12 513.326H889.982V556.649H930.12V513.326Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M900.219 430.588H819.18V566.418H900.219V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M871.762 430.588H819.18V566.418H871.762V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M865.178 488.309H825.041V552.061H865.178V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M831.709 430.588H750.67V566.418H831.709V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M803.252 430.588H750.67V566.418H803.252V430.588Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M796.712 488.309H756.574V552.061H796.712V488.309Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M665.256 1190.27H584.217V1282.56H665.256V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M636.799 1190.27H584.217V1282.56H636.799V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M630.258 1229.47H590.121V1272.79H630.258V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M596.789 1190.27H515.75V1282.56H596.789V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M568.332 1190.27H515.75V1282.56H568.332V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M561.79 1229.47H521.652V1272.79H561.79V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.846 1146.73H450.807V1282.56H531.846V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M503.389 1146.73H450.807V1282.56H503.389V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M496.848 1204.41H456.711V1268.16H496.848V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M463.379 1146.73H382.34V1282.56H463.379V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M434.922 1146.73H382.34V1282.56H434.922V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M428.381 1204.41H388.244V1268.16H428.381V1204.41Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M403.152 1190.27H322.113V1282.56H403.152V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M374.695 1190.27H322.113V1282.56H374.695V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M368.155 1229.47H328.018V1272.79H368.155V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M334.686 1190.27H253.646V1282.56H334.686V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M306.229 1190.27H253.646V1282.56H306.229V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M299.688 1229.47H259.551V1272.79H299.688V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M269.744 1146.73H188.705V1282.56H269.744V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M241.287 1146.73H188.705V1282.56H241.287V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M234.745 1204.41H194.607V1268.16H234.745V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M201.276 1146.73H120.236V1282.56H201.276V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M172.818 1146.73H120.236V1282.56H172.818V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M166.278 1204.41H126.141V1268.16H166.278V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1295.69 1190.27H1214.65V1282.56H1295.69V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1267.23 1190.27H1214.65V1282.56H1267.23V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1260.69 1229.47H1220.55V1272.79H1260.69V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1227.22 1190.27H1146.18V1282.56H1227.22V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1198.76 1190.27H1146.18V1282.56H1198.76V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1192.22 1229.47H1152.09V1272.79H1192.22V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1162.28 1146.73H1081.24V1282.56H1162.28V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1133.82 1146.73H1081.24V1282.56H1133.82V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1127.28 1204.41H1087.14V1268.16H1127.28V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1093.81 1146.73H1012.77V1282.56H1093.81V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1065.36 1146.73H1012.77V1282.56H1065.36V1146.73Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1058.81 1204.41H1018.68V1268.16H1058.81V1204.41Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1033.63 1190.27H952.588V1282.56H1033.63V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1005.17 1190.27H952.588V1282.56H1005.17V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M998.587 1229.47H958.449V1272.79H998.587V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M965.117 1190.27H884.078V1282.56H965.117V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M936.66 1190.27H884.078V1282.56H936.66V1190.27Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M930.12 1229.47H889.982V1272.79H930.12V1229.47Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M900.219 1146.73H819.18V1282.56H900.219V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M871.762 1146.73H819.18V1282.56H871.762V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M865.178 1204.41H825.041V1268.16H865.178V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M831.709 1146.73H750.67V1282.56H831.709V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M803.252 1146.73H750.67V1282.56H803.252V1146.73Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M796.712 1204.41H756.574V1268.16H796.712V1204.41Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M120.746 701.779H147.887C153.992 701.779 159.847 704.205 164.165 708.522C168.482 712.839 170.907 718.694 170.907 724.8V803.291H97.8105V724.8C97.8105 718.709 100.224 712.867 104.523 708.552C108.822 704.237 114.655 701.802 120.746 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.946 673.449H120.832V701.779H150.946V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.945 732.488H103.715V779.719H150.945V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207.011 701.779H234.151C240.257 701.779 246.112 704.205 250.429 708.522C254.746 712.839 257.172 718.694 257.172 724.8V803.291H183.99V724.8C183.99 721.777 184.586 718.783 185.743 715.99C186.899 713.197 188.595 710.66 190.733 708.522C192.87 706.384 195.408 704.689 198.201 703.532C200.994 702.375 203.988 701.779 207.011 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.123 673.449H207.01V701.779H237.123V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.123 732.488H189.893V779.719H237.123V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.189 647.457H320.372C326.47 647.468 332.314 649.899 336.622 654.215C340.93 658.531 343.35 664.38 343.35 670.478V803.292H270.168V670.478C270.168 664.372 272.593 658.517 276.911 654.2C281.228 649.882 287.083 647.457 293.189 647.457Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.303 619.127H293.189V647.457H323.303V619.127Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.303 678.164H276.072V779.675H323.303V678.164Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M379.368 701.779H406.509C412.614 701.779 418.47 704.205 422.787 708.522C427.104 712.839 429.529 718.694 429.529 724.8V803.291H356.348V724.8C356.348 718.694 358.773 712.839 363.09 708.522C367.407 704.205 373.263 701.779 379.368 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M409.481 673.449H379.367V701.779H409.481V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M409.48 732.488H362.25V779.719H409.48V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M465.546 701.779H492.686C498.792 701.779 504.647 704.205 508.964 708.522C513.282 712.839 515.707 718.694 515.707 724.8V803.291H442.525V724.8C442.525 718.694 444.951 712.839 449.268 708.522C453.585 704.205 459.441 701.779 465.546 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M495.659 673.449H465.545V701.779H495.659V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M495.66 732.488H448.43V779.719H495.66V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.766 673.449H578.907C585.012 673.449 590.867 675.875 595.185 680.192C599.502 684.509 601.927 690.364 601.927 696.47V803.333H528.703V696.47C528.703 693.443 529.3 690.446 530.46 687.65C531.619 684.855 533.319 682.315 535.461 680.177C537.603 678.039 540.146 676.344 542.944 675.189C545.741 674.035 548.739 673.444 551.766 673.449Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M581.881 645.121H551.768V673.451H581.881V645.121Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M581.838 704.115H534.607V779.675H581.838V704.115Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M780.996 701.78H808.136C814.242 701.78 820.097 704.205 824.414 708.522C828.731 712.839 831.157 718.695 831.157 724.8V803.291H757.848V724.8C757.848 721.766 758.447 718.762 759.612 715.961C760.777 713.16 762.484 710.616 764.635 708.477C766.786 706.338 769.339 704.645 772.147 703.495C774.955 702.346 777.962 701.763 780.996 701.78Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M811.11 673.449H780.996V701.779H811.11V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M811.109 732.488H763.879V779.719H811.109V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M867.175 701.779H894.315C900.421 701.779 906.276 704.205 910.593 708.522C914.911 712.839 917.336 718.694 917.336 724.8V803.291H844.154V724.8C844.154 718.694 846.58 712.839 850.897 708.522C855.214 704.205 861.069 701.779 867.175 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M897.287 673.449H867.174V701.779H897.287V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M897.287 732.488H850.057V779.719H897.287V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M953.226 647.457H980.366C986.472 647.457 992.327 649.882 996.644 654.2C1000.96 658.517 1003.39 664.372 1003.39 670.478V803.292H930.375V670.478C930.375 664.401 932.777 658.572 937.057 654.259C941.338 649.947 947.15 647.502 953.226 647.457Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M983.508 619.127H953.395V647.457H983.508V619.127Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M983.508 678.164H936.277V779.675H983.508V678.164Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1039.57 701.779H1066.71C1069.74 701.779 1072.73 702.375 1075.52 703.532C1078.32 704.689 1080.85 706.384 1082.99 708.522C1085.13 710.66 1086.83 713.197 1087.98 715.99C1089.14 718.783 1089.73 721.777 1089.73 724.8V803.291H1016.55V724.8C1016.55 718.694 1018.98 712.839 1023.3 708.522C1027.61 704.205 1033.47 701.779 1039.57 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1069.69 673.449H1039.57V701.779H1069.69V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1069.69 732.488H1022.46V779.719H1069.69V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1125.75 701.779H1152.85C1155.87 701.779 1158.87 702.375 1161.66 703.532C1164.45 704.689 1166.99 706.384 1169.13 708.522C1171.27 710.66 1172.96 713.197 1174.12 715.99C1175.28 718.783 1175.87 721.777 1175.87 724.8V803.291H1102.73V724.8C1102.73 718.694 1105.16 712.839 1109.47 708.522C1113.79 704.205 1119.65 701.779 1125.75 701.779Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1155.87 673.449H1125.75V701.779H1155.87V673.449Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1155.87 732.488H1108.63V779.719H1155.87V732.488Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1211.93 673.449H1239.07C1245.18 673.449 1251.03 675.875 1255.35 680.192C1259.67 684.509 1262.09 690.364 1262.09 696.47V803.333H1188.91V696.47C1188.91 690.364 1191.34 684.509 1195.65 680.192C1199.97 675.875 1205.83 673.449 1211.93 673.449Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1242.04 645.121H1211.93V673.451H1242.04V645.121Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1242.04 704.115H1194.81V779.675H1242.04V704.115Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M120.746 1424.04H147.887C153.992 1424.04 159.847 1426.46 164.165 1430.78C168.482 1435.1 170.907 1440.95 170.907 1447.06V1525.55H97.8105V1447.06C97.8105 1440.97 100.224 1435.13 104.523 1430.81C108.822 1426.5 114.655 1424.06 120.746 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.946 1395.71H120.832V1424.04H150.946V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150.945 1454.71H103.715V1501.94H150.945V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M207.011 1424.04H234.151C240.257 1424.04 246.112 1426.46 250.429 1430.78C254.746 1435.1 257.172 1440.95 257.172 1447.06V1525.55H183.99V1447.06C183.99 1444.04 184.586 1441.04 185.743 1438.25C186.899 1435.46 188.595 1432.92 190.733 1430.78C192.87 1428.64 195.408 1426.95 198.201 1425.79C200.994 1424.63 203.988 1424.04 207.011 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.123 1395.71H207.01V1424.04H237.123V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M237.123 1454.71H189.893V1501.94H237.123V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M293.189 1369.72H320.372C326.477 1369.72 332.332 1372.14 336.65 1376.46C340.967 1380.78 343.392 1386.63 343.392 1392.74V1525.55H270.168V1392.74C270.168 1386.63 272.593 1380.78 276.911 1376.46C281.228 1372.14 287.083 1369.72 293.189 1369.72Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.303 1341.39H293.189V1369.72H323.303V1341.39Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M323.303 1400.42H276.072V1501.94H323.303V1400.42Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M379.368 1424.04H406.509C412.614 1424.04 418.47 1426.46 422.787 1430.78C427.104 1435.1 429.529 1440.95 429.529 1447.06V1525.55H356.348V1447.06C356.348 1440.95 358.773 1435.1 363.09 1430.78C367.407 1426.46 373.263 1424.04 379.368 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M409.481 1395.71H379.367V1424.04H409.481V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M409.48 1454.71H362.25V1501.94H409.48V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M465.546 1424.04H492.686C498.792 1424.04 504.647 1426.46 508.964 1430.78C513.282 1435.1 515.707 1440.95 515.707 1447.06V1525.55H442.525V1447.06C442.525 1440.95 444.951 1435.1 449.268 1430.78C453.585 1426.46 459.441 1424.04 465.546 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M495.659 1395.71H465.545V1424.04H495.659V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M495.66 1454.71H448.43V1501.94H495.66V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M551.766 1395.71H578.907C585.012 1395.71 590.867 1398.14 595.185 1402.45C599.502 1406.77 601.927 1412.63 601.927 1418.73V1525.59H528.703V1418.73C528.703 1415.7 529.3 1412.71 530.46 1409.91C531.619 1407.12 533.319 1404.58 535.461 1402.44C537.603 1400.3 540.146 1398.61 542.944 1397.45C545.741 1396.3 548.739 1395.71 551.766 1395.71Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M581.881 1367.38H551.768V1395.71H581.881V1367.38Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M581.838 1426.38H534.607V1501.94H581.838V1426.38Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M780.996 1424.04H808.136C814.242 1424.04 820.097 1426.46 824.414 1430.78C828.731 1435.1 831.157 1440.95 831.157 1447.06V1525.55H757.848V1447.06C757.848 1444.03 758.447 1441.02 759.612 1438.22C760.777 1435.42 762.484 1432.88 764.635 1430.74C766.786 1428.6 769.339 1426.9 772.147 1425.76C774.955 1424.61 777.962 1424.02 780.996 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M811.11 1395.71H780.996V1424.04H811.11V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M811.109 1454.71H763.879V1501.94H811.109V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M867.175 1424.04H894.315C900.421 1424.04 906.276 1426.46 910.593 1430.78C914.911 1435.1 917.336 1440.95 917.336 1447.06V1525.55H844.154V1447.06C844.154 1440.95 846.58 1435.1 850.897 1430.78C855.214 1426.46 861.069 1424.04 867.175 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M897.287 1395.71H867.174V1424.04H897.287V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M897.287 1454.71H850.057V1501.94H897.287V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M953.226 1369.72H980.366C986.472 1369.72 992.327 1372.14 996.644 1376.46C1000.96 1380.78 1003.39 1386.63 1003.39 1392.74V1525.55H930.375V1392.74C930.375 1386.66 932.777 1380.83 937.057 1376.52C941.338 1372.21 947.15 1369.76 953.226 1369.72Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M983.508 1341.39H953.395V1369.72H983.508V1341.39Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M983.508 1400.42H936.277V1501.94H983.508V1400.42Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1039.57 1424.04H1066.71C1069.74 1424.04 1072.73 1424.63 1075.52 1425.79C1078.32 1426.95 1080.85 1428.64 1082.99 1430.78C1085.13 1432.92 1086.83 1435.46 1087.98 1438.25C1089.14 1441.04 1089.73 1444.04 1089.73 1447.06V1525.55H1016.55V1447.06C1016.55 1440.95 1018.98 1435.1 1023.3 1430.78C1027.61 1426.46 1033.47 1424.04 1039.57 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1069.69 1395.71H1039.57V1424.04H1069.69V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1069.69 1454.71H1022.46V1501.94H1069.69V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1125.75 1424.04H1152.85C1155.87 1424.04 1158.87 1424.63 1161.66 1425.79C1164.45 1426.95 1166.99 1428.64 1169.13 1430.78C1171.27 1432.92 1172.96 1435.46 1174.12 1438.25C1175.28 1441.04 1175.87 1444.04 1175.87 1447.06V1525.55H1102.73V1447.06C1102.73 1440.95 1105.16 1435.1 1109.47 1430.78C1113.79 1426.46 1119.65 1424.04 1125.75 1424.04Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1155.87 1395.71H1125.75V1424.04H1155.87V1395.71Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1155.87 1454.71H1108.63V1501.94H1155.87V1454.71Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1211.93 1395.71H1239.07C1245.18 1395.71 1251.03 1398.14 1255.35 1402.45C1259.67 1406.77 1262.09 1412.63 1262.09 1418.73V1525.59H1188.91V1418.73C1188.91 1412.63 1191.34 1406.77 1195.65 1402.45C1199.97 1398.14 1205.83 1395.71 1211.93 1395.71Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1242.04 1367.38H1211.93V1395.71H1242.04V1367.38Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1242.04 1426.38H1194.81V1501.94H1242.04V1426.38Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M171.332 897.328H104.012L120.831 1041.82H154.513L171.332 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M118.156 1018.84L120.832 1041.82H154.513L157.189 1018.84H118.156Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M149.969 925.232H122.064V994.209H149.969V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253.476 897.328H186.113L202.975 1041.82H236.614L253.476 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M200.299 1018.84L202.975 1041.82H236.614L239.289 1018.84H200.299Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M232.112 925.232H204.207V994.209H232.112V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M335.578 897.328H268.215L285.077 1041.82H318.716L335.578 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M282.4 1018.84L285.076 1041.82H318.715L321.433 1018.84H282.4Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M314.214 925.232H286.309V994.209H314.214V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M417.678 897.328H350.357L367.177 1041.82H400.858L417.678 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M364.502 1018.84L367.178 1041.82H400.859L403.535 1018.84H364.502Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M396.313 925.232H368.408V994.209H396.313V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M508.699 964.648H437.514V989.283H508.699V964.648Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M519.529 989.281H426.725V1043.48H519.529V989.281Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M506.448 1000.79H439.723V1032.01H506.448V1000.79Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M613.82 964.648H542.635V989.283H613.82V964.648Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M624.609 989.281H531.805V1043.48H624.609V989.281Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M611.569 1000.79H544.844V1032.01H611.569V1000.79Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M828.227 897.328H760.906L777.726 1041.82H811.407L828.227 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M775.049 1018.84L777.725 1041.82H811.406L814.082 1018.84H775.049Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M806.862 925.232H778.957V994.209H806.862V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M910.371 897.328H843.008L859.87 1041.82H893.509L910.371 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M857.193 1018.84L859.869 1041.82H893.508L896.184 1018.84H857.193Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M889.005 925.232H861.1V994.209H889.005V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M992.471 897.328H925.15L941.97 1041.82H975.651L992.471 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M939.293 1018.84L941.969 1041.82H975.65L978.326 1018.84H939.293Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M971.106 925.232H943.201V994.209H971.106V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1074.57 897.328H1007.25L1024.07 1041.82H1057.75L1074.57 897.328Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1021.39 1018.84L1024.07 1041.82H1057.75L1060.43 1018.84H1021.39Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1053.21 925.232H1025.3V994.209H1053.21V925.232Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1165.59 964.648H1094.41V989.283H1165.59V964.648Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1176.42 989.281H1083.62V1043.48H1176.42V989.281Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1163.38 1000.79H1096.66V1032.01H1163.38V1000.79Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1270.71 964.648H1199.53V989.283H1270.71V964.648Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1281.5 989.281H1188.7V1043.48H1281.5V989.281Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1268.46 1000.79H1201.74V1032.01H1268.46V1000.79Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1357.11 592.155V561.404L75.1737 561.404V592.155L1357.11 592.155Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1357.15 831.919V801.168L75.2148 801.168V831.919L1357.15 831.919Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1357.11 1071.72V1040.97H75.1737V1071.72H1357.11Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1357.11 1311.53V1280.78H75.1737V1311.53H1357.11Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1357.15 1548.74V1517.99H75.2147V1548.74H1357.15Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M81.3308 380.043H50.5801V1622.01H81.3308V380.043Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M726.927 380.043H696.176V1622.01H726.927V380.043Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1372.52 380.043H1341.77V1622.01H1372.52V380.043Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1384.8 250.925H19.8301V383.102H1384.8V250.925Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M985.164 250.925H419.504V383.102H985.164V250.925Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M258.573 301.553H229.988V272.926H200.512V301.553H171.885V331.029H200.512V359.614H229.988V331.029H258.573V301.553Z" fill="white"/>
<path d="M1224.33 301.553H1195.75V272.926H1166.27V301.553H1137.64V331.029H1166.27V359.614H1195.75V331.029H1224.33V301.553Z" fill="white"/>
<path d="M508.019 271.227C522.63 271.227 528.874 279.721 528.874 293.95V305.205C528.874 319.944 521.993 327.631 507.212 327.631H498.08V364.328H487.717V271.227H508.019ZM507.255 318.245C514.985 318.245 518.68 314.677 518.68 305.757V293.398C518.68 284.903 515.622 280.656 508.062 280.656H498.123V318.245H507.255Z" fill="#A5725E"/>
<path d="M547.774 322.195V364.073H537.41V271.227H547.774V313.063H570.624V271.227H580.988V364.243H570.624V322.195H547.774Z" fill="#A5725E"/>
<path d="M602.097 345.513L598.529 364.243H588.973L606.769 271.227H621.932L639.728 364.243H629.365L625.797 345.513H602.097ZM603.456 336.593H624.183L613.65 282.907L603.456 336.593Z" fill="#A5725E"/>
<path d="M668.399 271.227C683.053 271.227 689.126 278.659 689.126 292.463V300.066C689.126 310.302 685.559 316.673 677.574 319.179C686.068 321.727 689.296 328.608 689.296 338.589V353.073C688.992 356.889 689.619 360.722 691.123 364.243H680.632C679.188 360.662 678.606 356.792 678.933 352.945V338.335C678.933 327.844 674.006 324.488 665.384 324.488H658.036V364.243H647.715V271.227H668.399ZM665.766 315.059C674.006 315.059 678.933 312.426 678.933 302.317V293.398C678.933 284.903 675.875 280.656 668.145 280.656H658.036V315.059H665.766Z" fill="#A5725E"/>
<path d="M734.318 364.116H724.379L708.961 290.085V364.243H699.914V271.227H714.398L729.688 345.513L744.426 271.227H758.91V364.243H749.098V289.448L734.318 364.116Z" fill="#A5725E"/>
<path d="M780.061 345.513L776.451 364.243H766.895L784.691 271.227H799.726L817.523 364.243H807.159L803.549 345.513H780.061ZM781.378 336.593H802.105L791.826 282.907L781.378 336.593Z" fill="#A5725E"/>
<path d="M866.664 293.696V302.19H856.853V293.271C856.853 284.776 853.54 279.849 845.937 279.849C838.335 279.849 835.064 284.904 835.064 293.271V342.455C835.064 350.95 838.505 355.834 845.937 355.834C853.37 355.834 856.853 350.823 856.853 342.455V330.35H866.664V341.903C866.664 356.004 860.039 365.306 845.683 365.306C831.327 365.306 824.828 356.004 824.828 341.903V293.696C824.828 279.595 831.454 270.293 845.683 270.293C859.911 270.293 866.664 279.722 866.664 293.696Z" fill="#A5725E"/>
<path d="M891.13 330.689L871.465 271.227H882.253L896.736 316.928L911.347 271.227H921.159L901.366 330.689V364.073H891.13V330.689Z" fill="#A5725E"/>
<path d="M1901.57 366.07H1451.48V1037.49H1901.57V366.07Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1740.47 536.772L1586.76 631.87C1578.93 636.716 1570.22 639.974 1561.14 641.455C1552.05 642.936 1542.76 642.612 1533.8 640.502C1524.84 638.392 1516.38 634.536 1508.91 629.156C1501.44 623.776 1495.1 616.977 1490.26 609.146C1480.48 593.341 1477.39 574.301 1481.65 556.212C1485.91 538.124 1497.18 522.468 1512.98 512.689L1666.78 417.549C1682.59 407.771 1701.64 404.672 1719.73 408.933C1737.83 413.195 1753.49 424.467 1763.28 440.272C1768.12 448.105 1771.37 456.815 1772.85 465.905C1774.32 474.995 1773.99 484.287 1771.87 493.249C1769.75 502.211 1765.89 510.668 1760.5 518.136C1755.11 525.603 1748.31 531.936 1740.47 536.772Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1666.78 417.549L1588.37 466.096L1662.15 585.276L1740.56 536.772C1748.38 531.928 1755.18 525.589 1760.56 518.118C1765.94 510.646 1769.79 502.189 1771.9 493.228C1774.01 484.267 1774.34 474.979 1772.86 465.892C1771.38 456.806 1768.12 448.1 1763.28 440.272C1758.43 432.444 1752.1 425.646 1744.62 420.268C1737.15 414.889 1728.7 411.035 1719.73 408.925C1710.77 406.815 1701.49 406.49 1692.4 407.97C1683.31 409.45 1674.61 412.705 1666.78 417.549Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1785.02 830.899L1614.28 771.436C1605.59 768.42 1597.57 763.719 1590.69 757.603C1583.81 751.487 1578.21 744.075 1574.2 735.792C1570.18 727.508 1567.85 718.515 1567.31 709.326C1566.78 700.138 1568.06 690.934 1571.09 682.242C1574.1 673.546 1578.8 665.53 1584.92 658.652C1591.03 651.774 1598.45 646.169 1606.73 642.157C1615.01 638.146 1624.01 635.806 1633.2 635.272C1642.38 634.738 1651.59 636.021 1660.28 639.046L1831.02 698.509C1848.58 704.61 1862.99 717.434 1871.09 734.161C1879.19 750.888 1880.32 770.147 1874.22 787.703C1868.12 805.258 1855.29 819.671 1838.57 827.772C1821.84 835.873 1802.58 836.997 1785.02 830.899Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1831.02 698.467L1743.91 668.184L1697.91 800.616L1785.02 830.899C1802.58 836.999 1821.85 835.873 1838.58 827.768C1855.31 819.663 1868.14 805.244 1874.24 787.682C1880.34 770.121 1879.21 750.855 1871.11 734.124C1863 717.393 1848.58 704.567 1831.02 698.467Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1809.79 889.938H1831.49" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1517.91 889.938H1785.83" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1517.91 937.889H1831.49" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1571.51 985.885H1831.49" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1517.91 985.885H1540.04" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1710.87 827.246H1731.89" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1506.82 664.914V827.247H1683.89" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1803.8 423.027H1783.54" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1853.62 683.347V423.027H1827.75" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1621.2 421.414H1503.13V498.886" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1184.28 941.797C1167.72 960.061 1106.51 962.652 1052.83 962.439C999.141 962.227 930.929 931.901 908.121 899.324C885.313 866.747 931.354 800.276 939.424 784.858C947.494 769.44 950.722 693.71 996.975 671.497C1043.23 649.283 1140.62 660.836 1172.26 684.239C1203.91 707.641 1270.59 748.543 1281.46 789.02C1292.33 829.498 1254.41 829.965 1251.18 831.919C1247.95 833.872 1242.68 835.784 1234.53 851.244C1232.05 855.761 1228.47 859.577 1224.12 862.332C1219.76 865.088 1214.78 866.695 1209.64 867.002L1184.28 941.797Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1234.27 776.66C1265.02 784.773 1285.24 794.669 1269.91 805.457" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1110.38 755.424C1110.38 755.424 1171.03 762.092 1218.81 772.753" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1084.21 745.486C1084.21 745.486 1162.07 719.535 1235.97 751.475" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1174.72 709.85C1178.57 710.824 1182.34 712.059 1186.02 713.545" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1056.27 737.5C1056.27 737.5 1103.29 705.263 1153.23 706.877" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M935.812 893.207C930.224 895.204 924.423 896.544 918.525 897.2" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1076.4 779.422C1076.4 779.422 1020.5 835.317 984.572 865.261C974.161 874.058 962.671 881.494 950.381 887.389" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1040.3 767.443C1040.3 767.443 982.406 833.32 930.504 853.112" stroke="#545454" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1573.34 1534.9C1573.34 1534.9 1593.34 1552.95 1595.98 1558.09C1598.61 1563.23 1608.42 1585.14 1604.81 1585.69C1601.2 1586.25 1592.49 1572.27 1589.9 1566.41C1587.31 1560.55 1577.16 1545.18 1577.16 1545.18L1573.34 1534.9Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1560.81 1522.2C1560.81 1522.2 1574.61 1534.94 1577.25 1540.08C1579.88 1545.22 1592.2 1591.6 1592.2 1591.6C1592.2 1591.6 1586.25 1596.35 1582.09 1594.06C1577.93 1591.77 1563.36 1545.94 1563.36 1545.94L1560.81 1522.2Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1529.42 1502.19C1529.42 1502.19 1554.65 1515.49 1560.81 1522.2C1566.97 1528.91 1576.74 1584.5 1578.69 1589.6C1580.64 1594.7 1568.96 1598.48 1566.2 1596.23C1563.44 1593.98 1552.1 1545.43 1552.1 1545.43L1529.34 1508.65L1529.42 1502.19Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1469.53 1496.03L1517.27 1496.97C1521.34 1497.06 1525.33 1498.08 1528.93 1499.97C1532.54 1501.86 1535.65 1504.55 1538.04 1507.84L1558.09 1535.7L1561.53 1591.13C1561.56 1591.82 1561.45 1592.51 1561.2 1593.16C1560.95 1593.81 1560.57 1594.4 1560.08 1594.89C1559.6 1595.38 1559.02 1595.77 1558.37 1596.03C1557.73 1596.29 1557.04 1596.42 1556.35 1596.4C1555.28 1596.33 1554.26 1595.94 1553.42 1595.27C1552.58 1594.6 1551.97 1593.69 1551.68 1592.66L1537.79 1542.54L1519.57 1534.05C1519.57 1534.05 1491.66 1549.34 1492.26 1552.23C1492.85 1555.11 1508.48 1574.44 1511.88 1578.86C1515.28 1583.27 1523.56 1590.83 1521.22 1595.04C1518.89 1599.24 1504.74 1595.04 1499.99 1591.94C1495.23 1588.84 1469.28 1556.22 1459.55 1549.46C1449.83 1542.71 1439.38 1535.66 1439.38 1535.66L1469.53 1496.03Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1461 1508.86L1454.5 1544.75L1443.62 1536.04L1461 1508.86Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1254.79 1044.62C1254.79 1044.62 1297.73 1056.09 1303.76 1084.13C1309.79 1112.16 1336.34 1388.28 1336.34 1388.28L1478.62 1480.74L1435.55 1547.21L1300.45 1520.67L1221.32 1035.75L1254.79 1044.62Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1336.34 1388.28C1336.34 1388.28 1317.52 1398.22 1310.85 1407.14" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1278.15 1109.1L1316.12 1619.37L836.553 1599.84C836.553 1599.84 850.059 1072.66 855.836 1061.36C861.612 1050.06 908.163 1044.67 946.601 1032.6C985.04 1020.54 1053.59 997.521 1053.59 997.521L1143.81 1001.34C1169.03 1002.45 1273.31 1051.17 1273.14 1055.37" fill="white"/>
<path d="M1278.15 1109.1L1316.12 1619.37L836.553 1599.84C836.553 1599.84 850.059 1072.66 855.836 1061.36C861.612 1050.06 908.163 1044.67 946.601 1032.6C985.04 1020.54 1053.59 997.521 1053.59 997.521L1143.81 1001.34C1169.03 1002.45 1273.31 1051.17 1273.14 1055.37" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1282.52 1209.8H1234.91V1228.24H1282.52V1209.8Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1003.01 1018.21L1007.51 1206.92L1061.7 1219.79L1031.17 1267.95L1107.32 1479.77" fill="white"/>
<path d="M1003.01 1018.21L1007.51 1206.92L1061.7 1219.79L1031.17 1267.95L1107.32 1479.77" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1164.62 1007.29C1164.62 1007.29 1214.86 1111.61 1229.18 1145.92C1243.49 1180.24 1249.35 1191.03 1249.35 1191.03L1213.5 1215.84L1250.16 1244.8L1215.88 1428.63" fill="white"/>
<path d="M1164.62 1007.29C1164.62 1007.29 1214.86 1111.61 1229.18 1145.92C1243.49 1180.24 1249.35 1191.03 1249.35 1191.03L1213.5 1215.84L1250.16 1244.8L1215.88 1428.63" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1021.18 1010.26C1021.18 1010.26 1093.81 1205.26 1099.55 1267.61C1105.28 1329.96 1119.3 1614.96 1119.3 1614.96L1212.74 1619.21C1212.74 1619.21 1209.26 1334.63 1194.9 1228.79C1180.54 1122.95 1160.11 1034.56 1156.38 1023.9C1153.09 1015.84 1148.81 1008.22 1143.63 1001.22L1085.96 992.723L1021.18 1010.26Z" fill="#A5725E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1199.4 1329.15L1163.77 1402.72" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1186.02 1329.15L1134.8 1436.14" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1051.34 923.406C1051.34 923.406 1051.64 989.792 1050.28 997.098C1048.92 1004.4 1027.64 1001.77 1027.22 1011.24C1026.79 1020.71 1059.07 1110.16 1090.5 1137.85C1121.93 1165.55 1131.61 1161.72 1140.96 1140.02C1150.3 1118.32 1153.06 1075.67 1153.7 1062C1153.96 1055.92 1155.23 1040.76 1153.7 1033.37C1151.49 1022.96 1148.69 1008.1 1139.9 1002.07L1136.54 999.773L1137.94 967.196C1137.94 967.196 1084.38 962.779 1051.34 923.406Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1136.5 999.773L1137.9 967.196C1137.9 967.196 1084.38 962.949 1051.34 923.406V923.831L1053.55 934.025C1053.55 934.025 1074.36 995.229 1139.85 1001.98L1136.5 999.773Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1102.56 762.39C1102.56 762.39 1043.1 744.041 1040.51 735.504C1037.92 726.967 1040.77 706.028 1033.2 710.02C1025.64 714.013 1026.66 739.199 1036.86 747.015C1047.05 754.83 1103.46 765.703 1107.32 774.282C1111.19 782.862 1105.62 788.936 1086.64 813.4C1067.65 837.865 985.04 874.35 984.658 882.844C984.275 891.339 993.705 916.823 1008.4 918.607C1017.7 919.42 1027.01 917.248 1034.99 912.406C1045.32 932.046 1060.57 948.67 1079.25 960.656C1108.98 978.792 1151.88 985.885 1177.91 968.089C1192.14 958.32 1217.24 910.792 1219.15 890.872C1221.06 870.952 1210.45 848.398 1210.66 839.904C1210.87 831.409 1211.47 821.003 1211.47 821.003C1211.47 821.003 1137.43 779.889 1127.28 771.012C1120.22 765.493 1111.53 762.462 1102.56 762.39Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1089.82 820.833C1089.82 820.833 1111.06 807.241 1132.29 817.902" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1173.28 818.879C1173.28 818.879 1186.83 812.083 1199.57 827.629" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1161.69 855.533C1161.69 855.533 1160.03 870.186 1164.06 873.542C1168.1 876.897 1176.47 879.318 1172.01 885.477C1167.55 891.636 1153.79 892.06 1147.8 884.415" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1179.44 907.904C1179.44 907.904 1162.07 919.797 1134.12 909.094" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1116.79 852.859C1116.54 858.678 1113.01 863.265 1108.98 863.052C1104.94 862.84 1101.8 858.04 1102.05 852.222C1102.31 846.403 1105.79 841.858 1109.87 842.028C1113.95 842.198 1117.05 847.082 1116.79 852.859Z" fill="#263238"/>
<path d="M1191.42 856.085C1191.16 861.904 1187.64 866.491 1183.6 866.279C1179.57 866.067 1176.42 861.267 1176.68 855.448C1176.93 849.629 1180.46 845.085 1184.49 845.255C1188.53 845.425 1191.67 850.309 1191.42 856.085Z" fill="#263238"/>
<path d="M1136.89 829.24L1085.55 827.017C1079.41 826.751 1074.21 831.513 1073.95 837.653L1073.09 857.469C1072.82 863.609 1077.58 868.802 1083.72 869.068L1135.07 871.292C1141.21 871.558 1146.4 866.796 1146.67 860.656L1147.53 840.84C1147.79 834.699 1143.03 829.506 1136.89 829.24Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1213.62 832.599L1172.8 830.831C1166.66 830.565 1161.47 835.327 1161.2 841.467L1160.35 861.284C1160.08 867.424 1164.84 872.617 1170.98 872.883L1211.8 874.651C1217.94 874.917 1223.14 870.155 1223.4 864.015L1224.26 844.198C1224.53 838.058 1219.76 832.865 1213.62 832.599Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1147.84 834.934L1160.45 835.486" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1073.68 845.425L1044.25 844.15" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1098.02 1471.06C1098.02 1471.06 1128.9 1469.7 1139.85 1464.81C1150.81 1459.93 1228.03 1439.33 1231.98 1440.65C1245.16 1446.08 1257.94 1452.46 1270.21 1459.72C1276.45 1464.3 1289.87 1500.87 1294.97 1515.36C1295.59 1516.96 1295.57 1518.74 1294.9 1520.33C1294.24 1521.91 1292.98 1523.18 1291.4 1523.85C1289.92 1524.54 1288.24 1524.66 1286.68 1524.2C1285.12 1523.74 1283.77 1522.72 1282.9 1521.35L1271.78 1503.51L1279.8 1536.89C1280.25 1538.64 1280.01 1540.49 1279.13 1542.07C1278.25 1543.65 1276.81 1544.84 1275.09 1545.39C1273.72 1545.83 1272.26 1545.86 1270.88 1545.45C1269.5 1545.05 1268.27 1544.24 1267.36 1543.13L1241.2 1510.81L1228.45 1498.07L1255.21 1547.76C1255.7 1548.67 1255.96 1549.69 1255.98 1550.72C1256 1551.75 1255.77 1552.77 1255.32 1553.7C1254.87 1554.63 1254.2 1555.44 1253.38 1556.06C1252.56 1556.68 1251.6 1557.1 1250.58 1557.28C1249.57 1557.45 1248.53 1557.38 1247.55 1557.08C1246.57 1556.77 1245.67 1556.25 1244.93 1555.54C1237.25 1548.06 1213.46 1524.91 1211.38 1521.56C1207.1 1516.48 1202.36 1511.8 1197.24 1507.58L1223.23 1556.94C1223.71 1557.62 1224.03 1558.4 1224.18 1559.22C1224.32 1560.04 1224.29 1560.89 1224.08 1561.69C1223.87 1562.5 1223.49 1563.25 1222.96 1563.9C1222.43 1564.54 1221.77 1565.07 1221.02 1565.43H1220.64C1211.8 1565.77 1207.34 1559.49 1201.02 1553.29L1173.66 1526.53C1173.66 1526.53 1131.74 1535.4 1119.81 1532.22C1107.87 1529.03 1080.65 1507.75 1080.65 1507.75L1098.02 1471.06Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1098.02 1471.06L1096.83 1518.63L1080.35 1507.8L1098.02 1471.06Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1271.61 1503.51L1262.22 1484.52L1229.09 1460.31" fill="white"/>
<path d="M1271.61 1503.51L1262.22 1484.52L1229.09 1460.31" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1228.16 1498.11L1213.12 1482.4" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M900.517 1049.81C900.517 1049.81 859.063 1048.02 847.68 1063.61C836.297 1079.2 809.794 1449.91 810.431 1466C811.068 1482.1 1066.59 1547.38 1066.59 1547.38L1103.5 1468.6L950.891 1378.3L959.768 1167.63" fill="white"/>
<path d="M900.517 1049.81C900.517 1049.81 859.063 1048.02 847.68 1063.61C836.297 1079.2 809.794 1449.91 810.431 1466C811.068 1482.1 1066.59 1547.38 1066.59 1547.38L1103.5 1468.6L950.891 1378.3L959.768 1167.63" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M882.977 1380.42C882.977 1380.42 922.986 1360.54 950.934 1378.3" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M898.775 1392.95C911.341 1385.36 925.717 1381.28 940.399 1381.14" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M878.855 1412.62C879.789 1410.96 880.854 1409.38 882.041 1407.9" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1873.2 1488.01C1873.2 1488.01 1854.21 1463.88 1854.21 1449.23C1854.21 1434.57 1868.87 1456.15 1868.87 1456.15C1868.87 1456.15 1837.86 1399.28 1840.45 1376C1843.04 1352.73 1866.28 1416.52 1866.28 1416.52C1866.28 1416.52 1858.55 1285.58 1871.46 1289.87C1884.37 1294.16 1900.76 1417.29 1900.76 1425.14C1900.76 1433 1911.94 1370.86 1920.56 1388.96C1929.18 1407.05 1929.05 1450.12 1929.05 1450.12C1929.05 1450.12 1940.27 1384.63 1948.89 1407.05C1957.51 1429.48 1938.61 1488.85 1938.61 1488.85" fill="#A5725E"/>
<path d="M1960.23 1507.93H1855.36V1594.95H1960.23V1507.93Z" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1961.08 1538.08V1488.6H1854.89V1545.43C1854.89 1548.81 1856.23 1552.05 1858.62 1554.44C1861.01 1556.83 1864.26 1558.17 1867.63 1558.17H1868.31C1871.69 1558.17 1874.93 1556.83 1877.32 1554.44C1879.71 1552.05 1881.06 1548.81 1881.06 1545.43V1538.25H1881.74V1545.43C1881.74 1548.81 1883.08 1552.05 1885.47 1554.44C1887.86 1556.83 1891.1 1558.17 1894.48 1558.17H1895.16C1898.54 1558.17 1901.78 1556.83 1904.17 1554.44C1906.56 1552.05 1907.9 1548.81 1907.9 1545.43V1538.25H1908.58V1545.43C1908.58 1548.81 1909.92 1552.05 1912.31 1554.44C1914.7 1556.83 1917.94 1558.17 1921.32 1558.17H1921.96C1925.34 1558.17 1928.58 1556.83 1930.97 1554.44C1933.36 1552.05 1934.7 1548.81 1934.7 1545.43V1538.25H1935.38V1545.43C1935.38 1548.81 1936.72 1552.05 1939.11 1554.44C1941.5 1556.83 1944.74 1558.17 1948.12 1558.17H1948.76C1952.14 1558.17 1955.38 1556.83 1957.77 1554.44C1960.16 1552.05 1961.5 1548.81 1961.5 1545.43V1538.25L1961.08 1538.08Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M686.537 1530.01V1493.44H606.602V1528.65L686.537 1530.01Z" fill="#BFBFBF" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M606.601 1493.44L598.488 1474.46C614.336 1473.01 630.31 1473.93 645.889 1477.17C660.357 1479.94 674.157 1485.46 686.536 1493.44H606.601Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M598.488 1474.46C598.488 1474.46 571.39 1475.81 556.482 1494.8C547.206 1507.48 541.58 1522.47 540.215 1538.12L606.601 1528.65V1493.44L598.488 1474.46Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M584.941 1505.63V1532.69L564.596 1534.05C564.044 1526.56 565.511 1519.07 568.844 1512.34C570.217 1509.43 572.625 1507.13 575.599 1505.89C578.574 1504.65 581.903 1504.55 584.941 1505.63Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M603.884 1609.95H561.92L534.822 1562.5L587.659 1549L603.884 1609.95Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M786.774 1558.47L759.676 1609.95H603.884L580.863 1565.22L786.774 1558.47Z" fill="#A6A6A6" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.904 1565.26H794.928V1527.33H580.904V1565.26Z" fill="#BFBFBF" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M580.863 1527.29L530.744 1544.92V1567.94L580.863 1565.22V1527.29Z" fill="white" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1136.37 1585.23L1410.71 1581.06L1438.82 1576.48H1724.92L1715.54 1595.76H1129.32L1136.37 1585.23Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1784.81 1513.45H1433.05L1482.36 1159.6H1834.08L1784.81 1513.45Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1800.53 1513.45H1448.76L1498.07 1159.6H1849.84L1800.53 1513.45Z" fill="#3D3D3D" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1695.15 1403.14H1584.85L1603.41 1269.95H1713.71L1695.15 1403.14Z" fill="#3D3D3D" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1603.41 1269.95L1498.07 1159.6H1849.84L1713.71 1269.95H1603.41Z" fill="#595959" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1584.85 1403.14L1456.58 1512.3L1800.53 1513.45L1695.15 1403.14H1584.85Z" fill="#2E2E2E" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1663.34 1427.39C1699.79 1427.39 1729.34 1397.84 1729.34 1361.39C1729.34 1324.94 1699.79 1295.39 1663.34 1295.39C1626.88 1295.39 1597.33 1324.94 1597.33 1361.39C1597.33 1397.84 1626.88 1427.39 1663.34 1427.39Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1669.37 1327.92H1673.62C1685.04 1327.92 1695.99 1332.46 1704.07 1340.54C1712.15 1348.61 1716.68 1359.57 1716.68 1370.99V1604.59H1626.3V1370.99C1626.3 1359.57 1630.84 1348.61 1638.92 1340.54C1646.99 1332.46 1657.95 1327.92 1669.37 1327.92Z" fill="#595959" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1716.69 1604.55V1373.11C1715.49 1363.04 1710.33 1353.86 1702.37 1347.59C1694.4 1341.32 1684.26 1338.47 1674.19 1339.67C1664.12 1340.86 1654.94 1346.02 1648.67 1353.99C1642.39 1361.95 1639.54 1372.09 1640.74 1382.16V1604.55H1716.69Z" fill="#595959" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1685.55 1488.81H1684.49C1678.3 1488.81 1673.28 1493.83 1673.28 1500.02V1537.27C1673.28 1543.47 1678.3 1548.49 1684.49 1548.49H1685.55C1691.74 1548.49 1696.77 1543.47 1696.77 1537.27V1500.02C1696.77 1493.83 1691.74 1488.81 1685.55 1488.81Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1718.47 1582.85H1552.14V1604.55H1718.47V1582.85Z" fill="#595959" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2003.81 1595.5H13.9277V1633.48H2003.81V1595.5Z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      
      </div>
      
      <div className="flex items-center gap-x-4 text-dark-green mt-4 "><AiOutlineCopyright className="text-xl" /><span> 2023.OPHIN All rights reserved</span></div>
      
    </footer>
  );
};

export default Footer;
