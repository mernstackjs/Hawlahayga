import { useEffect } from "react";

export default function Task({
  Tasks,
  setTasks,
  loading,
  error,
  setLoading,
  setError,
}) {
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3003/api/task");

      if (!res.ok) {
        const dataError = await res.json();
        console.log(dataError);
        setError(dataError);
        return;
      }
      const data = await res.json();
      setTasks(data.Tasks);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <div>..............</div>;
  // console.log(Tasks);
  const handleDelate = async (taskId) => {
    console.log(taskId);

    try {
      const res = await fetch(`http://localhost:3003/api/task/${taskId}`, {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const dataError = await res.json();
        console.log(dataError);

        setError(dataError);
        return;
      }

      const data = await res.json();
      console.log(data);

      setTasks((prev) => prev.filter((task) => task._id !== taskId));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {Tasks.length !== 0 ? (
        <div>
          <h1 className="text-3xl font-semibold my-6 text-center ">
            Tasks Lists
          </h1>

          <div className="grid md:grid-cols-2 gap-4">
            {Tasks?.map((task) => (
              <div className="border p-3 rounded-md" key={task._id}>
                <h1 className="text-xl font-semibold my-2">{task.title}</h1>
                <h1 className="text-sm font-mono">{task.desc}</h1>
                <button
                  onClick={() => handleDelate(task._id)}
                  className="bg-red-500 py-2 mt-3 mb-2 px-3 rounded-md"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-xl font-extralight italic m-5">
          Dont Have Any Tasks
        </h1>
      )}
    </div>
  );
}
