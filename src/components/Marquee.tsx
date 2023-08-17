// TAKEN FROM https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-t-2 border-b-2 border-current">
      <div className="py-6 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">Welcome to Sandbox for Vocode</span>
        <span className="text-4xl mx-4">----</span>
        <span className="text-4xl mx-4">Welcome to Sandbox for Vocode</span>
        <span className="text-4xl mx-4">----</span>
        {/* <span className="text-4xl mx-4">Marquee Item 5</span> */}
      </div>

      <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">Welcome to Sandbox for Vocode</span>
        <span className="text-4xl mx-4">----</span>
        <span className="text-4xl mx-4">Welcome to Sandbox for Vocode</span>
        <span className="text-4xl mx-4">----</span>
        {/* <span className="text-4xl mx-4">Marquee Item 5</span> */}
      </div>
    </div>
  );
};

export default Marquee;
