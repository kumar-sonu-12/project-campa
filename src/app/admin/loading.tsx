// import BounceLoader from "@/components/helpers/Loader";

import BounceLoader from "@/components/helpers/Loader";

// import { BounceLoader } from "@/components/helpers/Loader";

function Loading() {
  return (
    <div className="w-screen flex flex-col p-5 justify-center items-center  min-h-screen h-auto">
      <BounceLoader />;
    </div>
  );
}

export default Loading;
