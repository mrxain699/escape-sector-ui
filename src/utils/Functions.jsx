export const getFormattedData = (data) => {
  const tasks = data.tasks;
  tasks.forEach((task, index) => {
    const new_object = {
      ...task,
      location: {
        latitude: parseFloat(task.latitude),
        longitude: parseFloat(task.longitude),
      },
      hints: task.hints.split("\n"),
    };
    tasks[index] = new_object;
  });
  const formated_data = {
    ...data,
    location: {
      latitude: parseFloat(data.latitude),
      longitude: parseFloat(data.longitude),
    },
    tasks: tasks,
    official: true,
  };
  return formated_data;
};
