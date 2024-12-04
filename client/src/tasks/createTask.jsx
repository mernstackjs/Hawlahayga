export default function CreateTask({ setTasks, setLoading, setError, error }) {
  setTimeout(() => {
    setError("");
  }, 2000);
  const handleCreateTask = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const desc = formData.get("desc");
    try {
      const res = await fetch("http://localhost:3003/api/task", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setTasks((prev) => [data.task, ...prev]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="border h-72 p-4">
      {error && (
        <span className="text-lg font-extralight text-red-600">{error}</span>
      )}
      <form onSubmit={handleCreateTask}>
        <h1 className="text-3xl font-semibold mb-3 text-center">
          Create Tasks Form
        </h1>
        <input
          className="p-3 bg-transparent rounded-md border w-full"
          type="text"
          name="title"
          placeholder="Enter Your Title"
        />
        <input
          className="p-3 my-3 bg-transparent rounded-md border w-full"
          type="text"
          name="desc"
          placeholder="Enter Your Desc"
        />
        <button
          type="submit"
          className="p-3 bg-blue-700 text-white text-lg rounded-md"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
