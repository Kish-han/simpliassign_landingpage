"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { Switch } from "./ui/switch";

type Props = {};

const Themetoggle = (props: Props) => {
  const { setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  return (
    <div>
      <Switch
      
        onCheckedChange={() => {
          setMounted(!mounted);
          mounted ? setTheme("dark") : setTheme("light") ;
          console.log(mounted);
          console.log(setTheme.name);
        }}
        defaultChecked={true}
      />
    </div>
  );
};

export default Themetoggle;
