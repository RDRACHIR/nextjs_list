function About() {
  return (
    <div className="bg-slate-400 p-10 rounded-md h-72 text-center my-40 font-bold text-xl">
      <h3 className="mb-5">
        {" "}
        <h3 className="p-5 text-3xl">About this application</h3>
      </h3>
      <p className="text-black">
        This is an application to practice NextJs and Tailwinds, which lists
        users and consumes the reqres.in API.
      </p>
      <div className="flex justify-center p-5 mx-5">
        <img
          src="https://img.icons8.com/fluency/48/nextjs.png"
          className="w-16 h-16"
        />
        <img
          src="https://img.icons8.com/plasticine/100/tailwind_css.png"
          className="w-18 h-18"
        />
      </div>
    </div>
  );
}

export default About;
