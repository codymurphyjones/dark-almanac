import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import { NextRequest, NextResponse } from "next/server";

function finish(
  msg: string,
  res: (value: string | PromiseLike<string>) => void
) {
  return () => {
    console.log(msg);
    res(msg);
  };
}

function wait(duration: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(finish("testing", resolve), duration);
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query =
    process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD
      ? "100"
      : searchParams.get("delay") || "10000";
  const isValueNaN = Number.isNaN(parseInt(query));
  if (isValueNaN) await wait(10000);
  else await wait(parseInt(query));

  const greeting = "Hello World!!";
  const json = {
    greeting,
  };
  console.log("confirm being hit");
  return NextResponse.json(json);
}
