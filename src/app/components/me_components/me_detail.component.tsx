import { useEffect, useMemo, useState } from "react";
import { useMeState } from "../../../../context/select_me.context";
import { DEFAULT_ME } from "./me_info_objects";

export function MeDetail() {
  const defaultData = useMemo(() => {
    return DEFAULT_ME;
  }, []);

  const { meInfo } = useMeState();
  const [curInfo, setCurInfo] = useState<MeInfo>(DEFAULT_ME);

  useEffect(() => {
    if (meInfo === undefined) {
      setCurInfo(defaultData);
    } else {
      setCurInfo(meInfo);
    }
  }, [meInfo]);

  return (
    <>
      <div className="h-[300px] w-full">
        <h1 className="font-inter font-bold text-2xl text-[#298D92]">{curInfo.title}</h1>
        <p
          className="font-inter font-bold text-lg text-[#B6AFAF] hover:text-[#e0dddd]"
          dangerouslySetInnerHTML={{ __html: curInfo.body }}
        ></p>
      </div>
    </>
  );
}
