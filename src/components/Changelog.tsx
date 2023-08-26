const Changelog = () => {
  return (
    <div className="text-text p-2 space-y-2 bg-secondary overflow-auto">
      <h1 className="border-border border-[1px] w pl-1 text-center hover:bg-highlight">
        *** Announcement ***
      </h1>
      <p>
        At the time of this website's update, Vocode has deprecated my
        serverless implementation of their API. I am currently working on fixing
        the voice AI, so stay tuned!
      </p>
      <h1 className="border-border border-[1px] w pl-1 text-center hover:bg-highlight">
        V 1.1.0
      </h1>
      <p>
        Draggable and Resizable Windows have been added! Transcript was
        completed, but was unable to integrate with vocode because of
        depracation issues. Light and dark mode have come along with a complete
        re-write in Tailwind CSS.
      </p>
    </div>
  );
};

export default Changelog;
