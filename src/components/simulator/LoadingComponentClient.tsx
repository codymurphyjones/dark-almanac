"use client";
import { Grid } from "react-loader-spinner";

export default function LoadingComponentClient() {
  return (
    <main className="flex flex-1 bg-gray-800 h-full">
      <div className="flex flex-1 bg-gray-800 h-full">
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </div>
    </main>
  );
}
