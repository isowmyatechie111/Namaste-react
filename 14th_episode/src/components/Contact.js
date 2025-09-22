const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2"></h1>
      <form>
        <input
          type="text"
          className="border-black p-2 m-2 border"
          placeholder="name"
        />
        <input
          type="text"
          className="border-black p-2 m-2 border"
          placeholder="message"
        />
        <button className="p-2 m-2 border  bg-blue-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
