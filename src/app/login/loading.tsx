import BounceLoader from "@/components/helpers/Loader";

function Loading() {
  return (
    <div
      className="w-screen flex flex-col p-5 justify-center items-center  min-h-screen h-auto"
      style={{
        background: `
        radial-gradient(
        50% 80% at 50% 100%, 
        #673C96 0%, 
        #56327D 35%, 
        #211330 100%
      )`
      }}
    >
      <BounceLoader />;
    </div>
  );
}

export default Loading;
