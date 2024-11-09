"use client";

import { useState, useEffect, useRef } from "react";

const codeString = `#include <stdio.h>

int main() {
    printf("Hello, world!\\n");
    ClickPieChart();
    return 0;
}`;

export function MeMain() {
  const [typedCode, setTypedCode] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const idxRef = useRef(0);

  useEffect(() => {
    function typeCharacter() {
      if (idxRef.current < codeString.length) {
        setTypedCode((prev) => prev + codeString[idxRef.current]);
        idxRef.current++;
        timeoutRef.current = setTimeout(typeCharacter, 50); // 타이핑 속도 조절
      }
    }

    typeCharacter();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4">
      {
        <div className="mt-4">
          <pre
            id="code-block"
            className="p-4 text-white rounded-md overflow-x-auto"
          >
            <code>{typedCode}</code>
          </pre>
        </div>
      }
    </div>
  );
}
